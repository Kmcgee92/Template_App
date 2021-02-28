import React from "react";
import ReactPlayer from "react-player";
const DeathKorpsPlayer = () => {
  return (
    <div className="App">
      <h3></h3>
      <ReactPlayer
        playing={true}
        onReady={true}
        width="100vw"
        height="80vh"
        url="https://www.youtube.com/watch?v=j0ljy0-Tcvw"
      />
    </div>
  );
};

export default DeathKorpsPlayer;
