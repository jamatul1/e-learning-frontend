import { useAuth } from "../../hooks/useAuth";
import { useGetInstructorStatusQuery } from "../../redux/services/users/instructor";
import * as React from "react";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import CircularProgress from "@mui/joy/CircularProgress";
import Typography from "@mui/joy/Typography";
import SvgIcon from "@mui/joy/SvgIcon";
import { AspectRatio, Box, CardOverflow, Grid } from "@mui/joy";
import { Link } from "react-router-dom";
import { useEnrolledCoursesQuery } from "../../redux/services/users/auth";
import { useDispatch } from "react-redux";
import { setEnrolledCourses } from "../../redux/slices/users/authSlice";

export default function InstructorDashBoardPage() {
  let { user } = useAuth();
  let { data, error, isLoading } = useGetInstructorStatusQuery(user._id);
  let instructor = data?.instructor;
  let stats = instructor?.ownCourses ? getStats(instructor?.ownCourses) : {};
  let { data: enrolled } = useEnrolledCoursesQuery();
  let dispatch = useDispatch();
  React.useEffect(() => {
    if (enrolled) {
      dispatch(
        setEnrolledCourses({ enrolledCourses: enrolled.enrolledCourses })
      );
    }
  }, [enrolled]);
  return (
    <Box
      sx={{
        flexDirection: "column",
        gap: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        margin: "auto",
        p: 5,
      }}
    >
      <Grid container spacing={5}>
        <Grid xs={8} item>
          <Box>
            <Box sx={{ my: 5, bgColor: "white" }}>
              <Typography
                fontWeight={500}
                level="h3"
                sx={{ mb: 2, mt: 2 }}
                textAlign={"center"}
              >
                Overall Status
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 3,
                }}
              >
                <StatCard
                  label={"Total Earning"}
                  value={stats?.earning + " $"}
                />
                <StatCard label={"Total Courses"} value={stats?.courses} />
                <StatCard label={"Total Users"} value={stats?.users} />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid xs={4} item>
          <Profile
            name={instructor?.name}
            description={instructor?.description}
            photo={instructor?.photo}
          />
        </Grid>
        <Box sx={{ mt: 10, width: "80%", margin: "auto" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography fontWeight={500} level="h3">
              Your courses
            </Typography>
            <Link to={"addCourse"}>
              <Button>Add Course</Button>
            </Link>
          </Box>
          <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
            {instructor?.ownCourses.map((c, i) => {
              return (
                <CourseCard
                  key={i}
                  title={c.title}
                  image={c.image}
                  url={"course/" + c._id}
                  price={c.price}
                  rating={c.rating}
                  instructorPhoto={instructor.photo}
                />
              );
            })}
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}

function getStats(courses = []) {
  let stats = {};
  stats.courses = courses.length;
  let users = 0;
  let earning = 0;
  for (let c of courses) {
    earning += c.students.length * c.price;
    users += c.students.length;
  }
  (stats.users = users), (stats.earning = earning);
  return stats;
}

function CourseCard({ title, image, instructorPhoto, url, price, rating }) {
  return (
    <Card
      sx={{
        textAlign: "center",
        alignItems: "center",
        width: 253,

        "--icon-size": "100px",
        borderRadius: "lg",
      }}
    >
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
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
            transform: "translateY(-50%)",
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
                instructorPhoto
                  ? instructorPhoto
                  : "https://www.usnews.com/object/image/00000142-9263-d33c-abc6-ff77dfba0024/37985FE_DA_20130207_onlinemistakes-slide8.jpg?update-time=1421878595148&size=responsive640"
              }
              alt="image"
            />
          </div>
        </AspectRatio>
      </CardOverflow>
      <Typography level="title-lg" sx={{ mt: -5 }}>
        {title}
      </Typography>
      <CardContent sx={{ flexDirection: "row" }}>
        <Typography>Price: ${price}</Typography>
        <Typography>
          Rating: {rating === 0 ? "Not rated yet!" : "⭐".repeat(rating)}
        </Typography>
      </CardContent>
      <CardActions
        orientation="vertical"
        buttonFlex={1}
        sx={{
          "--Button-radius": "40px",
          width: "clamp(min(100%, 160px), 50%, min(100%, 200px))",
        }}
      >
        <Link to={url + "/dashboard"}>
          <Button variant="outlined">Open</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

function StatCard({ label, value }) {
  return (
    <Card variant="solid" color="primary" invertedColors>
      <CardContent orientation="horizontal">
        <CircularProgress size="lg" determinate value={100}>
          <SvgIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
              />
            </svg>
          </SvgIcon>
        </CircularProgress>
        <CardContent>
          <Typography level="body-md">{label}</Typography>
          <Typography level="h2"> {value}</Typography>
        </CardContent>
      </CardContent>
    </Card>
  );
}

function Profile({ name, photo, description }) {
  return (
    <Card
      data-resizable
      sx={{
        textAlign: "center",
        alignItems: "center",
        width: "300px",
        "--icon-size": "100px",
      }}
    >
      <CardOverflow sx={{ bgColor: "white" }}>
        <AspectRatio
          variant="outlined"
          color="primary"
          ratio="1"
          sx={{
            m: "auto",
            transform: "translateY(50%)",
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
                photo
                  ? photo
                  : "https://www.usnews.com/object/image/00000142-9263-d33c-abc6-ff77dfba0024/37985FE_DA_20130207_onlinemistakes-slide8.jpg?update-time=1421878595148&size=responsive640"
              }
            />
          </div>
        </AspectRatio>
      </CardOverflow>
      <Box>
        <Typography level="title-lg" sx={{ mt: "calc(var(--icon-size) / 2)" }}>
          {name}
        </Typography>
        <Typography>Instructor</Typography>
      </Box>
      <CardContent sx={{ maxWidth: "20ch" }}>{description}</CardContent>
    </Card>
  );
}
