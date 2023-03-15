import Course from "@/components/course";
import Header from "@/components/layouts/header";
import { CourseProvider } from "@/contexts/courseContext";
import React from "react";

export default function CoursePage() {
  return (
    <CourseProvider>
      <Course />
    </CourseProvider>
  );
}
