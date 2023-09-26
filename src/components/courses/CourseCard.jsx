import {
  AspectRatio,
  Button,
  Card,
  CardActions,
  CardContent,
  CardOverflow,
  Typography,
  Box,
} from "@mui/joy";
import { Link } from "react-router-dom";
export default function CourseCard({ course }) {
  let { _id, image, title, rating, price, catagory } = course;
  return (
    <Card
      sx={{
        textAlign: "center",
        alignItems: "center",
        width: 250,

        "--icon-size": "56px",
        borderRadius: "lg",
      }}
    >
      <CardOverflow>
        <AspectRatio ratio={"9/6"} sx={{ minWidth: 200 }}>
          <img
            src={
              image
                ? image
                : "https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286"
            }
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <AspectRatio
          variant="outlined"
          color="warning"
          ratio="1"
          sx={{
            m: "auto",
            transform: "translateY(-50%) translateX(-100%)",
            borderRadius: "50%",
            width: "var(--icon-size)",
            boxShadow: "sm",
            bgcolor: "background.surface",
            position: "relative",
          }}
        >
          <div>
            <img
              src={
                course.instructor?.photo
                  ? course.instructor?.photo
                  : "https://www.usnews.com/object/image/00000142-9263-d33c-abc6-ff77dfba0024/37985FE_DA_20130207_onlinemistakes-slide8.jpg?update-time=1421878595148&size=responsive640"
              }
              alt="image"
            />
          </div>
        </AspectRatio>
      </CardOverflow>

      <CardContent sx={{ mt: -5, textAlign: "left" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {" "}
          <Typography fontSize={14}>{course.instructor?.name}</Typography>
          <Typography color="primary" fontWeight={500} fontSize={14}>
            {price}$
          </Typography>
        </Box>
        <Typography level="title-lg" sx={{ mt: 0 }}>
          {title}
        </Typography>
      </CardContent>
      <Box
        orientation="horizontal"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ textTransform: "capitalize" }}
          color="primary"
          fontWeight={500}
          fontSize={12}
        >
          {catagory}
        </Typography>

        <Link to={_id}>
          <Button sx={{ fontSize: 12 }} size="sm" variant="plain">
            View Details
          </Button>
        </Link>
      </Box>
    </Card>
  );
}
