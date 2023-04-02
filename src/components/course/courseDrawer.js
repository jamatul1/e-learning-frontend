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
          mt: 24.5,
          mx: 8,
          borderRadius: 2,
          // borderRight: "none",
          border: "1px solid #eee",
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
                    fontSize: 20,
                    color: (t) => t.palette.dg,
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
