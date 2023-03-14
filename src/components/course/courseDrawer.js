import React from "react";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const drawerWidth = 300;
const drawerList = [
  {
    label: `Description`,
    Icon: <InfoIcon />,
  },
  {
    label: `Module's`,
    Icon: <CastForEducationIcon />,
  },
  {
    label: `Syllabus`,
    Icon: <ShowChartIcon />,
  },
  {
    label: `Question's`,
    Icon: <HelpOutlineIcon />,
  },
  {
    label: `Author's`,
    Icon: <PeopleAltIcon />,
  },
];

export default function CourseDrawer({ onClick }) {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          mt: 10,
          borderRadius: 2,
          borderRight: "none",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        {drawerList.map((d, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={() => {
                onClick(d.label.toLowerCase().replace("'", ""));
              }}
            >
              <ListItemIcon>{d.Icon}</ListItemIcon>
              <ListItemText primary={d.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
