import {
  Button,
  Divider,
  Grid,
  Box,
  Sheet,
  Typography,
  Modal,
  ModalClose,
  CircularProgress,
} from "@mui/joy";
import React from "react";

import CourseReview from "../../components/review";
import * as Feather from "react-feather";
import CourseModules from "../../components/courseModules";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSingleCourseQuery } from "../../redux/services/courses/courses";
import SingleCoursePreview from "../../components/singleCoursePreview";
import { useCreateCourseProgressMutation } from "../../redux/services/progress/progress";
import { useEnroll } from "../../hooks/useEnrolled";
import { useAuth } from "../../hooks/useAuth";

export default function SingleCoursePage() {
  let { id } = useParams();
  let { data } = useSingleCourseQuery(id);
  let course = data?.data;

  let stats = getStats(course);
  return (
    <Sheet>
      <Grid container>
        <Grid xs={8}>
          <Box sx={{ px: 15 }}>
            <Box>
              <img
                style={{ width: "100%", borderRadius: 30 }}
                src={
                  course?.image
                    ? course?.image
                    : "https://www.blendernation.com/wp-content/uploads/2020/03/Promo-Thumbnail.jpg"
                }
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                  transform: "translate(10%,-50%)",
                }}
              >
                <img
                  style={{
                    width: 120,
                    borderRadius: 10,
                    border: "5px solid white",
                  }}
                  src={
                    course?.instructor?.photo
                      ? course?.instructor?.photo
                      : "https://salondesmaires-gard.com/wp-content/uploads/2014/10/speaker-3.jpg"
                  }
                />
                <Box sx={{ display: "flex" }}>
                  <Typography
                    sx={{
                      color: "#9c9c9c",
                    }}
                  >
                    A course by
                  </Typography>
                  <Typography>{course?.instructor?.name}</Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <Typography sx={{ mb: 1 }} level="h2" fontWeight={500}>
                {course?.title}
              </Typography>
              <Typography>{course?.description}</Typography>
            </Box>
            <Box>
              <Typography sx={{ mb: 2 }}>Course Table of Contents</Typography>
              <CourseModules modules={course?.modules} />
            </Box>
            <Box sx={{ mt: 5 }}>
              <Typography level="h4" sx={{ mb: 1 }}>
                Reviews
              </Typography>
              <CourseReview />
            </Box>
          </Box>
        </Grid>
        <Grid xs={4}>
          <Box sx={{ display: "flex", gap: 3, flexDirection: "column", px: 5 }}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography level="h1" fontSize={48} fontWeight={400}>
                {course?.price}
              </Typography>
              <Typography fontWeight={500} fontSize={20}>
                USD
              </Typography>
            </Box>
            <Box>
              <Item
                icon={<Feather.Video />}
                label={"Lessons"}
                value={stats.language}
              />
              <Item
                icon={<Feather.FileText />}
                label={"Resources"}
                value={stats.resources}
              />
              <Item
                icon={<Feather.Link2 />}
                label={"Assignments"}
                value={stats.assignments}
              />
              <Item
                icon={<Feather.BatteryCharging />}
                label={"Quizzes"}
                value={stats.quizzes}
              />
              <Item
                icon={<Feather.User />}
                label={"Students"}
                value={stats.students}
              />
              <Item
                icon={<Feather.Cast />}
                label={"Language"}
                value={stats.language}
              />
              <Item
                icon={<Feather.Clock />}
                label={"Duration"}
                value={Math.floor(stats.duration / 60) + " hour"}
              />
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <EnrollCourse />
              <SingleCoursePreview moduleId={course?.modules[0]?._id} />
            </Box>
            <Divider />
            <Box>
              <Typography fontWeight={500} sx={{ mb: 1 }}>
                ASSIGNMENT
              </Typography>
              <Typography>{course?.assignment}</Typography>
            </Box>
            <Box>
              <Typography fontWeight={500} sx={{ mb: 1 }}>
                PREREQUISTISTIES
              </Typography>
              <Typography>{course?.prerequisties}</Typography>
            </Box>
            <Box>
              <Typography fontWeight={500} sx={{ mb: 1 }}>
                MATERIALS
              </Typography>
              <Typography>{course?.materials}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Sheet>
  );
}

function Item({ icon, label, value }) {
  return (
    <Box sx={{ display: "flex", gap: 1, marginBottom: 1 }}>
      {icon}
      <Box
        sx={{
          gap: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
        <Typography variant="body2">{label + " : "}</Typography>
        <Typography fontSize={14} fontWeight={500}>
          {value}
        </Typography>
      </Box>
    </Box>
  );
}

function getStats(course) {
  if (!course) return {};
  let stats = {};
  stats.students = course?.students.length;
  stats.language = course?.language;
  let duration = 0,
    lessons = 0,
    resources = 0,
    assignments = 0,
    quizzes = 0;
  for (let i of course?.modules) {
    for (let lesson of i.lessons) {
      duration += Number(lesson.duration);
      if (lesson.type === "video") lessons++;
      else resources++;
    }
    assignments += i.assignments.length;
    quizzes += i.quizzes.length;
  }
  (stats.duration = duration),
    (stats.lessons = lessons),
    (stats.resources = resources),
    (stats.assignments = assignments),
    (stats.quizzes = quizzes);
  return stats;
}

export function EnrollCourse() {
  let { id } = useParams();
  let { enrolledCourses } = useEnroll();
  console.log(enrolledCourses, "enrolled courses");
  let { user } = useAuth();
  let [createProgress] = useCreateCourseProgressMutation();
  let navigateTo = useNavigate();
  async function handleEnroll() {
    try {
      let progress = await createProgress(id).unwrap();

      if (progress) navigateTo("/enrolled/" + progress?.courseProgress._id);
    } catch (error) {
      console.log(error);
    }
  }
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      {enrolledCourses[id] && (
        <Link to={"/student/enrolled/" + enrolledCourses[id]}>
          <Button variant="outlined">Start Now</Button>
        </Link>
      )}
      {!enrolledCourses[id] && (
        <Button
          startDecorator={<Feather.Clipboard />}
          onClick={() => {
            if (user) {
              setOpen(true);
              handleEnroll();
            } else {
              navigateTo("/signin");
            }
          }}
        >
          Enroll Now
        </Button>
      )}

      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ mr: 2 }}>
            Course Enrolled Process is started
          </Typography>
          <CircularProgress />
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
