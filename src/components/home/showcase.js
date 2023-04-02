import styled from "@emotion/styled";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Video = styled.video`
  position: absolute;
  top: 170px;
  left: 100px;
  width: 50vw;

  object-fit: cover;
`;
const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: -100px;
  width: 120vw;
  height: 100vh;
  background: #001e3ccc;
  background: linear-gradient(to left, #000046, #1cb5e0);
  opacity: 0.13;
`;

export default function Showcase() {
  const router = useRouter();
  return (
    <Box sx={{ mt: 15, bgcolor: "#fff" }}>
      <Video src="/videos/showcasevid.mp4" autoPlay loop />
      {/* <VideoOverlay /> */}
      <Grid sx={{ zIndex: 10 }} container>
        <Grid sm={5} item></Grid>
        <Grid sm={7} sx={{ zIndex: 10 }} item>
          <Box sx={{ ml: 12, mt: 7 }}>
            <Typography variant="body2">
              Thousands of peoples | Favorite Education Platform
            </Typography>
            <Typography fontSize={72} fontWeight={700} variant="h1">
              Stay Anywhere, Learn Anything !
            </Typography>
            <Button
              onClick={() => router.push("/courses")}
              sx={{ mt: 3, px: 10, py: 1.5 }}
              size="large"
              variant="contained"
            >
              {" "}
              Explore
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
