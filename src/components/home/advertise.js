import styled from "@emotion/styled";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Video = styled.video`
  width: 55vw;
  padding-right: 200px;
  object-fit: cover;
  position: absolute;
  right: -100px;
`;

export default function Advertise() {
  const router = useRouter();
  return (
    <Paper elevation={0} sx={{ width: "100%", ml: 10, mt: 50, mb: 25, p: 5 }}>
      <Grid container spacing={10} sx={{ p: 5 }}>
        <Grid sm={4} item>
          <Typography fontWeight={500} variant="h2">
            Find the best online courses
          </Typography>
          <Typography fontSize={28} fontWeight={300} variant="body1">
            All in one place
          </Typography>
          <Button
            onClick={() => router.push("/courses")}
            sx={{ mt: 11, px: 10, py: 1.5 }}
            size="large"
            variant="contained"
          >
            {" "}
            Browse now
          </Button>
        </Grid>
        <Grid sm={8} item>
          <Video src={"/videos/showcasevid.mp4"} autoPlay loop muted></Video>
        </Grid>
      </Grid>
    </Paper>
  );
}
