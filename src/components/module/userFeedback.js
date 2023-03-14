import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ProgressBtn from "../button/progressBtn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import UserRating from "./userRating";
import { useModuleContext } from "@/contexts/moduleContext/moduleContext";
import { LESSON_NEXT } from "@/contexts/moduleContext/moduleActions";

export default function UserFeedback({
  lessonId,
  handleLessonCompleted,
  completed,
}) {
  const { dispatch } = useModuleContext();
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
        onClick={() => {
          dispatch({
            type: LESSON_NEXT,
            payload: {
              id: lessonId,
            },
          });
        }}
        variant="outlined"
      >
        Next Lesson
      </Button>
    </Box>
  );
}
