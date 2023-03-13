import styled from "@emotion/styled";
import { Grid, Paper } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import ArticleLesson from "./articleLesson";
import Assignment from "./assignment";
import DownloadFile from "./download";
import Lessons from "./lessons";
import ModuleBreadcrumbs from "./moduleBreadcrumbs";
import VideoLesson from "./videoLesson";
import { lessonsData } from "@/data/lessons";
import RadioGroupRating from "../radioGroup";
import Transcript from "./transcript";
import ProgressBtn from "../button/progressBtn";

function chooseLessonComp(
  type,
  lesson,
  handleNextLesson,
  handleLessonCompleted,
  handleNewNote
) {
  if (type == "video")
    return (
      <VideoLesson
        handleNextLesson={handleNextLesson}
        handleLessonCompleted={handleLessonCompleted}
        handleNewNote={handleNewNote}
        lesson={lesson}
      ></VideoLesson>
    );
  if (type == "text")
    return (
      <ArticleLesson
        handleNextLesson={handleNextLesson}
        handleLessonCompleted={handleLessonCompleted}
        lesson={lesson}
      />
    );
  if (type == "download")
    return (
      <DownloadFile
        handleNextLesson={handleNextLesson}
        handleLessonCompleted={handleLessonCompleted}
        lesson={lesson}
      />
    );
  if (type == "assignment")
    return (
      <Assignment
        handleNextLesson={handleNextLesson}
        handleLessonCompleted={handleLessonCompleted}
        lesson={lesson}
      />
    );
}

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.secondary,
  lineHeight: "60px",
}));

export default function Module() {
  const [lessons, setLessons] = useState([]);
  const [currentLesson, setCurrentLesson] = useState(1);
  useEffect(() => {
    setLessons(lessonsData);
  }, []);
  function onLessonChange(lessonId) {
    setCurrentLesson(lessonId);
  }
  function onLessonCompleted(lessonId) {
    let modifiedLessons = [...lessons];
    modifiedLessons.filter((l) => l.id === lessonId)[0].completed = true;
    setLessons(modifiedLessons);
  }
  function onNextLesson(lessonId) {
    if (lessonId < lessons.length) {
      setCurrentLesson(lessonId + 1);
    } else {
      setCurrentLesson(1);
    }
  }
  function getCurrentLesson() {
    return lessons.length !== 0 && lessons[currentLesson - 1];
  }

  function onNewNote(lessonId, note) {
    console.log(note);
    let modifiedLessons = [...lessons];
    modifiedLessons.filter((l) => l.id === lessonId)[0].notes.push(note);
    setLessons(modifiedLessons);
  }
  return (
    <div role={"presentation"}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper
            sx={{
              mt: 10,
              borderRadius: 2,
              position: "fixed",
              width: 365,
            }}
            elevation="0"
          >
            <ModuleBreadcrumbs></ModuleBreadcrumbs>
            <Lessons
              onLessonChange={onLessonChange}
              activeLesson={currentLesson}
              lessons={lessons}
            />
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper
            sx={{
              mt: 10,
              borderRadius: 2,
              overflow: "hidden",
            }}
            elevation="0"
          >
            {lessons.length !== 0 &&
              chooseLessonComp(
                getCurrentLesson().type,
                getCurrentLesson(),
                onNextLesson,
                onLessonCompleted,
                onNewNote
              )}
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Item
            sx={{
              mt: 10,
            }}
            elevation="0"
          >
            {getCurrentLesson().type === "video" &&
              (getCurrentLesson().transcript ? (
                <Transcript text={getCurrentLesson().transcript} />
              ) : (
                "This lesson has no transcript"
              ))}
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}
