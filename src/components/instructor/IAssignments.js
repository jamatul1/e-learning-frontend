import { Box, Grid } from "@mui/joy";
import React from "react";
import IAssignmentsTable from "./IAssignmentsTable";
import { Outlet } from "react-router-dom";

export default function IAssignments() {
  return (
    <Box>
      <Grid container>
        <Grid xs={6}>
          <IAssignmentsTable />
        </Grid>
        <Grid xs={6}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
}
