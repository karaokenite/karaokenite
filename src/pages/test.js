import React, { useRef, useState } from 'react';
import { useChat } from '../hooks/chat';

const Video = ({ stream }) => {
  const videoRef = useRef();

  if (videoRef.current && stream) {
    const camera = stream;
    videoRef.current.srcObject = camera;
    videoRef.current.onloadedmetadata = function (e) {
      videoRef.current.play();
    };
  }

  return <video height="100%" width="100%" ref={videoRef}></video>;
};

const Test = () => {
  const [streams = [], setStreams] = useState();
  useChat(setStreams);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateRows: '1fr 1fr',
        gridTemplateColumns: 'repeat(2, 1fr)',
      }}
    >
      {[0, 1, 2, 3, 4, 5, 6, 7].map((stream) => (
        <Video stream={streams[0]} />
      ))}
    </div>
  );
};

export default Test;
