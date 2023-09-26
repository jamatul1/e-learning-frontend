import { Box, Link, Grid, Typography, Sheet, Button } from "@mui/joy";
import { Facebook, Instagram, Twitter } from "react-feather";

export default function Footer() {
  return (
    <Sheet variant="solid" color="primary" sx={{ p: 5 }} component="footer">
      <Box>
        <Grid container>
          <Grid xs={4}>
            <Typography color="#fff" level="h4" sx={{ mb: 1 }}>
              About Us
            </Typography>
            <Typography color="#fff">
              Remotely is an Elearning Platform, Provides Premium courses online
            </Typography>
          </Grid>
          <Grid xs={4}>
            <Typography color="#fff" level="h4" sx={{ mb: 1 }}>
              Contact Us
            </Typography>
            <Typography level="body2" color="text.secondary">
              Dumki, Pautuakhali
            </Typography>
            <Typography level="body2" color="text.secondary">
              Email: Remotely.com
            </Typography>
            <Typography level="body2" color="text.secondary">
              Phone: 01957743434
            </Typography>
          </Grid>
          <Grid xs={4}>
            <Typography color="#fff" level="h4" sx={{ mb: 1 }}>
              Follow Us
            </Typography>
            <Button startDecorator={<Facebook />}>Facebook</Button>
            <Button startDecorator={<Instagram />}>Instagram</Button>
            <Button startDecorator={<Twitter />}>Twitter</Button>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            Remotely.com
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Box>
    </Sheet>
  );
}
