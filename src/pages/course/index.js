import Course from "@/components/course";
import { CourseProvider } from "@/contexts/courseContext";
import React from "react";

export default function CoursePage() {
  return (
    <CourseProvider>
      <Course />
    </CourseProvider>
  );
}
