import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

export default function Transcript({ text }) {
  return (
    <Box sx={{ padding: 1 }}>
      <Typography fontSize={36} sx={{ mb: 2 }} variant="h2">
        Transcript
      </Typography>
      <Typography variant="body2">{text}</Typography>
    </Box>
  );
}
