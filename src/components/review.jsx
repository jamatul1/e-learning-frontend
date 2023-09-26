import { Box, Typography } from "@mui/joy";
import React from "react";
import { CourseRating } from "./rating";

export default function CourseReview({
  username = "Rakib Mia",
  rating = 5,
  createdAt = "5 day ago",
  review = "Best teacher i have ever seen in my life. Course was detailed and organized",
}) {
  return (
    <Box sx={{ width: "100%", mb: 5 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
        <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
          <CourseRating />
          <Typography>{username}</Typography>
        </Box>
        <Typography variant="body2">{createdAt}</Typography>
      </Box>
      <Typography variant="body2">{review}</Typography>
    </Box>
  );
}
