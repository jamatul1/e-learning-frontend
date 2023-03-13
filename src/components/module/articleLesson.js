import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import UserFeedback from "./userFeedback";

export default function ArticleLesson({
  lesson,
  handleNextLesson,
  handleLessonCompleted,
}) {
  return (
    <div
      style={{
        fontFamily: "roboto",
        fontSize: "1.05rem",
      }}
    >
      <Box sx={{ padding: 3 }}>
        <Typography fontSize={36} sx={{ mb: 2 }} variant="h2">
          {lesson.title}
        </Typography>
        <Typography variant="body1">{lesson.text}</Typography>
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
