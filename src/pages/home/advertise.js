import styled from "@emotion/styled";
import { Button, Grid, Sheet, Typography } from "@mui/joy";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const Video = styled.video`
  width: 37vw;
  padding-right: 200px;
  object-fit: cover;
  position: absolute;
  right: -100px;
  border-radius: 20px;
  overflow: "hidden";
`;

export default function Advertise() {
  return (
    <Sheet
      sx={{
        width: "70%",
        m: "auto",
        boxShadow: "md",
        p: 5,
        borderRadius: "lg",
      }}
    >
      <Grid container spacing={10} sx={{ p: 5 }}>
        <Grid sm={6}>
          <Box sx={{ mt: 5 }}>
            <Typography fontWeight={400} level="h2">
              Packed with high quality Courses
            </Typography>
            <Typography fontSize={24} fontWeight={300}>
              From the best instructor in the world
            </Typography>
            <Link to={"/courses"}>
              <Button sx={{ mt: 5, px: 10, py: 1.5 }}> Browse now</Button>
            </Link>
          </Box>
        </Grid>
        <Grid sm={6} item>
          <Video
            src={
              "https://res.cloudinary.com/dws1ftsos/video/upload/v1693650225/showcasevid_k4jrd2.mp4"
            }
            autoPlay
            loop
            muted
          ></Video>
        </Grid>
      </Grid>
    </Sheet>
  );
}
