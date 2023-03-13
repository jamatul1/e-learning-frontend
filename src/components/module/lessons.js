import { Paper } from "@mui/material";
import React from "react";
import { useState } from "react";
import Lesson from "./lesson";

export default function Lessons({ lessons, activeLesson, onLessonChange }) {
  const [currentExpanded, setCurrentExpanded] = useState(null);
  const onLessonClick = (id) => {
    setCurrentExpanded(id);
  };
  return (
    <Paper elevation={0}>
      {lessons.map((lesson) => (
        <Lesson
          currentExpanded={currentExpanded}
          onLessonClick={onLessonClick}
          onLessonChange={onLessonChange}
          activeLesson={activeLesson}
          key={lesson.id}
          lesson={lesson}
        ></Lesson>
      ))}
    </Paper>
  );
}
