// Put this on the a-video tag in the template
// This will run for everybody in the room

AFRAME.registerComponent('video-sync', {
  schema: {
    paused: {default: true},
    currentTime: {default: 0},
    timeSlop: {default: 0.5},
    src: {default: "https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Fintro.mp4?v=1616435233774"}
  },
  
  // https://cdn.glitch.com/bf4db82b-cdcf-4019-a281-153f8e3d1e9f%2Fletsgetitonencoded.mp4?v=1588473010045
  
  init: function () {
    
    console.log('Synced video loaded');
    
    var networked = this.networkedEl;
    if (!networked || networked.components.networked.data.owner === NAF.clientId) { 
      setInterval(this.videoTick.bind(this), 1);
    }
  },
  
  videoTick: function () {
    var video = document.querySelector('#html-video');
    this.el.setAttribute('video-sync', 'currentTime', video.currentTime);
  },
  
  update: function(oldData) {
    // Change the HTML video tag's new state
    var video = document.querySelector('#html-video');
    
    if (this.data.paused && !video.paused) {
      console.log('video paused')
      video.pause();
    } else if (!this.data.paused && video.paused) {
      console.log('video played')
      video.play();
      video.currentTime = this.data.currentTime;
    }
    
    if (video.src !== this.data.src) {
      console.log('video src set to', this.data.src);
      video.src = this.data.src;
    }
  }
});