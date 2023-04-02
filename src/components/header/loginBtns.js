import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import InputIcon from "@mui/icons-material/Input";
import { useRouter } from "next/router";
export default function LoginBtns() {
  const router = useRouter();
  return (
    <Box>
      <Button
        onClick={() => router.push("/signin")}
        startIcon={<LoginIcon />}
        variant="contained"
        sx={{ mr: 2, bgColor: (t) => t.palette.secondary.main }}
      >
        Sign In
      </Button>
      <Button
        onClick={() => router.push("/signup")}
        startIcon={<InputIcon />}
        variant="contained"
      >
        Sign Up
      </Button>
    </Box>
  );
}
