import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import List from "@mui/joy/List";
import ListSubheader from "@mui/joy/ListSubheader";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";
import {
  Command,
  Edit2,
  Folder,
  Paperclip,
  PieChart,
  Users,
} from "react-feather";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
export default function CourseSidebar() {
  let { id } = useParams();
  let { pathname } = useLocation();
  return (
    <Box
      component="nav"
      className="Navigation"
      sx={{
        p: 2,
        bgcolor: "white",
        borderRight: "1px solid",
        borderColor: "divider",
        display: {
          xs: "none",
          sm: "initial",
        },
      }}
    >
      <List
        size="sm"
        sx={{ "--ListItem-radius": "8px", "--List-gap": "4px", padding: 2 }}
      >
        <ListItem>
          <ListItemButton
            sx={{ textDecoration: "none" }}
            component={NavLink}
            to={"http://localhost:5173/instructor/course/" + id + "/dashboard"}
            selected={pathname === "/instructor/course/" + id + "/dashboard"}
          >
            <ListItemDecorator>
              <PieChart />
            </ListItemDecorator>
            <ListItemContent>Dashboard</ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem nested>
          <ListSubheader>Browse</ListSubheader>
          <List
            aria-labelledby="nav-list-browse"
            sx={{
              "& .JoyListItemButton-root": { p: "8px" },
            }}
          >
            <ListItem>
              <ListItemButton
                sx={{ textDecoration: "none" }}
                component={NavLink}
                to={`http://localhost:5173/instructor/course/${id}/modules`}
                selected={pathname.startsWith(
                  `/instructor/course/${id}/modules`
                )}
              >
                <ListItemDecorator>
                  <Folder />
                </ListItemDecorator>
                <ListItemContent>Modules</ListItemContent>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                sx={{ textDecoration: "none" }}
                component={NavLink}
                to={`http://localhost:5173/instructor/course/${id}/assignments`}
                selected={pathname.startsWith(
                  `/instructor/course/${id}/assignments`
                )}
              >
                <ListItemDecorator>
                  <Paperclip />
                </ListItemDecorator>
                <ListItemContent>Assignments</ListItemContent>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton
                sx={{ textDecoration: "none" }}
                component={NavLink}
                to={`http://localhost:5173/instructor/course/${id}/users`}
                selected={pathname.startsWith(`/instructor/course/${id}/users`)}
              >
                <ListItemDecorator>
                  <Users />
                </ListItemDecorator>
                <ListItemContent>Users</ListItemContent>
              </ListItemButton>
            </ListItem>
          </List>
        </ListItem>
        <ListItem nested sx={{ mt: 2 }}>
          <ListSubheader>Course Details</ListSubheader>
          <List
            aria-labelledby="nav-list-tags"
            size="sm"
            sx={{
              "--ListItemDecorator-size": "32px",
            }}
          >
            <ListItem>
              <ListItemButton
                sx={{ textDecoration: "none" }}
                component={NavLink}
                to={`http://localhost:5173/instructor/course/${id}/details`}
                selected={pathname.startsWith(
                  `/instructor/course/${id}/details`
                )}
              >
                <ListItemDecorator>
                  <Edit2 />
                </ListItemDecorator>
                <ListItemContent>Details</ListItemContent>
              </ListItemButton>
            </ListItem>
          </List>
        </ListItem>
      </List>
    </Box>
  );
}
