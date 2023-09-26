import { Box, Sheet, Typography } from "@mui/joy";
import { useGetAllCourseProgressQuery } from "../../redux/services/progress/progress";
import { useAuth } from "../../hooks/useAuth";
import CourseCard from "../../components/courses/CourseCard";
import { useEffect } from "react";
import { useEnrolledCoursesQuery } from "../../redux/services/users/auth";
import { setEnrolledCourses } from "../../redux/slices/users/authSlice";
import { useDispatch } from "react-redux";
import PCourseCard from "../../components/courses/PCourseCard";

export default function StudentDashboardPage() {
  let { user } = useAuth();
  let { data } = useGetAllCourseProgressQuery();
  let { data: enrolled } = useEnrolledCoursesQuery();
  let courses = data?.courses;
  let dispatch = useDispatch();
  useEffect(() => {
    if (enrolled) {
      console.log("Enrolled Courses : ", enrolled);
      dispatch(
        setEnrolledCourses({ enrolledCourses: enrolled.enrolledCourses })
      );
    }
  }, [enrolled]);
  return (
    <Sheet sx={{ px: 20, py: 5, mt: -2, minHeight: "90vh" }}>
      <Typography
        textAlign={"center"}
        fontWeight={400}
        level="h2"
        sx={{ mt: 3 }}
        color="primary"
      >
        {" "}
        Welcome 🎉🎉🎉
      </Typography>

      <Typography
        textAlign={"center"}
        fontWeight={500}
        level="h5"
        sx={{ mb: 5, mt: 1 }}
      >
        {user.name}{" "}
      </Typography>
      <Box>
        <Typography fontWeight={500} level="h2" sx={{ my: 5 }}>
          {" "}
          Your Enrolled Courses
        </Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          {courses?.map((c, i) => {
            return <PCourseCard key={i} course={c} />;
          })}
        </Box>
        {courses?.length === 0 && (
          <Typography>You have no enrolled course</Typography>
        )}
      </Box>
    </Sheet>
  );
}
