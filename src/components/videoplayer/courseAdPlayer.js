import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import VideoJS from "../videoplayer";

// This imports the functional component from the previous sample.

export default function CourseAdVideoPlayer({ url }) {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        // src: "https://vjs.zencdn.net/v/oceans.mp4",
        src: url,
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <>
      <Box sx={{ borderRadius: 1, overflow: "hidden", height: "480px" }}>
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      </Box>
    </>
  );
}
