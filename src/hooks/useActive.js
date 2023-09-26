import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectActiveCourse } from "../redux/slices/courses/courseSlice";

export const useActiveCourse = () => {
  const activeCourses = useSelector(selectActiveCourse);

  return useMemo(() => ({ activeCourses }), [activeCourses]);
};
