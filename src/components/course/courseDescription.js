import { Box } from "@mui/system";
import React from "react";
import parse from "html-react-parser";
import { Typography } from "@mui/material";
import { Wrapper } from ".";

export default function CourseDescription({ data }) {
  return (
    <Wrapper>
      <Typography variant="h2" fontSize={32}>
        Description
      </Typography>
      {parse(data.description)}
    </Wrapper>
  );
}
