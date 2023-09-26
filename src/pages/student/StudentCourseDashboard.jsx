import { useParams } from "react-router-dom";
import { useGetSingleCourseProgressQuery } from "../../redux/services/progress/progress";
import { Grid, Sheet, Tab, TabList, TabPanel, Tabs } from "@mui/joy";
import ModuleTabPanel from "./components/moduleTabPanel";
import AssignmentTabPanel from "./components/assignmentTabPanel";
import QuizTabPanel from "./components/quizTabPanel";
import OverallProgress from "./components/overallProgress";
import * as Feather from "react-feather";

export default function StudnetCourseDashboard() {
  let { id } = useParams();
  let { data } = useGetSingleCourseProgressQuery(id);
  let progress = data?.progress;
  console.log(progress);

  return (
    <Sheet>
      <Grid container>
        <Grid xs={10}>
          <Tabs
            aria-label="Vertical tabs"
            orientation="vertical"
            sx={{ minWidth: 800, minHeight: "80vh", px: 5, py: 3 }}
          >
            <TabList sx={{ width: 280 }}>
              <Tab sx={{ gap: 2, mb: 1 }}>
                <Feather.Folder /> Modules
              </Tab>
              <Tab sx={{ gap: 2, mb: 1 }}>
                <Feather.Link /> Assignments
              </Tab>
              <Tab sx={{ gap: 2, mb: 1 }}>
                <Feather.BatteryCharging />
                Quizzes
              </Tab>
            </TabList>
            <TabPanel value={0}>
              <ModuleTabPanel
                modules={progress?.course?.modules}
                modulesProgress={progress?.modulesStatus}
              />
            </TabPanel>
            <TabPanel value={1}>
              <AssignmentTabPanel
                assignments={normalizedAssignments(
                  progress?.course.modules,
                  progress?.modulesStatus
                )}
              />
            </TabPanel>
            <TabPanel value={2}>
              <QuizTabPanel
                quizzes={normalizedQuizs(
                  progress?.course.modules,
                  progress?.modulesStatus
                )}
              />
            </TabPanel>
          </Tabs>
        </Grid>
        <Grid xs={2}>
          <OverallProgress />
        </Grid>
      </Grid>
    </Sheet>
  );
}

function normalizedAssignments(modules = [], moduleStatus = []) {
  if (!modules || !moduleStatus) return [];
  let assignmentMap = {};
  let normalized = [];
  for (let i of moduleStatus) {
    for (let q of i.assignmentStatus) {
      assignmentMap[q.assignment] = q;
    }
  }
  for (let i of modules) {
    for (let q of i.assignments) {
      let assignment = {};

      assignment.title = q.title;
      if (!assignmentMap[q._id]) continue;
      assignment.completed = assignmentMap[q._id].completed;
      assignment.status = assignmentMap[q._id].status;
      normalized.push(assignment);
    }
  }
  return normalized;
}

function normalizedQuizs(modules = [], moduleStatus = []) {
  if (!modules || !moduleStatus) return [];
  let normalized = [];

  for (let i of modules) {
    for (let q of i.quizzes) {
      let quiz = {};
      quiz = { ...q };
      quiz.type = "quiz";
      normalized.push(quiz);
    }
  }
  return normalized;
}
