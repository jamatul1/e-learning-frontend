import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export default function Advertise() {
  const router = useRouter();
  return (
    <Paper elevation={0} sx={{ mt: 20, p: 5 }}>
      <Grid container sx={{ p: 5 }}>
        <Grid sm={6} item>
          <Typography variant="h2">Find the best online courses</Typography>
          <Typography fontSize={28} fontWeight={300} variant="body1">
            All in one place
          </Typography>
          <Button
            onClick={() => router.push("/courses")}
            sx={{ mt: 15 }}
            variant="outlined"
          >
            {" "}
            Browse now
          </Button>
        </Grid>
        <Grid sm={6} item>
          <Image
            height={340}
            width={200}
            src={"./imgs/advertisement1.svg"}
          ></Image>
        </Grid>
      </Grid>
    </Paper>
  );
}
