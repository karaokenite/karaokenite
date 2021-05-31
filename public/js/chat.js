// const socket = io.connect(window.location.origin);
// console.log('chat is connected');
// // const socket = io();

// let divVideoChatLobby = document.getElementById('video-chat-lobby');
// let divVideoChat = document.getElementById('video-chat-room');
// let joinButton = document.getElementById('join');
// let userVideo = document.getElementById('user-video');
// let peerVideo = document.getElementById('peer-video');

// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const roomName = urlParams.get('room');
// const userName = urlParams.get('username');

// // let roomInput = document.getElementById("roomName");
// // console.log("roomInput is", roomInput);

// let divButtonGroup = document.getElementById('btn-group');
// let muteButton = document.getElementById('muteButton');
// let muteButtonIcon = document.getElementById('muteButtonIcon');
// let hideCameraButton = document.getElementById('hideCameraButton');
// let leaveRoomButton = document.getElementById('leaveRoomButton');

// let muteFlag = false;
// let hideCameraFlag = false;

// let roomSize;

// let creator = false;
// let rtcPeerConnection;
// let userStream;

// // Contains the stun server URL we will be using

// let iceServers = {
//   iceServers: [
//     { urls: 'stun:stun.services.mozilla.com' },
//     { urls: 'stun:stun.l.google.com:19302' },
//   ],
// };

// // roomName = roomInput.value;
// console.log('roomName is', roomName);
// socket.emit('join', roomName);

// // joinButton.addEventListener("click", function() {
// //   if (roomInput.value == "") {
// //     alert("Please enter a room name");
// //   } else {
// //     roomName = roomInput.value;
// //     socket.emit("join", roomName);
// //   }
// // });

// // if (roomInput.value == "") {
// //   alert("Please enter a room name");
// // } else {
// //   roomName = roomInput.value;
// //   socket.emit("join", roomName);
// // }

// muteButton.addEventListener('click', function () {
//   muteFlag = !muteFlag;
//   if (muteFlag) {
//     userStream.getTracks()[0].enabled = false;
//     muteButtonIcon.src =
//       'https://cdn.glitch.com/f69fa717-be61-48e8-9ad2-e8edd524fe90%2Ficon_mic_slash_white.svg?v=1614747343660';
//   } else {
//     userStream.getTracks()[0].enabled = true;
//     muteButtonIcon.src =
//       'https://cdn.glitch.com/f69fa717-be61-48e8-9ad2-e8edd524fe90%2Ficon_mic_white.svg?v=1614747341515';
//   }
// });

// hideCameraButton.addEventListener('click', function () {
//   hideCameraFlag = !hideCameraFlag;

//   if (hideCameraFlag) {
//     userStream.getTracks()[1].enabled = false;
//     // hideCameraButton.textContent = "Show Camera";
//   } else {
//     userStream.getTracks()[1].enabled = true;
//     // hideCameraButton.textContent = "Hide Camera";
//   }
// });

// // Triggered when a room is successfully created:

// socket.on('created', function () {
//   creator = true;

//   navigator.mediaDevices
//     .getUserMedia({
//       audio: true,
//       video: { width: 200, height: 120 },
//     })
//     .then(function (stream) {
//       /* use the stream */
//       userStream = stream;
//       // divButtonGroup.style = "display:flex";
//       userVideo.srcObject = stream;
//       userVideo.onloadedmetadata = function (e) {
//         userVideo.play();
//       };
//     })
//     .catch(function (err) {
//       /* handle the error */
//       alert("Couldn't Access User Media");
//     });
// });

// // Triggered when a room is successfully joined:

// socket.on('joined', function (roomName, numClients) {
//   creator = false;

//   console.log('====================== ' + numClients[roomName]);
//   // roomSize = numClients[roomName];

//   navigator.mediaDevices
//     .getUserMedia({
//       audio: true,
//       video: { width: 200, height: 120 },
//     })
//     .then(function (stream) {
//       /* use the stream */
//       userStream = stream;
//       // divButtonGroup.style = "display:flex";
//       userVideo.srcObject = stream;
//       userVideo.onloadedmetadata = function (e) {
//         userVideo.play();
//       };
//       socket.emit('ready', roomName);
//       roomSize = numClients[roomName];
//     })
//     .catch(function (err) {
//       /* handle the error */
//       alert("Couldn't Access User Media");
//     });
// });

// // Cleaning the code to bring these two closer together:
// leaveRoomButton.addEventListener('click', function () {
//   socket.emit('leave', roomName);
//   if (userVideo.srcObject) {
//     userVideo.srcObject.getTracks()[0].stop();
//     userVideo.srcObject.getTracks()[1].stop();
//     // userVideo.srcObject.getTracks().forEach((track) => track.stop());
//   }
//   if (peerVideo.srcObject) {
//     peerVideo.srcObject.getTracks()[0].stop();
//     peerVideo.srcObject.getTracks()[1].stop();
//   }
//   if (rtcPeerConnection) {
//     rtcPeerConnection.ontrack = null;
//     rtcPeerConnection.onicecandidate = null;
//     rtcPeerConnection.close();
//     rtcPeerConnection = null;
//   }
// });
// socket.on('leave', function (roomName, numClients) {
//   // This person is now the creator because they are the only person in the room:
//   creator = true;

//   console.log('====================== ' + numClients[roomName]);
//   if (rtcPeerConnection) {
//     rtcPeerConnection.ontrack = null;
//     rtcPeerConnection.onicecandidate = null;
//     rtcPeerConnection.close();
//     rtcPeerConnection = null;
//   }
//   if (peerVideo.srcObject) {
//     peerVideo.srcObject.getTracks()[0].stop();
//     peerVideo.srcObject.getTracks()[1].stop();
//   }
// });

// // Triggered when a room is full (meaning has 2 people):

// socket.on('full', function () {
//   alert("Room is Full, Can't Join");
// });

// // Triggered when a peer has joined the room and ready to communicate:

// socket.on('ready', function () {
//   if (creator) {
//     rtcPeerConnection = new RTCPeerConnection(iceServers);
//     rtcPeerConnection.onicecandidate = OnIceCandidateFunction;
//     rtcPeerConnection.ontrack = OnTrackFunction;
//     rtcPeerConnection.addTrack(userStream.getTracks()[0], userStream); // audio
//     rtcPeerConnection.addTrack(userStream.getTracks()[1], userStream); // video

//     rtcPeerConnection
//       .createOffer()
//       .then((offer) => {
//         rtcPeerConnection.setLocalDescription(offer);
//         socket.emit('offer', offer, roomName);
//       })

//       .catch((error) => {
//         console.log(error);
//       });
//   }
// });

// // Triggered on receiving an ice candidate from the peer:

// socket.on('candidate', function (candidate) {
//   let icecandidate = new RTCIceCandidate(candidate);
//   rtcPeerConnection.addIceCandidate(icecandidate);
// });

// // Triggered on receiving an offer from the person who created the room:

// socket.on('offer', function (offer) {
//   if (!creator) {
//     rtcPeerConnection = new RTCPeerConnection(iceServers);
//     rtcPeerConnection.onicecandidate = OnIceCandidateFunction;
//     rtcPeerConnection.ontrack = OnTrackFunction;
//     rtcPeerConnection.addTrack(userStream.getTracks()[0], userStream);
//     rtcPeerConnection.addTrack(userStream.getTracks()[1], userStream);
//     rtcPeerConnection.setRemoteDescription(offer);
//     rtcPeerConnection
//       .createAnswer()
//       .then((answer) => {
//         rtcPeerConnection.setLocalDescription(answer);
//         socket.emit('answer', answer, roomName);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// });

// // Triggered on receiving an answer from the person who joined the room:

// socket.on('answer', function (answer) {
//   rtcPeerConnection.setRemoteDescription(answer);
// });

// // Implementing the OnIceCandidateFunction which is part of the RTCPeerConnection Interface:

// function OnIceCandidateFunction(event) {
//   console.log('Candidate');
//   if (event.candidate) {
//     socket.emit('candidate', event.candidate, roomName);
//   }
// }

// // Implementing the OnTrackFunction which is part of the RTCPeerConnection Interface:

// function OnTrackFunction(event) {
//   peerVideo.srcObject = event.streams[0];
//   peerVideo.onloadedmetadata = function (e) {
//     peerVideo.play();
//   };
// }
