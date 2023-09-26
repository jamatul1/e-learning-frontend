import { Box, Grid, Sheet } from "@mui/joy";
import CourseSidebar from "../../components/instructor/CourseSidebar";
import { Outlet } from "react-router-dom";

export default function InstructorCoursePage() {
  return (
    <Sheet sx={{ minHeight: "80vh" }}>
      <Grid container>
        <Grid xs={2}>
          <CourseSidebar />
        </Grid>
        <Grid xs={10}>
          <Outlet />
        </Grid>
      </Grid>
    </Sheet>
  );
}
