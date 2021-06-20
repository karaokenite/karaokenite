// main.js is for index.html
// main2.js is is for room.html

// Socket.io socket
var socket;

// The stream object used to send media
let localStream = null;

// All peer connections
let peers = {};

// Redirect if not https
if (
  location.protocol !== 'https:' &&
  location.hostname !== 'localhost' &&
  !location.port
) {
  location.href =
    'https:' + window.location.href.substring(window.location.protocol.length);
}

// ==================== CONFIGURATION ====================

// RTCPeerConnection configuration

const configuration = {
  iceServers: [
    // { urls: 'stun:stun.services.mozilla.com' },
    { urls: 'stun:stun.l.google.com:19302' },
    {
      url: 'turn:192.158.29.39:3478?transport=udp',
      credential: 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
      username: '28224511:1379330808',
    },
  ],
};

// UserMedia constraints

let constraints = {
  audio: true,
  video: {
    width: {
      max: 300,
    },
    height: {
      max: 300,
    },
  },
};

constraints.video.facingMode = {
  ideal: 'user',
};

// Enabling the camera at startup

navigator.mediaDevices
  .getUserMedia(constraints)
  .then((stream) => {
    console.log('Received local stream');

    localVideo.srcObject = stream;
    localStream = stream;

    // init();
  })
  .catch((e) => alert(`getusermedia error ${e.name}`));

init();

// Initialize the socket connections

function init() {
  // Get room name
  let params = new URLSearchParams(window.location.search),
    roomName = (params.get('room') || '').trim().replace(' ', '-');

  if (!roomName) {
    alert('Please enter the room name.');
    return;
  }

  socket = io('/', {
    query: {
      roomName: roomName,
    },
  });

  socket.on('initReceive', (socket_id) => {
    console.log('INIT RECEIVE ' + socket_id);
    addPeer(socket_id, false);

    socket.emit('initSend', socket_id);
  });

  socket.on('initSend', (socket_id) => {
    console.log('INIT SEND ' + socket_id);
    addPeer(socket_id, true);
  });

  socket.on('removePeer', (socket_id) => {
    console.log('removing peer ' + socket_id);
    removePeer(socket_id);
  });

  socket.on('disconnect', () => {
    console.log('GOT DISCONNECTED');
    for (let socket_id in peers) {
      removePeer(socket_id);
    }
  });

  socket.on('signal', (data) => {
    peers[data.socket_id].signal(data.signal);
  });
}

// Remove a peer with given socket_id.
// Removes the video element and deletes the connection
// @param {String} socket_id

function removePeer(socket_id) {
  let videoEl = document.getElementById(socket_id);
  if (videoEl) {
    const tracks = videoEl.srcObject.getTracks();

    tracks.forEach(function (track) {
      track.stop();
    });

    videoEl.srcObject = null;
    videoEl.parentNode.removeChild(videoEl);
  }
  if (peers[socket_id]) peers[socket_id].destroy();
  delete peers[socket_id];
}

// Creates a new peer connection and sets the event listeners
// @param {String} socket_id
//                 ID of the peer
// @param {Boolean} am_initiator
//                  Set to true if the peer initiates the connection process.
//                  Set to false if the peer receives the connection.

function addPeer(socket_id, am_initiator) {
  peers[socket_id] = new SimplePeer({
    initiator: am_initiator,
    stream: localStream,
    config: configuration,
  });

  peers[socket_id].on('signal', (data) => {
    socket.emit('signal', {
      signal: data,
      socket_id: socket_id,
    });
  });

  peers[socket_id].on('stream', (stream) => {
    let newVid = document.createElement('video');
    newVid.srcObject = stream;
    newVid.id = socket_id;
    newVid.playsinline = false;
    newVid.autoplay = true;
    // newVid.id = 'video';
    // newVid.className = "video-camera"
    // newVid.className = "peer-video"
    newVid.classList.add('user-camera', 'peer-video');
    newVid.onclick = () => openPictureMode(newVid);
    newVid.ontouchstart = (e) => openPictureMode(newVid);

    let user = document.createElement('div');
    user.className = 'user';
    user.appendChild(newVid);
    videoChatRoom.appendChild(user);

    // Original:

    // let user = document.createElement('div');
    // user.className = 'user';
    // user.appendChild(newVid);
    // videoChatRoom.appendChild(user);

    // Recreate:
    // videos.appendChild(newVid);
  });
}

// Opens an element in Picture-in-Picture mode
// @param {HTMLVideoElement} el video element to put in pip mode

function openPictureMode(el) {
  console.log('opening pip');
  el.requestPictureInPicture();
}

// Switches the camera between user and environment.
// It will just enable the camera. 2 cameras not supported.

function switchMedia() {
  if (constraints.video.facingMode.ideal === 'user') {
    constraints.video.facingMode.ideal = 'environment';
  } else {
    constraints.video.facingMode.ideal = 'user';
  }

  const tracks = localStream.getTracks();

  tracks.forEach(function (track) {
    track.stop();
  });

  localVideo.srcObject = null;

  navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
    for (let socket_id in peers) {
      for (let index in peers[socket_id].streams[0].getTracks()) {
        for (let index2 in stream.getTracks()) {
          if (
            peers[socket_id].streams[0].getTracks()[index].kind ===
            stream.getTracks()[index2].kind
          ) {
            peers[socket_id].replaceTrack(
              peers[socket_id].streams[0].getTracks()[index],
              stream.getTracks()[index2],
              peers[socket_id].streams[0]
            );
            break;
          }
        }
      }
    }

    localStream = stream;
    localVideo.srcObject = stream;
  });
}

// Disables and removes the local stream and all the connections to other peers.

function removeLocalStream() {
  if (localStream) {
    const tracks = localStream.getTracks();

    tracks.forEach(function (track) {
      track.stop();
    });

    localVideo.srcObject = null;
  }

  for (let socket_id in peers) {
    removePeer(socket_id);
  }
}

// Enable/disable microphone

let muteButton = document.getElementById('muteButton');
// console.log(muteButton);
let muteButtonIcon = document.getElementById('muteButtonIcon');
let hideCameraButton = document.getElementById('hideCameraButton');
let leaveRoomButton = document.getElementById('leaveRoomButton');

let muteFlag = false;
let hideCameraFlag = false;

muteButton.addEventListener('click', function () {
  muteFlag = !muteFlag;
  if (muteFlag) {
    localStream.getTracks()[0].enabled = false;
    muteButtonIcon.src =
      'https://cdn.glitch.com/f69fa717-be61-48e8-9ad2-e8edd524fe90%2Ficon_mic_slash_white.svg?v=1614747343660';
  } else {
    localStream.getTracks()[0].enabled = true;
    muteButtonIcon.src =
      'https://cdn.glitch.com/f69fa717-be61-48e8-9ad2-e8edd524fe90%2Ficon_mic_white.svg?v=1614747341515';
  }
});

hideCameraButton.addEventListener('click', function () {
  hideCameraFlag = !hideCameraFlag;

  if (hideCameraFlag) {
    localStream.getTracks()[1].enabled = false;
    // hideCameraButton.textContent = "Show Camera";
  } else {
    localStream.getTracks()[1].enabled = true;
    // hideCameraButton.textContent = "Hide Camera";
  }
});
