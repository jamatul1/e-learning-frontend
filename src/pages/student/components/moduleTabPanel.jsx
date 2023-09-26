import { CircularProgress } from "@mui/joy";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
import * as Feather from "react-feather";
import { Link } from "react-router-dom";
export default function ModuleTabPanel({ modulesProgress, modules }) {
  return (
    <Box>
      <Typography sx={{ mb: 5 }} fontSize={28}>
        Total Chapters {modulesProgress?.length}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {modulesProgress?.map((m, i) => {
          let totalLesson = 0,
            completedLesson = 0,
            totalAssignment = 0,
            completedAssignment = 0,
            totalQuiz = 0,
            completedQuiz = 0;
          for (let i of m.lessonsStatus) {
            totalLesson += 1;
            if (i.completed) completedLesson++;
          }
          for (let i of m.quizStatus) {
            totalQuiz += 1;
            if (i.completed) completedQuiz++;
          }
          for (let i of m.assignmentStatus) {
            totalAssignment += 1;
            if (i.completed) completedAssignment++;
          }

          return (
            <ModuleCard
              key={i}
              title={modules[i]?.title}
              description={modules[i]?.description}
              id={m._id}
              totalAssignment={totalAssignment}
              completedAssignment={completedAssignment}
              totalQuiz={totalQuiz}
              completedQuiz={completedQuiz}
              totalLesson={totalLesson}
              completedLesson={completedLesson}
            />
          );
        })}
      </Box>
    </Box>
  );
}

function ModuleCard({
  title,
  completedAssignment,
  totalAssignment,
  completedLesson,
  totalLesson,
  totalQuiz,
  completedQuiz,
  description,
  id,
}) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
        gap: 2,
      }}
    >
      <Card size="lg" sx={{ width: 600 }}>
        <Chip size="sm" variant="outlined">
          Chapter
        </Chip>
        <Typography fontWeight={400} level="h3">
          {title}
        </Typography>
        <Typography sx={{ mt: -2 }}>{description}</Typography>
        <Divider inset="none" />
        <List
          size="sm"
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 1,
            mx: "calc(-1 * var(--ListItem-paddingX))",
          }}
        >
          <ListItem>
            <CircularProgress
              size="md"
              determinate
              value={completedLesson / totalLesson}
              sx={{ "--CircularProgress-size": "50px", mr: 2 }}
            >
              {" "}
              <Typography>
                {" "}
                {completedLesson}/{totalLesson}
              </Typography>
            </CircularProgress>
            <Typography fontWeight={500}>Lessons</Typography>
          </ListItem>
          <ListItem>
            <CircularProgress
              size="md"
              determinate
              value={completedAssignment / totalAssignment}
              sx={{ "--CircularProgress-size": "50px", mr: 2 }}
            >
              {" "}
              <Typography>
                {" "}
                {completedAssignment}/{totalAssignment}
              </Typography>
            </CircularProgress>
            <Typography fontWeight={500}>Assignments</Typography>
          </ListItem>
          <ListItem>
            <CircularProgress
              size="md"
              determinate
              value={completedQuiz / totalQuiz}
              sx={{ "--CircularProgress-size": "50px", mr: 2 }}
            >
              {" "}
              <Typography>
                {" "}
                {completedQuiz}/{totalQuiz}
              </Typography>
            </CircularProgress>
            <Typography fontWeight={500}>Quizzes</Typography>
          </ListItem>
          <ListItem>
            <Link to={"module/" + id}>
              <Button endDecorator={<Feather.Play size={16} />}>
                Start now
              </Button>
            </Link>
          </ListItem>
        </List>
        <Divider inset="none" />
      </Card>
    </Box>
  );
}
