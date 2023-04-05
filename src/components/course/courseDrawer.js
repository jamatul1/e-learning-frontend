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
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { PeopleAltOutlined } from "@mui/icons-material";

const drawerWidth = 300;
const drawerList = [
  {
    label: `Description`,
    Icon: <InfoOutlinedIcon />,
  },
  {
    label: `Module's`,
    Icon: <PaymentOutlinedIcon />,
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
    Icon: <PeopleAltOutlined />,
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
          mt: 24.5,
          mx: 8,
          borderRadius: 2,
          // borderRight: "none",
          border: (t) => `1px solid ${t.palette.border}`,
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
              <ListItemText
                sx={{
                  fontSize: 20,
                  ".css-10hburv-MuiTypography-root": {
                    fontSize: 16,
                    fontWeight: 500,
                    color: (t) => t.palette.g,
                  },
                }}
                primary={d.label}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
