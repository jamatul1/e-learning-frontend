import { Avatar, Paper, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function StudentCard() {
  return (
    <Paper sx={{ p: 5, textAlign: "left" }}>
      <Typography variant="body1">
        “Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Cras venene veliel vestibulum.”
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
        <Avatar
          sx={{ width: "60px", height: "60px" }}
          alt="student-img"
          src="/imgs/avatar.webp"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ ml: 2 }} variant="h6">
            MICHELLE ANDERSON
          </Typography>
          <Typography variant="body2">Software Engineer</Typography>
        </Box>
      </Box>
    </Paper>
  );
}
