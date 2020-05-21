// If the user is a host:

AFRAME.registerComponent('host', {
  schema: {},

  init: function () {
    if (this.isHost()) {
      console.log('I am host');
      var scene = document.querySelector('a-scene');
      var el = document.createElement('a-entity');
      el.setAttribute('networked', 'template:#video-template');
      el.setAttribute('position', '0 1.6 -1');
      scene.appendChild(el);
    } else {
      console.log('I am NOT the host');
    }
  },
  
  isHost: function() {
    return this.getParameterByName('host') === 'true';
  },
  
  getParameterByName: function(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
});