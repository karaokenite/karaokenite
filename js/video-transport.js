// AFRAME.registerComponent('video-transport', {
//   schema: {
//     paused: {default: false},
//     currentTime: {default: 0},
//     timeSlop: {default: 0.5},
//     src: {default: "https://cdn.glitch.com/bf4db82b-cdcf-4019-a281-153f8e3d1e9f%2Fletsgetitonencoded.mp4?v=1588473010045"}
//   },

//   init: function () {
//     // Find and remember our networked element.
//     this.networkedEl = this.getNetworkedSelfOrAncestor();
//   },

//   update: function (oldData) {
//     // Get the video element.
//     var videoElement = this.getVideoElement();

//     // ADDED
//     if (this.data.src !== videoElement.src) {
//       videoElement.src = this.data.src;
//     }
    
//     // If paused state is out of sync, take appropriate action.
//     if (this.data.paused !== videoElement.paused) {
//       this.data.paused ? videoElement.pause() : videoElement.play();
//     }

//     // If we are owner, this should be a local change, so just do it.
//     // (We no longer need to ignore currentTime to prevent loop/race from tick.)
//     var networked = this.networkedEl;
//     if (!networked || networked.components.networked.data.owner === NAF.clientId) { 
//       videoElement.currentTime = this.data.currentTime;
//     }

//     // Implement some slop, so we don't keep trying to exactly match,
//     // always failing due to buffer fetch etc.
//     var delta = this.data.currentTime - videoElement.currentTime;
//     if (delta < 0.0 || delta > this.data.timeSlop) {
//       videoElement.currentTime = this.data.currentTime;
//     }
//   },

//   tick: function (t, dt) {
//     // If there are no other clients yet, no need to do any sync logic.
//     if (!NAF.connection || !NAF.connection.connectedClients) { return; }

//     // If not owner, then we're not master, so don't sync data to actual video values.
//     var networked = this.networkedEl;
//     if (networked.components.networked.data.owner !== NAF.clientId) { return; }

//     // Get the video element.
//     var videoElement = this.getVideoElement();

//     // Read transport data values from the video element.
//     // NOTE: Apparently, we can change the data without going through setAttribute,
//     // which should not cause update() to fire, and the values still sync properly. 
  
//     if (this.data.src !== videoElement.src) {       // ADDED
//       this.data.src = videoElement.src;
//     }
       
//     if (this.data.paused !== videoElement.paused) {
//       this.data.paused = videoElement.paused;
//     }          
//     if (this.data.currentTime !== videoElement.currentTime) {
//       this.data.currentTime = videoElement.currentTime;
//     }
//   },

//   // Utility function to get the applicable networked element.
//   getNetworkedSelfOrAncestor: function () {
//     for (var networked = this.el; networked; networked = networked.parentElement) {
//       if (networked.components && networked.components.networked) {
//         break;
//       } 
//     }          
//     return networked;
//   },

//   // Utility function to get the applicable video element.
//   getVideoElement: function () {
//     var videoElement = this.el.components.material;
//     if (videoElement) { videoElement = videoElement.material.map; }
//     if (videoElement) { videoElement = videoElement.image; }
//     return videoElement;
//   }
// });