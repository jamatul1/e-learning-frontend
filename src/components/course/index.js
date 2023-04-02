import * as React from "react";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import CourseDrawer from "./courseDrawer";
import CourseAuthors from "../../components/course/courseAuthors";
import CourseDescription from "./courseDescription";
import CourseModules from "./courseModules";
import CourseQuestions from "./courseQuestions";
import CourseSyllabus from "./courseSyllabus";
import { courses } from "@/data/courses";
import { useCourseContext } from "@/contexts/courseContext";
const getSubCourseComp = (type, data = "") => {
  const comps = {
    authors: <CourseAuthors data={data} />,
    description: <CourseDescription data={data} />,
    modules: <CourseModules data={data} />,
    questions: <CourseQuestions data={data} />,
    syllabus: <CourseSyllabus data={data} />,
  };
  return comps[type];
};

export default function Course() {
  const [selected, setSelected] = React.useState("modules");
  let { course, isLoading } = useCourseContext();

  const handleChange = (type) => {
    setSelected(type);
  };

  return (
    <Box sx={{ ml: 7, display: "flex", gap: 2 }}>
      <CourseDrawer onClick={handleChange} />
      <Paper elevation={0} sx={{ mt: 10 }}>
        {getSubCourseComp(selected, course)}
      </Paper>
    </Box>
  );
}

export function Wrapper({ children, ...props }) {
  return (
    <Box
      sx={{
        width: "50vw",
        p: 5,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
