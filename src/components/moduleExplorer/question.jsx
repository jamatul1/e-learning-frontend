import * as React from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import { Box } from "@mui/joy";

export default function Question({ idx, question, setAnswer }) {
  const [selectedValue, setSelectedValue] = React.useState(-1);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);

    setAnswer((answers) => {
      answers[idx] = event.target.value;
      console.log(answers);
      return answers;
    });
  };
  return (
    <Box sx={{ p: 2 }}>
      <FormLabel sx={{ mb: 2 }}>
        {idx + 1}. {question.question}
      </FormLabel>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {question.options.map((option, i) => {
          return (
            <Radio
              label={option}
              key={i}
              checked={selectedValue == i}
              onChange={handleChange}
              value={i}
              name={question.question}
              slotProps={{ input: { "aria-label": "B" } }}
            />
          );
        })}
      </Box>
    </Box>
  );
}
