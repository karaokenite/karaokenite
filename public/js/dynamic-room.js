// Setup the Networked-Aframe scene component based on query parameters
if (!window.socket) {
  const socket = io();
  window.socket = socket;
}

AFRAME.registerComponent('dynamic-room', {
  init: function () {
    var el = this.el;
    var params = this.getUrlParams();

    if (!params.room) {
      window.alert('Please add a room name in the URL, eg. ?room=myroom');
    }

    var webrtc = params.hasOwnProperty('webrtc');
    var voice = params.hasOwnProperty('voice');

    // Set local user's name
    var player = document.getElementById('player');
    var myNametag = player.querySelector('.nametag');
    myNametag.setAttribute('text', 'value', params.username);

    console.log(socket);

    socket.emit('sendUsername', {
      room: params.room,
      username: params.username,
    });

    // Setup networked-scene
    var networkedComp = {
      debug: true,
      room: params.room,
      adapter: 'webrtc',
      audio: 'true',
    };
    console.info('Init networked-aframe with settings:', networkedComp);
    el.setAttribute('networked-scene', networkedComp);
  },

  getUrlParams: function () {
    var match;
    var pl = /\+/g; // Regex for replacing addition symbol with a space
    var search = /([^&=]+)=?([^&]*)/g;
    var decode = function (s) {
      return decodeURIComponent(s.replace(pl, ' '));
    };
    var query = window.location.search.substring(1);
    var urlParams = {};

    match = search.exec(query);
    while (match) {
      urlParams[decode(match[1])] = decode(match[2]);
      match = search.exec(query);
    }
    return urlParams;
  },
});
