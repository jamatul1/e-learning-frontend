import { Card, Grid, Paper, Typography } from "@mui/material";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

export default function Companies() {
  return (
    <Paper elevation={0} sx={{ mt: 20, p: 5 }}>
      <Typography sx={{ mb: 5 }} variant="h2">
        Companies that Works with Us
      </Typography>
      <Grid container>
        <Grid item sm={2}>
          <CompanyCard />
        </Grid>
      </Grid>
    </Paper>
  );
}

function CompanyCard() {
  return (
    <Card elevation={0} sx={{ maxWidth: 245 }}>
      <CardMedia
        component="img"
        height="140"
        image="/icons/microsoft.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          microsoft
        </Typography>
      </CardContent>
    </Card>
  );
}
