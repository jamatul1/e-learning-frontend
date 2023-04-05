import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import LinearCourseProgress from "../progress/linearProgress";
import ModuleProgress from "../progress/moduleProgress";
export default function CourseProgress() {
  return (
    <Box sx={{ p: 3 }}>
      <Box
        sx={{
          width: "100%",
          fontFamily: "roboto",
          fontWeight: 500,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography fontWeight={500} textAlign={"center"} variant="h5">
            Overall Progress
          </Typography>
          <ModuleProgress fontSize={20} size={80} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <IndividualProgress label="Modules" completed={1} total={6} />
          <IndividualProgress label="Lessons" completed={3} total={36} />
          <IndividualProgress label="Assignments" completed={0} total={3} />
        </Box>
      </Box>
    </Box>
  );
}

function IndividualProgress({ label, completed, total }) {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography fontSize={18} variant="h6">
          {label}
        </Typography>
        <Typography fontSize={16} variant="body1">
          Completed {completed}/{total}
        </Typography>
      </Box>
      <LinearCourseProgress />
    </Box>
  );
}
