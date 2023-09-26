import { Box } from "@mui/joy";
import ReactPlayer from "react-player";
import Advertise from "./home/advertise";
import Showcase from "./home/showcase";
import OurCourses from "./home/ourCourses";

export default function HomePage() {
  return (
    <Box sx={{ bgColor: "white" }}>
      <Showcase />
      <Box sx={{ mt: 10 }}>
        <Advertise />
      </Box>
      <Box>
        <OurCourses />
      </Box>
    </Box>
  );
}
