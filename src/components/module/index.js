import styled from "@emotion/styled";
import { Box, Grid, Paper } from "@mui/material";
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
import { useModuleContext } from "@/contexts/moduleContext/moduleContext";
import {
  GET_MODULE,
  LESSON_COMPLETED,
} from "@/contexts/moduleContext/moduleActions";

function chooseLessonComp(type, lesson, handleLessonCompleted) {
  if (type == "video")
    return (
      <VideoLesson
        handleLessonCompleted={handleLessonCompleted}
        lesson={lesson}
      ></VideoLesson>
    );
  if (type == "text")
    return (
      <ArticleLesson
        handleLessonCompleted={handleLessonCompleted}
        lesson={lesson}
      />
    );
  if (type == "download")
    return (
      <DownloadFile
        handleLessonCompleted={handleLessonCompleted}
        lesson={lesson}
      />
    );
  if (type == "assignment")
    return (
      <Assignment
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

export default function Module({ id }) {
  let { lessons, currentLesson, dispatch } = useModuleContext();
  useEffect(() => {
    dispatch({
      type: GET_MODULE,
      payload: {
        id,
      },
    });
  }, []);

  function onLessonCompleted(lessonId) {
    dispatch({
      type: LESSON_COMPLETED,
      payload: {
        id: lessonId,
      },
    });
  }

  return (
    <Box sx={{ px: 1, width: "100%" }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper
            sx={{
              mt: 10,
              borderRadius: 2,
              position: "fixed",
              width: 350,
              py: 3,
              px: 2.5,
            }}
            elevation={0}
          >
            <ModuleBreadcrumbs></ModuleBreadcrumbs>
            {lessons && currentLesson && (
              <Lessons activeLesson={currentLesson.id} lessons={lessons} />
            )}
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper
            sx={{
              mt: 10,
              ml: 3,
              px: 2,
              borderRadius: 2,
              overflow: "hidden",
            }}
            elevation={0}
          >
            {lessons.length !== 0 &&
              currentLesson &&
              chooseLessonComp(
                currentLesson.type,
                currentLesson,
                onLessonCompleted
              )}
          </Paper>
        </Grid>
        <Grid item xs={1.5}>
          <Item
            sx={{
              mt: 10,
              px: 2,
              width: 195,
            }}
            elevation={0}
          >
            {currentLesson &&
              currentLesson.type === "video" &&
              (currentLesson.transcript ? (
                <Transcript text={currentLesson.transcript} />
              ) : (
                "This lesson has no transcript"
              ))}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
