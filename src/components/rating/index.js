import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function CourseRating({
  type = "readable",
  value = 4,
  handleRatingChange = () => {},
}) {
  console.log(type);
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      {type === "writeable" && (
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            handleRatingChange(newValue);
          }}
        />
      )}
      {type === "readable" && value !== 0 && (
        <Rating name="read-only" value={value} readOnly />
      )}
      {type === "readable" && value === 0 && (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Rating disabled name="no-value" value={null} />
          <Typography sx={{ ml: 2, color: (theme) => theme.palette.g }}>
            No Rating is Yet
          </Typography>
        </Box>
      )}
    </Box>
  );
}
