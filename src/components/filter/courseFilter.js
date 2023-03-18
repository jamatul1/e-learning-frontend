import { Box } from "@mui/system";
import React from "react";
import BasicSelect from "./select";

export default function CourseFilter() {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <BasicSelect
        label="Free or Paid"
        value={"freeandpaid"}
        menus={[
          { value: "freeandpaid", label: "Free + Paid" },
          { value: "free", label: "Free" },
          { value: "paid", label: "Paid" },
        ]}
      />
      <BasicSelect
        label="Catagories"
        value={"all"}
        menus={[
          { value: "all", label: "All" },
          { value: "computerscience", label: "Computer Science" },
          { value: "math", label: "Math" },
          { value: "physics", label: "Physics" },
        ]}
      />
      <BasicSelect
        label="Tags"
        value={"all"}
        menus={[
          { value: "all", label: "All" },
          { value: "computerscience", label: "Computer Science" },
          { value: "math", label: "Math" },
          { value: "physics", label: "Physics" },
        ]}
      />
    </Box>
  );
}
