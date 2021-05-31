const sonny = io.connect(window.location.origin);
// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const roomName = urlParams.get('room');

// console.log('sonny: ', sonny);
// console.log('queryString: ', queryString);
// console.log('urlParams: ', urlParams);
// console.log('roomName: ', roomName);

// Next Button

var el = document.getElementById('nextButton');

if (el.addEventListener) {
  el.addEventListener('click', nextFunction, false);
  console.log('false');
} else {
  el.attachEvent('onclick', nextFunction);
  console.log('true');
}

var video_count = 0;

function nextFunction() {
  console.log('nextFunction!');
  sonny.emit('next', roomName);
  video_count++;

  if (video_count == playlist.length) video_count = 0;

  var video = document.querySelector('#karaoke-video');
  var videoSync = document.querySelector('#karaoke-video source');

  video.pause();
  videoSync.setAttribute('src', playlist[video_count]);
  videoSync.setAttribute('currentTime', 0);
  video.load();
  video.play();

  console.log('host setting video to ', playlist[video_count]);
}

// Back Button

var el = document.getElementById('backButton');

if (el.addEventListener) {
  el.addEventListener('click', backFunction, false);
  console.log('false');
} else {
  el.attachEvent('onclick', backFunction);
  console.log('true');
}

// var video_count = 0;

function backFunction() {
  sonny.emit('prev', roomName);

  if (video_count != 0) {
    video_count--;
  }

  var video = document.querySelector('#karaoke-video');
  var videoSync = document.querySelector('#karaoke-video source');

  video.pause();
  videoSync.setAttribute('src', playlist[video_count]);
  videoSync.setAttribute('currentTime', 0);
  video.load();
  video.play();

  console.log('host setting video to ', playlist[video_count]);
}

// Down Button

var el = document.getElementById('volumeDownButton');

if (el.addEventListener) {
  el.addEventListener('click', volumnDownFunction, false);
  console.log('false');
} else {
  el.attachEvent('onclick', volumnDownFunction);
  console.log('true');
}

function volumnDownFunction() {
  sonny.emit('voldec', roomName);

  var video = document.querySelector('#karaoke-video');
  // video.volume = 0.5;
  video.volume = video.volume - 0.2;

  console.log('Volume set to low');
}

// Up Button

var el = document.getElementById('volumeUpButton');

if (el.addEventListener) {
  el.addEventListener('click', volumnUpFunction, false);
  console.log('false');
} else {
  el.attachEvent('onclick', volumnUpFunction);
  console.log('true');
}

function volumnUpFunction() {
  sonny.emit('volinc', roomName);

  var video = document.querySelector('#karaoke-video');
  // video.volume = 1.0;
  video.volume = video.volume + 0.2;

  console.log('Volume set to low');
}

sonny.on('prev', function () {
  console.log('prev event gotten on the client');

  if (video_count != 0) {
    video_count--;
  }

  var video = document.querySelector('#karaoke-video');
  var videoSync = document.querySelector('#karaoke-video source');

  video.pause();
  videoSync.setAttribute('src', playlist[video_count]);
  videoSync.setAttribute('currentTime', 0);
  video.load();
  video.play();

  console.log('host setting video to ', playlist[video_count]);
});

sonny.on('next', function () {
  console.log('Next event gotten on the client');

  video_count++;

  if (video_count == playlist.length) video_count = 0;

  var video = document.querySelector('#karaoke-video');
  var videoSync = document.querySelector('#karaoke-video source');

  video.pause();
  videoSync.setAttribute('src', playlist[video_count]);
  videoSync.setAttribute('currentTime', 0);
  video.load();
  video.play();

  console.log('host setting video to ', playlist[video_count]);
});

sonny.on('voldec', function () {
  console.log('Volume - event gotten on the client');

  var video = document.querySelector('#karaoke-video');
  // video.volume = 0.5;
  video.volume = video.volume - 0.2;

  console.log('Volume set to low');
});

sonny.on('volinc', function () {
  console.log('Volume + event gotten on the client');

  var video = document.querySelector('#karaoke-video');
  // video.volume = 1.0;
  video.volume = video.volume + 0.2;

  console.log('Volume set to low');
});
