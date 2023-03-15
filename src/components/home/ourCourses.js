import { courses } from "@/data/courses";
import { Button, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import CourseCard from "../cards/courseCard";

export default function OurCourses() {
  const router = useRouter();
  return (
    <Paper elevation={0} sx={{ mt: 20, p: 5 }}>
      <Typography sx={{ mb: 5 }} variant="h2">
        People {"found"} these {" course's"} life changing
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
        <Button
          onClick={() => router.push("/courses")}
          sx={{ ml: 70, mt: 5 }}
          variant="outlined"
        >
          Browse more
        </Button>
      </Grid>
    </Paper>
  );
}
