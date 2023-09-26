import { Card, CardContent, Typography, Box } from "@mui/joy";
import React from "react";

export default function Questions({ questions }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
      }}
    >
      {questions.length === 0 && <Typography>No question is added!</Typography>}
      {questions.map((q, k) => {
        return <Question key={k} ques={q} />;
      })}
    </Box>
  );
}

function Question({ ques }) {
  return (
    <Card>
      <CardContent>
        <Typography fontWeight={"bold"} level="title-md">
          {ques.question}
        </Typography>
        {ques.options.map((o, i) => {
          return (
            <Typography key={i}>
              {i + 1}: {o}
            </Typography>
          );
        })}
        <Typography fontWeight={"bold"}>
          Answer : {ques.options[ques.answer]}
        </Typography>
      </CardContent>
    </Card>
  );
}
