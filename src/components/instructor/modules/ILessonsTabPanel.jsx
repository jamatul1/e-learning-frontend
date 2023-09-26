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
import React from "react";
import AddLesson from "./AddLesson";
import { Delete, FileText, Video } from "react-feather";

export default function ILessonsTabPanel({ lessons }) {
  console.log(lessons);
  return (
    <Box>
      <AddLesson />
      <Box sx={{ mt: 2 }}>
        {lessons?.length === 0 && (
          <Typography>There is no lessons in this modules</Typography>
        )}
        <List
          component="nav"
          sx={{
            width: 450,
            "--ListItem-paddingLeft": "0px",
            "--ListItemDecorator-size": "64px",
            "--ListItem-minHeight": "32px",
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
          {lessons &&
            lessons.map((l, i) => {
              return (
                <ListItemButton key={i} sx={{ justifyContent: "flex-between" }}>
                  <ListItemDecorator>
                    {l.type === "pdf" ? <FileText /> : <Video />}
                  </ListItemDecorator>
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
