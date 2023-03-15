import React from "react";
import parse from "html-react-parser";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

export default function Description({ course }) {
  return (
    <Box>
      <Typography variant="h2">Course syllabus</Typography>
      {parse(course.syllabus)}
    </Box>
  );
}
