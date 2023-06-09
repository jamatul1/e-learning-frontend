import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function ModuleBreadcrumbs({ items, ...props }) {
  return (
    <div {...props} role="presentation" onClick={handleClick}>
      <Breadcrumbs sx={{ pt: 2, pl: 2, mb: 2 }} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Course
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Modules
        </Link>
        <Typography color="text.primary">Module-1</Typography>
      </Breadcrumbs>
    </div>
  );
}
