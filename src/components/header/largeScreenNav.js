import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";

import React from "react";

const pages = [
  { label: "Home", url: "/" },
  { label: "Popular Courses", url: "/onlyforyou" },
  { label: "Courses", url: "/courses" },
];
export default function LargeScreenNav() {
  const router = useRouter();
  return (
    <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
      {pages.map((page) => (
        <Button
          onClick={() => router.push(page.url)}
          key={page}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          {page.label}
        </Button>
      ))}
    </Box>
  );
}
