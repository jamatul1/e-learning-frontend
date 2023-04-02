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
import { Rating } from "@mui/material";

export default function CourseCard({
  title,
  description,
  url,
  imgUrl,
  rating = 5,
}) {
  const router = useRouter();
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 360, p: 1 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        sx={{ borderRadius: 1 }}
        image={imgUrl}
      />
      <CardContent>
        <Typography
          color={(t) => t.palette.dg}
          fontWeight={700}
          gutterBottom
          variant="h5"
          component="div"
        >
          {title.length > 40 ? title.slice(0, 39) + "..." : title}
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
          <Button
            variant="contained"
            size="small"
            onClick={() => router.push("/" + url)}
          >
            View Course
          </Button>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography fontSize={14} variant="body2">
                Price : 199$
              </Typography>
            </Box>
            <Rating readOnly sx={{ fontSize: 16 }} value={5} />
          </Box>
        </Box>
      </CardActions>
    </Card>
  );
}
