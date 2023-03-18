import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import CourseRating from "../rating";
import { Box } from "@mui/system";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

export default function CourseCard({
  title,
  description,
  url,
  imgUrl,
  rating = 5,
}) {
  const router = useRouter();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={imgUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Button size="small" onClick={() => router.push("/" + url)}>
            Learn more
          </Button>
          <Box sx={{}}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, ml: 5 }}>
              <PeopleAltIcon />
              <Typography variant="body2">2666</Typography>
            </Box>
            <CourseRating value={rating} />
          </Box>
        </Box>
      </CardActions>
    </Card>
  );
}
