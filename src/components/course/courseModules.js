import CustomizedAccordions from "@/components/accordion/customizedAccordions";
import { useCourseContext } from "@/contexts/courseContext";
import { Typography } from "@mui/material";
import React from "react";
import { Wrapper } from ".";

export default function CourseModules({ data }) {
  const { handleModuleStart } = useCourseContext();

  return (
    <Wrapper>
      <Typography
        color={(t) => t.palette.dg}
        fontWeight={500}
        variant="h2"
        sx={{ mb: 5 }}
        fontSize={32}
      >
        Course Modules
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
