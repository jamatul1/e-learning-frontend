import { Box, Grid } from "@mui/joy";
import { Outlet } from "react-router-dom";
import ICourseModules from "./ICourseModules";

export default function InstructorCourseModules() {
  return (
    <Box>
      <Grid container>
        <Grid xs={5}>
          <ICourseModules />
        </Grid>
        <Grid xs={7}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
}
