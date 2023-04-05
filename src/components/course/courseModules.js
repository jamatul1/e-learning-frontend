import CustomizedAccordions from "@/components/accordion/customizedAccordions";
import { useCourseContext } from "@/contexts/courseContext";
import { Typography } from "@mui/material";
import React from "react";
import { Wrapper } from ".";
import { MobileFriendlyOutlined, Outbound } from "@mui/icons-material";

export default function CourseModules({ data }) {
  const { handleModuleStart } = useCourseContext();

  return (
    <Wrapper>
      <Typography
        color={(t) => t.palette.dg}
        fontWeight={500}
        variant="h2"
        sx={{ mb: 5, display: "flex", gap: 2, alignItems: "center" }}
        fontSize={28}
      >
        <MobileFriendlyOutlined fontSize="32px" /> Course Modules
      </Typography>
      {data && (
        <CustomizedAccordions
          handleStart={handleModuleStart}
          data={data.modules}
        />
      )}
    </Wrapper>
  );
}
