import { Box, Grid, Typography } from "@mui/joy";
import IModules from "./IModules";
import AddModule from "./AddModule";
import { Outlet } from "react-router-dom";

export default function ICourseModules() {
  return (
    <Box sx={{ mt: 3 }}>
      <Box>
        <AddModule />
      </Box>

      <IModules />
    </Box>
  );
}
