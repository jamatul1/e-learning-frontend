import { Box } from "@mui/system";
import React from "react";
import BasicSelect from "./select";

export default function Filter() {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <BasicSelect />
      <BasicSelect />
      <BasicSelect />
      <BasicSelect />
    </Box>
  );
}
