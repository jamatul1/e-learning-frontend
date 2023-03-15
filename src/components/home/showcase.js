import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export default function Showcase() {
  const router = useRouter();
  return (
    <Box sx={{ mt: 10 }}>
      <Grid container>
        <Grid sm={8} item>
          <Typography variant="body2">
            Thousands of peoples | Favorite Education Platform
          </Typography>
          <Typography variant="h1">Stay Anywhere, Learn Anything !</Typography>
          <Button
            onClick={() => router.push("/courses")}
            sx={{ mt: 9 }}
            size="large"
            variant="contained"
          >
            {" "}
            Browse Thousands of Online Courses
          </Button>
        </Grid>
        <Grid sm={4} item>
          <Image height={400} width={200} src={"./imgs/showcase.svg"}></Image>
        </Grid>
      </Grid>
    </Box>
  );
}
