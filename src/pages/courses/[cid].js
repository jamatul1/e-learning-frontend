import { courses } from "@/data/courses";
import { Paper, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CourseTabs from "./courseTabs";
import Description from "./description";
import styled from "@emotion/styled";
import Syllabus from "./syllabus";
import SideBar from "./sideBar";
import InstrcutorCard from "@/components/cards/instructorCard";
import CourseReview from "@/components/review/courseReview";
import CustomizedAccordions from "@/components/accordion/customizedAccordions";
const FixedButton = styled.button`
  position: fixed;
  right: 14rem;
  top: 15rem;
  border: none;
  background: cyan;
  color: black;
  font-size: 1.2rem;
  padding: 0.7rem 2rem;
  border-radius: 3px;
  cursor: pointer;
`;
export default function CourseDetails() {
  const router = useRouter();
  const { cid } = router.query;
  const [course, setCourse] = useState(null);
  useEffect(() => {
    let c = courses.filter((c) => c.id == cid)[0];
    setCourse(c);
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        mt: 7,
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: 160,
          right: 150,
        }}
      >
        <SideBar />
      </Box>
      <Box elevation={0} sx={{ width: "80%" }}>
        <Box sx={{ width: "70%", mx: 20 }}>
          <Paper elevation={0} sx={{ pt: 10 }}>
            {course && <Description course={course} />}
          </Paper>
          <Box sx={{ width: "100%", my: 15 }}>
            <Typography
              color={(t) => t.palette.dg}
              fontWeight={"bold"}
              sx={{ mb: 5 }}
              variant="h4"
            >
              {" "}
              Course Modules
            </Typography>
            {course && <CustomizedAccordions readable data={course.modules} />}
          </Box>

          <Box sx={{ width: "70%", my: 10 }}>
            <Box sx={{ mb: 4 }}>
              <Typography
                color={(t) => t.palette.dg}
                fontWeight={"bold"}
                variant="h4"
              >
                2 Reviews
              </Typography>
              <Rating sx={{ fontSize: 32 }} readOnly value={5} />
            </Box>
            <CourseReview />
            <CourseReview />
          </Box>
          <Box sx={{ width: "34%" }}>
            <Typography
              color={(t) => t.palette.dg}
              fontWeight={"bold"}
              sx={{ mb: 2 }}
              variant="h4"
            >
              {" "}
              Course Instructor{" "}
            </Typography>
            <InstrcutorCard />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
