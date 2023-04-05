import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function BasicBreadcrumbs({ items, ...props }) {
  return (
    <div {...props} role="presentation" onClick={handleClick}>
      <Breadcrumbs sx={{ pt: 2, pl: 2 }} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/course">
          Course
        </Link>
        <Link underline="hover" color="inherit" href="/course">
          Modules
        </Link>
        <Typography color="text.primary">Module-1</Typography>
      </Breadcrumbs>
    </div>
  );
}
