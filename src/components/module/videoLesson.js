import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import VideoJS from "../videoplayer";
import AddNote from "./addNote";
import UserFeedback from "./userFeedback";
import VideoNote from "./videoNotes";

// This imports the functional component from the previous sample.

export default function VideoLesson({
  lesson,
  handleNextLesson,
  handleLessonCompleted,
  handleNewNote,
}) {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    setNotes(lesson.notes);
  }, [setNotes, lesson.notes]);
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        // src: "https://vjs.zencdn.net/v/oceans.mp4",
        src: lesson.url,
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
    <Box sx={{ mt: 2 }}>
      <Box sx={{ borderRadius: 2, overflow: "hidden", height: "495px" }}>
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      </Box>

      <Box sx={{ padding: 3 }}>
        <AddNote lessionId={lesson.id} handleNewNote={handleNewNote} />
        <Typography fontSize={36} variant="h2">
          {lesson.title}
        </Typography>
      </Box>
      <UserFeedback
        lessonId={lesson.id}
        completed={lesson.completed}
        handleLessonCompleted={handleLessonCompleted}
        handleNextLesson={handleNextLesson}
      />
      <Typography sx={{ pl: 3 }} fontSize={32} variant="h3">
        Notes
      </Typography>
      <Grid sx={{ p: 3 }} container spacing={1}>
        {notes.map((note, key) => {
          return (
            <Grid key={key} item xs={3}>
              <VideoNote note={note}></VideoNote>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
