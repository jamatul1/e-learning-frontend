import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export default function Advertise() {
  const router = useRouter();
  return (
    <Paper elevation={0} sx={{ ml: 10, mt: 29, p: 5 }}>
      <Grid container spacing={10} sx={{ p: 5 }}>
        <Grid sm={6} item>
          <Typography variant="h2">Find the best online courses</Typography>
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
        <Grid sm={6} item>
          <Image
            height={440}
            width={350}
            src={"./imgs/advertisement1.svg"}
          ></Image>
        </Grid>
      </Grid>
    </Paper>
  );
}
