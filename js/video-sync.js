// Put this on the a-video tag in the template
// This will run for everybody in the room

AFRAME.registerComponent('video-sync', {
  schema: {
    paused: {default: true},
    currentTime: {default: 0},
    timeSlop: {default: 0.5},
    src: {default: "https://cdn.glitch.com/bf4db82b-cdcf-4019-a281-153f8e3d1e9f%2Fletsgetitonencoded.mp4?v=1588473010045"}
  },
  
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
    
    
    // Update time
        
//     var networked = this.networkedEl;
    
//     if (!networked || networked.components.networked.data.owner === NAF.clientId) {       
//       var delta = this.data.currentTime - video.currentTime;
//       if (delta < 0.0 || delta > this.data.timeSlop) {
//         video.currentTime = this.data.currentTime;
//       }
//     }

    // Implement some slop, so we don't keep trying to exactly match,
    // always failing due to buffer fetch etc.
    
  }
});      
