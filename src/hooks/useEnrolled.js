import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectEnrolledCourse } from "../redux/slices/users/authSlice";

export const useEnroll = () => {
  const enrolledCourses = useSelector(selectEnrolledCourse);

  return useMemo(() => ({ enrolledCourses }), [enrolledCourses]);
};
