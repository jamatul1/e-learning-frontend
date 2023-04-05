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

const drawerWidth = 250;
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
        ul: {
          mt: 5,
        },
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          height: "70vh",
          mt: 6.3,
          mx: 1,
          borderRadius: 1,
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
