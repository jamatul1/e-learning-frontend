import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  SvgIcon,
  Typography,
} from "@mui/joy";
import React from "react";
import ICourseCover from "./ICourseCover";
import { useGetCourseStatsQuery } from "../../redux/services/courses/courseStats";
import { useParams } from "react-router-dom";
import {
  BatteryCharging,
  Figma,
  FileText,
  Folder,
  Link2,
  Video,
} from "react-feather";
import { useSingleCourseQuery } from "../../redux/services/courses/courses";

export default function ICourseDashboard() {
  let { id } = useParams();
  let { data, error, isLoading } = useGetCourseStatsQuery(id);
  let { data: allData } = useSingleCourseQuery(id);
  let course = allData?.data;
  let stats = data?.stats;
  return (
    <Box>
      <ICourseCover imgUrl={course?.image} />
      <Box
        sx={{
          mt: 15,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box textAlign={"center"} sx={{ mb: 2 }}>
          <Typography level="h5">
            🎉 Welcome to your course{" "}
            <Typography fontWeight={"bold"}>{stats?.courseTitle}</Typography>
          </Typography>
          {/* <Typography level="h3">Your Course Summery</Typography> */}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 2,
            width: "70%",
          }}
        >
          <SummeryItem
            label={"Modules"}
            value={stats?.modules}
            logo={<Folder />}
          />
          <SummeryItem
            label={"Video Lessons"}
            value={stats?.videos}
            logo={<Video />}
          />
          <SummeryItem
            label={"Resources"}
            value={stats?.resources}
            logo={<FileText />}
          />
          <SummeryItem
            label={"Assignments"}
            value={stats?.assignments}
            logo={<Link2 />}
          />
          <SummeryItem
            label={"Quizzes"}
            value={stats?.quizzes}
            logo={<BatteryCharging />}
          />
        </Box>
      </Box>
    </Box>
  );
}

function SummeryItem({ label, value, logo }) {
  return (
    <Card variant="outlined">
      <CardContent orientation="horizontal">
        <CircularProgress size="lg" color="success" determinate value={0}>
          {/* <SvgIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
              />
            </svg>
          </SvgIcon> */}
          {logo}
        </CircularProgress>
        <CardContent>
          <Typography level="body-md">Total {label}</Typography>
          <Typography level="h2">{value}</Typography>
        </CardContent>
      </CardContent>
    </Card>
  );
}
