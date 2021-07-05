const rtcConfig = {
  iceServers: [
    { urls: 'stun:stun.services.mozilla.com' },
    { urls: 'stun:stun.l.google.com:19302' },
  ],
};

import firebase from 'firebase';
import { useEffect } from 'react';

const firebaseConfig = {
  apiKey: 'AIzaSyB4AyuzbX1gwzB-wttqljFtRaSt4CfqOTY',
  authDomain: 'k-nite.firebaseapp.com',
  projectId: 'k-nite',
  storageBucket: 'k-nite.appspot.com',
  messagingSenderId: '283483078773',
  appId: '1:283483078773:web:0c431e0b044cdc5781383c',
  measurementId: 'G-LZZGGRWC9V',
};

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

const registerLiseteners = (peerConnection) => {
  peerConnection.addEventListener('icegatheringstatechange', () => {
    console.log(
      `ICE gathering state changed: ${peerConnection.iceGatheringState}`
    );
  });

  peerConnection.addEventListener('connectionstatechange', () => {
    console.log(`Connection state change: ${peerConnection.connectionState}`);
  });

  peerConnection.addEventListener('signalingstatechange', () => {
    console.log(`Signaling state change: ${peerConnection.signalingState}`);
  });

  peerConnection.addEventListener('iceconnectionstatechange ', () => {
    console.log(
      `ICE connection state change: ${peerConnection.iceConnectionState}`
    );
  });
};

const initializeConnection = async (onReady) => {
  const peerConnection = await new RTCPeerConnection(rtcConfig);
  registerLiseteners(peerConnection);
  const localStream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: { width: 200, height: 120 },
  });

  localStream.getTracks().forEach((track) => {
    peerConnection.addTrack(track, localStream);
  });

  const remoteStream = new MediaStream();

  peerConnection.addEventListener('track', (event) => {
    console.log('Got remote track:', event.streams[0]);
    event.streams[0].getTracks().forEach((track) => {
      console.log('Add a track to the remoteStream:', track);
      remoteStream.addTrack(track);
    });
  });

  onReady([localStream, remoteStream]);
};

export function useChat(onReady = () => {}) {
  useEffect(() => {
    initializeConnection(onReady);
  }, []);
}
