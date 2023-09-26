import * as React from "react";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import Typography from "@mui/joy/Typography";
import Input from "@mui/joy/Input";
import ILessonsTabPanel from "./ILessonsTabPanel";
import IAssignmentTabPanel from "./IAssignmentTabPanel";
import IQuizzesTabPanel from "./IQuizzesTabPanel";
import { useParams } from "react-router-dom";
import { useSingleModuleQuery } from "../../../redux/services/courses/modules";
import { Button } from "@mui/joy";
import { Eye } from "react-feather";
import ModulePreview from "./modulePreview";
import { shuffle } from "../../../utils/helperFunctions";

export default function IModuleTabs() {
  let { id, moduleId } = useParams();

  const [index, setIndex] = React.useState(0);
  let { data, error, isLoading } = useSingleModuleQuery({
    id,
    moduleId,
  });
  let module = data?.module;
  console.log(module);
  return (
    <Box
      sx={{
        flexGrow: 1,
        overflowX: "hidden",
        borderRadius: "md",
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Typography fontWeight={400} level="h3">
          {module?.title}
        </Typography>
        <Typography sx={{ mb: 2 }}>{module?.description}</Typography>
        <ModulePreview items={shuffle(normalized(module))} />
      </Box>
      <Tabs
        aria-label="Pipeline"
        value={index}
        onChange={(event, value) => setIndex(value)}
      >
        <TabList
          sx={{
            pt: 2,
            justifyContent: "center",
            [`&& .${tabClasses.root}`]: {
              flex: "initial",
              bgcolor: "transparent",
              "&:hover": {
                bgcolor: "transparent",
              },
              [`&.${tabClasses.selected}`]: {
                color: "primary.plainColor",
                "&::after": {
                  height: "3px",
                  borderTopLeftRadius: "3px",
                  borderTopRightRadius: "3px",
                  bgcolor: "primary.500",
                },
              },
            },
          }}
        >
          <Tab indicatorInset>
            Lessons
            <Chip
              size="sm"
              variant="soft"
              color={index === 0 ? "primary" : "neutral"}
              sx={{ ml: 1 }}
            >
              {module?.lessons.length}
            </Chip>
          </Tab>
          <Tab indicatorInset>
            Assignments
            <Chip
              size="sm"
              variant="soft"
              color={index === 1 ? "primary" : "neutral"}
              sx={{ ml: 1 }}
            >
              {module?.assignments.length}
            </Chip>
          </Tab>
          <Tab indicatorInset>
            Quizzes
            <Chip
              size="sm"
              variant="soft"
              color={index === 1 ? "primary" : "neutral"}
              sx={{ ml: 1 }}
            >
              {module?.quizzes.length}
            </Chip>
          </Tab>
        </TabList>
        <Box
          sx={(theme) => ({
            boxShadow: "0 0 0 100vmax var(--bg)",
            clipPath: "inset(0 -100vmax)",
          })}
        >
          <TabPanel value={0}>
            <ILessonsTabPanel lessons={module?.lessons} />
          </TabPanel>
          <TabPanel value={1}>
            <IAssignmentTabPanel assignments={module?.assignments} />
          </TabPanel>
          <TabPanel value={2}>
            <IQuizzesTabPanel quizzes={module?.quizzes} />
          </TabPanel>
        </Box>
      </Tabs>
    </Box>
  );
}

function normalized(module) {
  if (!module) return [];
  let normalized = [];
  for (let i of module.assignments) {
    let n = { ...i };
    n.type = "assignment";
    normalized.push(n);
  }
  for (let i of module.quizzes) {
    let n = { ...i };
    n.type = "quiz";
    normalized.push(n);
  }
  for (let i of module.lessons) {
    let n = { ...i };
    normalized.push(n);
  }
  return normalized;
}
