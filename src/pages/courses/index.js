import CourseCard from "@/components/cards/courseCard";
import { courses } from "@/data/courses";
import styled from "@emotion/styled";
import { Grid, OutlinedInput, Paper, Typography } from "@mui/material";
import React from "react";

export default function CoursesPage() {
  return (
    <Paper elevation={0} sx={{ m: "auto", mt: 9, p: 5, width: "80%" }}>
      <OutlinedInput sx={{ mb: 2 }} placeholder="Search Courses" />
      <Typography sx={{ mb: 3 }} fontSize={42} variant="h2">
        Recommended For You !
      </Typography>
      <Grid container spacing={2}>
        {courses.map((c, i) => (
          <Grid key={c.id} item sm={3}>
            <CourseCard
              title={c.title}
              description={c.shortDescription}
              url={`/courses/${c.id}`}
              imgUrl={c.img}
            />
          </Grid>
        ))}
      </Grid>
      <Typography sx={{ mb: 3 }} fontSize={42} variant="h2">
        Most Peoples Favorites
      </Typography>
      <Grid container spacing={2}>
        {courses.map((c, i) => (
          <Grid key={c.id} item sm={3}>
            <CourseCard
              title={c.title}
              description={c.shortDescription}
              url={`/courses/${c.id}`}
              imgUrl={c.img}
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
