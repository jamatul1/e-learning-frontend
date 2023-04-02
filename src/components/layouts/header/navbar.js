import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

export default function Navbar() {
  const navItems = [
    { label: "Home", url: "/" },
    { label: "Courses", url: "/courses" },
    { label: "Popular Courses", url: "/courses/popular" },
    { label: "Your Courses", url: "/courses/your" },
    { label: "About Us", url: "/about" },
  ];
  const router = useRouter();
  const handleClick = (url) => {
    router.push(url);
  };
  return (
    <nav>
      <List sx={{ display: "flex" }}>
        {navItems.map((item, i) => (
          <ListItem disablePadding sx={{ width: "152px" }} key={i}>
            <ListItemButton
              onClick={() => handleClick(item.url)}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </nav>
  );
}
