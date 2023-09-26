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
import { Delete, FileText, Link2, Video } from "react-feather";
import AddAssignment from "./AddAssignment";

export default function IAssignmentTabPanel({ assignments }) {
  console.log(assignments);
  return (
    <Box>
      <AddAssignment />
      <Box sx={{ mt: 2 }}>
        {assignments?.length === 0 && (
          <Typography>There is no assignments in this modules</Typography>
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
          {assignments &&
            assignments.map((l, i) => {
              return (
                <ListItemButton key={i} sx={{ justifyContent: "flex-between" }}>
                  <ListItemDecorator>{<Link2 />}</ListItemDecorator>
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
