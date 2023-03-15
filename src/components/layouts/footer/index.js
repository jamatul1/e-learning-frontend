import { Paper, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Paper sx={{ p: 2, textAlign: "center" }}>
      <Typography variant="body1">
        All {"right's"} reserved by Jamatul Islam
      </Typography>
    </Paper>
  );
}
