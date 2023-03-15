import React from "react";
import parse from "html-react-parser";
import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import CourseRating from "@/components/rating";
import { format, formatRelative } from "date-fns";

export default function Description({ course }) {
  return (
    <Box>
      <Typography variant="h2">{course.title}</Typography>
      <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
        <Box>
          <Typography fontWeight={300} sx={{ mb: 2 }}>
            Created At : {format(course.createdAt, "MMMM-yyyy")}
          </Typography>
          <Typography sx={{ mb: 1 }}>Created by -</Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            {course.authors.map((a, i) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                key={i}
              >
                <Avatar sx={{ mb: 1 }} alt="instructor" src={a.avatar}></Avatar>
                <Box sx={{ display: "flex" }}>
                  <Typography
                    color={"#bcbcbc"}
                    sx={{ mr: 1 }}
                    component={"span"}
                  >
                    Author :
                  </Typography>
                  <Typography> {a.username}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <CourseRating
          type="readable"
          value={course.ratings.length !== 0 ? course.ratings.length : 0}
        />
      </Box>
      <Image
        width={300}
        height={400}
        src={course.coverImg}
        alt={course.title}
      />
      {parse(course.description)}
    </Box>
  );
}
