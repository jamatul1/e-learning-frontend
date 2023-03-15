import { courses } from "@/data/courses";
import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Authors from "./authors";
import CourseTabs from "./courseTabs";
import Description from "./description";
import styled from "@emotion/styled";
import Syllabus from "./syllabus";
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
  const [currentTab, setCurrentTab] = useState(0);
  const [course, setCourse] = useState(null);
  useEffect(() => {
    let c = courses.filter((c) => c.id == cid)[0];
    setCourse(c);
  }, []);

  const handleChangeTab = (newTabValue) => {
    setCurrentTab(newTabValue);
  };
  return (
    <Box
      sx={{
        minHeight: "100vh",
        mt: 7,
      }}
    >
      <FixedButton onClick={() => router.push("/course")}>
        Enroll Now!
      </FixedButton>
      <Paper sx={{ width: "100%" }}>
        <CourseTabs value={currentTab} handleChangeTab={handleChangeTab} />
        <Box sx={{ width: "70%", m: "auto" }}>
          <Paper sx={{ pt: 10 }}>
            {currentTab === 0 && course && <Description course={course} />}
            {currentTab === 1 && <Authors />}
            {currentTab === 2 && course && <Syllabus course={course} />}
          </Paper>
        </Box>
      </Paper>
    </Box>
  );
}
