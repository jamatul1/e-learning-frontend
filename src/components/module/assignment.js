import { Box, Button, Typography } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import React from "react";
import UserFeedback from "./userFeedback";

export default function Assignment({
  lesson,
  handleNextLesson,
  handleLessonCompleted,
}) {
  return (
    <div
      style={{
        fontFamily: "roboto",
        fontSize: "1.05rem",
        padding: "2rem",
      }}
    >
      <Box sx={{ padding: 3 }}>
        <Typography fontSize={36} sx={{ mb: 2 }} variant="h2">
          {lesson.title}
        </Typography>
        <Typography variant="body1">{lesson.text}</Typography>
        <Button
          startIcon={<UploadFileIcon />}
          variant="contained"
          component="label"
          sx={{
            mt: 2,
          }}
        >
          Upload Your Assignment
          <input
            hidden
            accept="application/pdf,application/msword,
  application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            multiple
            type="file"
          />
        </Button>
      </Box>
      <UserFeedback
        lessonId={lesson.id}
        completed={lesson.completed}
        handleLessonCompleted={handleLessonCompleted}
        handleNextLesson={handleNextLesson}
      />
    </div>
  );
}
