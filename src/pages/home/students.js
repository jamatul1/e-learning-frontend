import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import StudentCard from "./studentCard";

export default function Student() {
  return (
    <Box sx={{ mt: 10, mb: 20 }}>
      <Paper elevation={0} sx={{ p: 5, textAlign: "center" }}>
        <Typography fontWeight={500} sx={{ mb: 10 }} variant="h2">
          What Peoples are Saying
        </Typography>
        <Grid container spacing={5}>
          <Grid item sm={4}>
            <StudentCard />
          </Grid>
          <Grid item sm={4}>
            <StudentCard />
          </Grid>
          <Grid item sm={4}>
            <StudentCard />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
