import { Box, Chip, Sheet, Typography } from "@mui/joy";
import React from "react";

import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import { GitPullRequest } from "react-feather";
import ModuleExplorer from "../../../components/moduleExplorer";

export default function QuizTabPanel({ quizzes }) {
  console.log(quizzes);
  return (
    <Sheet>
      <Typography color="primary" fontWeight={500}>
        Total Quizzes {quizzes.length}
      </Typography>
      <Box>
        {/* <List sx={{ gap: 1 }} aria-labelledby="decorated-list-demo">
          {quizzes.map((q, i) => {
            return (
              <ListItem key={i}>
                <ListItemDecorator>
                  <GitPullRequest />
                </ListItemDecorator>{" "}
                <Typography sx={{ mr: 5 }}>{q.title}</Typography>
                {q.completed ? (
                  <Chip color="success">Score {q.score}</Chip>
                ) : (
                  <Chip>Not taken !</Chip>
                )}
              </ListItem>
            );
          })}
        </List> */}
        <ModuleExplorer items={quizzes} />
      </Box>
    </Sheet>
  );
}
