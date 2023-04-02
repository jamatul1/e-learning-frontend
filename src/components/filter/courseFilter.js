import { Box } from "@mui/system";
import React from "react";
import BasicSelect from "./select";
import PriceSlider from "../slider/priceSlider";

export default function CourseFilter() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <BasicSelect
        label="Free or Paid"
        value={"freeandpaid"}
        menus={[
          { value: "freeandpaid", label: "Free + Paid" },
          { value: "free", label: "Free" },
          { value: "paid", label: "Paid" },
        ]}
      />
      <PriceSlider />
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
      <BasicSelect
        label="Labels"
        value={"all"}
        menus={[
          { value: "all", label: "All" },
          { value: "beginner", label: "Beginner" },
          { value: "intermediate", label: "Intermediate" },
          { value: "advanced", label: "Advanced" },
        ]}
      />
    </Box>
  );
}
