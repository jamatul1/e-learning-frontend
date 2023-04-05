import Course from "@/components/course";
import { CourseProvider } from "@/contexts/courseContext";
import { Box } from "@mui/material";
import React from "react";

export default function CoursePage() {
  return (
    <CourseProvider>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          // overflow: "scroll",
          position: "fixed",
          backgroundImage: "url('/imgs/backgrounds/bg-1.jpg')",
        }}
      >
        <Course />
      </Box>
    </CourseProvider>
  );
}
