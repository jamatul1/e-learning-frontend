import { Box, CircularProgress, LinearProgress, Typography } from "@mui/joy";
import React from "react";
import Progress from "../../../components/progress";

export default function OverallProgress() {
  return (
    <Box sx={{ mt: 10, pr: 5 }}>
      <Box>
        <Progress />
      </Box>
    </Box>
  );
}
