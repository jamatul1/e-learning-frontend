import { Box, Button, Sheet, Typography } from "@mui/joy";
import CourseCard from "../../components/courses/CourseCard";
import { useGetCoursesQuery } from "../../redux/services/courses/courses";
import { Link } from "react-router-dom";

export default function OurCourses() {
  let { data, error, isLoading } = useGetCoursesQuery(`?page=1&limit=5`);
  return (
    <Sheet
      sx={{
        width: "90%",
        boxShadow: "lg",
        mt: 20,
        mb: 20,
        px: 10,
        py: 6,
        mx: "auto",
        borderRadius: "lg",
      }}
    >
      <Typography fontWeight={400} sx={{ mb: 5 }} level="h2">
        World's Best Premium Courses
      </Typography>
      <Sheet
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          width: "100%",
          minHeight: "20vh",
          alignItems: "center",
          mb: 4,
        }}
      >
        {data?.data.map((c) => (
          <div key={c._id}>
            <CourseCard key={c._id} course={c}></CourseCard>
          </div>
        ))}
        {/* {loading && <CircularProgress size="md" />} */}
      </Sheet>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link to="/courses">
          <Button sx={{ mt: 3, px: 10, py: 1.5 }}> Explore</Button>
        </Link>
      </Box>
    </Sheet>
  );
}
