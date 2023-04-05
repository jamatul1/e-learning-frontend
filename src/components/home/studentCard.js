import styled from "@emotion/styled";
import { Avatar, Paper, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Badge = styled.img`
  position: absolute;
  top: -25px;
  right: 0;
  width: 50px;
  margin-bottom: 20px;
`;

export default function StudentCard() {
  return (
    <Paper sx={{ p: 5, position: "relative", textAlign: "left" }}>
      <Badge src="./icons/badge.png" alt="badge" />
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
