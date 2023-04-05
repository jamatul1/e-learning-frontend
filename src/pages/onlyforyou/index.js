import CourseCard from "@/components/cards/courseCard";
import Filter from "@/components/filter";
import CourseFilter from "@/components/filter/courseFilter";
import PaginationControlled from "@/components/pagination/controlledPagination";
import { courses } from "@/data/courses";
import styled from "@emotion/styled";
import {
  Button,
  Grid,
  Link,
  OutlinedInput,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import React from "react";

const CoverImage = styled.img`
  object-fit: cover;
  width: 100%;
`;

export default function CoursesPage() {
  const router = useRouter();
  return (
    <Paper elevation={0} sx={{ width: "100vw", mt: 8 }}>
      <CoverImage src="/imgs/cover.jpg" alt="cover" />
      <Box
        sx={{
          position: "absolute",
          top: 118,
          left: 100,
          height: 300,
          width: 540,
          background: "#fff",
          borderRadius: 3,
          px: 7,
          py: 5,
        }}
      >
        <Typography
          sx={{ mt: 2.5 }}
          textAlign={"left"}
          fontWeight={300}
          variant="h3"
        >
          “An investment in knowledge pays the best interest.”
        </Typography>
        <Typography sx={{ mt: 2, ml: 42 }} variant="h6">
          — Benjamin Franklin
        </Typography>
      </Box>
      <Box sx={{ p: 10 }}>
        <Grid container width={"100%"} spacing={5}>
          <Grid item sm={12}>
            <Typography
              fontWeight={500}
              color={(t) => t.palette.primary.main}
              sx={{ mb: 3 }}
              variant="h2"
              fontSize={42}
            >
              Most Popular Courses in Remotely
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
            <Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
              <Button onClick={() => router.push("/courses")} size="large">
                View All Courses
              </Button>
            </Box>
            <Typography
              fontWeight={500}
              color={(t) => t.palette.primary.main}
              sx={{ mt: 15, mb: 3 }}
              variant="h2"
              fontSize={42}
            >
              Best Courses For CSE Students
            </Typography>
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
              <Button onClick={() => router.push("/courses")} size="large">
                View All Courses
              </Button>
            </Box>
            <Typography
              fontWeight={500}
              color={(t) => t.palette.primary.main}
              sx={{ mt: 15, mb: 3 }}
              variant="h2"
              fontSize={42}
            >
              Recommneded Courses For You !
            </Typography>
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
              <Button onClick={() => router.push("/courses")} size="large">
                View All Courses
              </Button>
            </Box>
            <Typography
              fontWeight={500}
              color={(t) => t.palette.primary.main}
              sx={{ mt: 15, mb: 3 }}
              variant="h2"
              fontSize={42}
            >
              Top Rated Course on Remotely
            </Typography>
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
              <Button onClick={() => router.push("/courses")} size="large">
                View All Courses
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
