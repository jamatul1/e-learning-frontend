import { Box, Typography } from "@mui/material";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import React from "react";

export default function Logo() {
  return (
    <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
      <AccountTreeIcon sx={{ mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".1rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Remotely
      </Typography>
    </Box>
  );
}
