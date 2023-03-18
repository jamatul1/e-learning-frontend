import CourseCard from "@/components/cards/courseCard";
import Filter from "@/components/filter";
import CourseFilter from "@/components/filter/courseFilter";
import PaginationControlled from "@/components/pagination/controlledPagination";
import { courses } from "@/data/courses";
import styled from "@emotion/styled";
import { Button, Grid, OutlinedInput, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function CoursesPage() {
  return (
    <Paper elevation={0} sx={{ minWidth: "100vw", m: "auto", mt: 9 }}>
      <Box sx={{ p: 5 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          {" "}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <OutlinedInput placeholder="Search Courses" sx={{ mr: 2 }} />
            <Button variant="contained">Search</Button>
          </Box>
          <CourseFilter />
        </Box>
        <Typography sx={{ mb: 3 }} fontSize={42} variant="h2">
          Browse Courses -
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
        <Grid sx={{ mt: 3 }} container spacing={2}>
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
        <Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
          <PaginationControlled />
        </Box>
      </Box>
    </Paper>
  );
}
