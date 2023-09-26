import {
  Box,
  Button,
  IconButton,
  ListItemButton,
  ListItemDecorator,
  Typography,
  List,
  listItemDecoratorClasses,
  ListItemContent,
} from "@mui/joy";
import AddLesson from "./AddLesson";
import { BatteryCharging, Delete, FileText, Link2, Video } from "react-feather";
import AddAssignment from "./AddAssignment";
import AddQuiz from "./AddQuiz";

export default function IQuizzesTabPanel({ quizzes }) {
  console.log(quizzes);
  return (
    <Box>
      <AddQuiz />
      <Box sx={{ mt: 2 }}>
        {quizzes?.length === 0 && (
          <Typography>There is no quizzes in this modules</Typography>
        )}
        <List
          component="nav"
          sx={{
            width: 450,
            "--ListItem-paddingLeft": "0px",
            "--ListItemDecorator-size": "64px",
            "--ListItem-minHeight": "28px",
            "--List-nestedInsetStart": "13px",
            [`& .${listItemDecoratorClasses.root}`]: {
              justifyContent: "flex-end",
              pr: "18px",
            },
            '& [role="button"]': {
              borderRadius: "20px 20px",
            },
          }}
        >
          {quizzes &&
            quizzes.map((l, i) => {
              return (
                <ListItemButton key={i} sx={{ justifyContent: "flex-between" }}>
                  <ListItemDecorator>{<BatteryCharging />}</ListItemDecorator>
                  <ListItemContent> {l.title}</ListItemContent>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {/* <Button
                      onClick={() => {
                        console.log("open");
                      }}
                      size="sm"
                      variant="outlined"
                    >
                      Open
                    </Button> */}
                    <IconButton
                      onClick={() => {
                        console.log("delete");
                      }}
                    >
                      <Delete />
                    </IconButton>
                  </Box>
                </ListItemButton>
              );
            })}
        </List>
      </Box>
    </Box>
  );
}
