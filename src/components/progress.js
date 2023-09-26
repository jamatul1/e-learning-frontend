import { Box, CircularProgress, LinearProgress, Typography } from "@mui/joy";
import React from "react";

export default function Progress() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        justifyContent: "center",
        alignItems: "center",
        mb: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mb: 2,
        }}
      >
        <CircularProgress
          size="lg"
          color="primary"
          sx={{ "--CircularProgress-size": "70px", mb: 1 }}
          determinate
        >
          93%
        </CircularProgress>
        <Typography fontSize={16} fontWeight={500} sx={{ mb: 0 }} level="h4">
          Total Completion
        </Typography>
      </Box>
      <Box>
        <Box sx={{ mb: 1 }}>
          {" "}
          <Box sx={{ display: "flex", gap: 2, mb: 1, alignItems: "center" }}>
            <Typography fontSize={16}>3/33 </Typography>
            <Typography fontSize={16}>Lessons </Typography>
          </Box>
          <LinearProgress size="sm" determinate value={25} />{" "}
        </Box>
        <Box sx={{ mb: 1 }}>
          {" "}
          <Box sx={{ display: "flex", gap: 2, mb: 1 }}>
            <Typography fontSize={16}>3/33 </Typography>
            <Typography fontSize={16}>Assignments </Typography>
          </Box>
          <LinearProgress size="sm" determinate value={25} />{" "}
        </Box>
        <Box sx={{ mb: 1 }}>
          {" "}
          <Box sx={{ display: "flex", gap: 2, mb: 1 }}>
            <Typography fontSize={16}>3/33 </Typography>
            <Typography fontSize={16}>Quizzes </Typography>
          </Box>
          <LinearProgress size="sm" determinate value={25} />{" "}
        </Box>
      </Box>
    </Box>
  );
}
