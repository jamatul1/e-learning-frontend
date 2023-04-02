import React from "react";
import parse from "html-react-parser";
import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import CourseRating from "@/components/rating";
import { format, formatRelative } from "date-fns";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CourseAdVideoPlayer from "@/components/videoplayer/courseAdPlayer";

export default function Description({ course }) {
  return (
    <Box>
      <Typography fontWeight={"bold"} variant="h3">
        {course.title}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {course.authors.map((a, i) => (
          <Box
            sx={{
              mt: 2,
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
            key={i}
          >
            <Avatar alt="instructor" src={a.avatar}></Avatar>
            <Box sx={{ display: "flex" }}>
              <Typography
                color={(t) => t.palette.g}
                fontWeight={500}
                variant="body2"
              >
                {" "}
                {a.username}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box sx={{ display: "flex", gap: 3, mt: 5, mb: 5 }}>
        <CourseRating
          type="readable"
          value={course.ratings.length !== 0 ? course.ratings.length : 0}
        />
        <Box sx={{ display: "flex", gap: 1 }}>
          <AssignmentTurnedInIcon color="primary" />
          <Typography color={(theme) => theme.palette.g} variant="body1">
            Total Lessons : 20
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <AssignmentTurnedInIcon color="primary" />
          <Typography color={(theme) => theme.palette.g} variant="body1">
            Assignment : 3
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <AccessTimeIcon color="primary" />
          <Typography color={(theme) => theme.palette.g} variant="body1">
            2h 30m
          </Typography>
        </Box>
      </Box>
      <CourseAdVideoPlayer
        url={
          "https://res.cloudinary.com/dws1ftsos/video/upload/v1678677221/8_Must_Know_JavaScript_Array_Methods_j0dn2f.mp4"
        }
      />
      {/* <Image
        width={300}
        height={400}
        src={course.coverImg}
        alt={course.title}
      /> */}
      {parse(course.description)}
    </Box>
  );
}
