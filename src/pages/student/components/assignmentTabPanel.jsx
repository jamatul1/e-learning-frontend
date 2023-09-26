import { Box, Chip, Sheet, Typography } from "@mui/joy";
import React from "react";

import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import { FilePlus, GitPullRequest } from "react-feather";

export default function AssignmentTabPanel({ assignments }) {
  console.log(assignments);
  return (
    <Sheet>
      <Typography color="primary" fontWeight={500}>
        Your Assignments Status
      </Typography>
      <Box>
        <List sx={{ gap: 1 }} aria-labelledby="decorated-list-demo">
          {assignments.map((a, i) => {
            return (
              <ListItem sx={{ flexWrap: "wrap" }} key={i}>
                <ListItemDecorator>
                  <FilePlus />
                </ListItemDecorator>{" "}
                <Typography sx={{ mr: 2 }}>
                  Assignment {i + 1}. {a.title}
                </Typography>
                {a.completed ? (
                  <Chip color="success">Accepted</Chip>
                ) : (
                  <>
                    <Chip sx={{ mr: 2 }}>Status</Chip>{" "}
                    <Typography sx={{ mr: 2 }}>
                      {a.status.currentStatus}
                    </Typography>
                    <Chip sx={{ mr: 2 }}>Remark</Chip>{" "}
                    <Typography>{a.status.comment}</Typography>
                  </>
                )}
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Sheet>
  );
}
