import React, { useEffect } from "react";
import { useEnrolledCoursesQuery } from "../redux/services/users/auth";
import { useDispatch } from "react-redux";
import { setEnrolledCourses } from "../redux/slices/users/authSlice";
import { CircularProgress, Sheet, Typography } from "@mui/joy";
import { Box } from "react-feather";
import { useNavigate, useParams } from "react-router-dom";

export default function NewEnrolledPage() {
  let { id } = useParams();
  let { data: enrolled } = useEnrolledCoursesQuery();
  let dispatch = useDispatch();
  let navigateTo = useNavigate();
  useEffect(() => {
    if (enrolled) {
      dispatch(
        setEnrolledCourses({ enrolledCourses: enrolled.enrolledCourses })
      );
      navigateTo("/student/enrolled/" + id, { replace: true });
    }
  }, [enrolled]);
  return (
    <Sheet
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box>
        <Typography textAlign={"center"}>Please Wait ...</Typography>
        <Typography textAlign={"center"}>
          Your Learning Environment is getting ready !
        </Typography>
      </Box>
      <Box>
        <CircularProgress variant="solid" />
      </Box>
    </Sheet>
  );
}
