import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ProgressBtn from "../button/progressBtn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import UserRating from "./userRating";

export default function UserFeedback({
  lessonId,
  handleNextLesson,
  handleLessonCompleted,
  completed,
}) {
  return (
    <Box
      padding={3}
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <UserRating />
      <ProgressBtn
        onClick={handleLessonCompleted}
        startLabel={"Mark As completed"}
        endLabel={"Completed"}
        lessonId={lessonId}
        initialSuccess={completed}
      />
      <Button
        endIcon={<ArrowForwardIcon />}
        onClick={() => handleNextLesson(lessonId)}
        variant="outlined"
      >
        Next Lesson
      </Button>
    </Box>
  );
}
