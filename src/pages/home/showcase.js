import styled from "@emotion/styled";
import { Button, Grid, Typography } from "@mui/joy";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import certified from "../../assets/certified.jpg";
const ShowcaseImage = styled.img`
  position: absolute;
  top: 100px;
  left: 90px;
  width: 40vw;
  box-shadow: 10px 10px 37px -23px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
`;

export default function Showcase() {
  return (
    <Box sx={{ mt: 8, height: "80vh", bgcolor: "#fff" }}>
      <ShowcaseImage src={certified} alt="Showcase" />
      {/* <VideoOverlay /> */}
      <Grid sx={{ zIndex: 10 }} container>
        <Grid sm={5} item></Grid>
        <Grid sm={7} sx={{ zIndex: 10 }} item>
          <Box sx={{ ml: 25, mt: 7 }}>
            <Typography variant="body2">
              Thousands of peoples | Favorite Education Platform
            </Typography>
            <Typography
              width={"60%"}
              fontSize={46}
              fontWeight={500}
              variant="h1"
            >
              Stay Anywhere, Learn Anything !
            </Typography>
            <Link to="/courses">
              <Button sx={{ mt: 3, px: 10, py: 1.5 }}> Explore</Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
