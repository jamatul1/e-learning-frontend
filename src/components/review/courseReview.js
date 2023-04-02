import { Box, IconButton, Rating, Typography } from "@mui/material";
import React from "react";
import CourseRating from "../rating";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import { ThumbDownAltOutlined } from "@mui/icons-material";

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
          <Rating sx={{ fontSize: "20px" }} readOnly value={rating} />
          <Typography variant="body1">{username}</Typography>
        </Box>
        <Typography color={(t) => t.palette.lg} variant="body2">
          {createdAt}
        </Typography>
      </Box>
      <Typography color={(t) => t.palette.g} variant="body2">
        {review}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
        <Typography fontSize={13} variant="body2" color={(t) => t.palette.lg}>
          Was it helpful?
        </Typography>
        <IconButton>
          <ThumbUpOffAltOutlinedIcon sx={{ fontSize: "16px" }} />
        </IconButton>
        <IconButton>
          <ThumbDownAltOutlined sx={{ fontSize: "16px" }} />
        </IconButton>
      </Box>
    </Box>
  );
}
