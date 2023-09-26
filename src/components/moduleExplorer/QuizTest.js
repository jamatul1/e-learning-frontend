import {
  Alert,
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  Input,
  List,
  Modal,
  ModalDialog,
  Option,
  Select,
  Typography,
} from "@mui/joy";
import { useState } from "react";
import { Minus, Plus, PlusCircle, X, Zap } from "react-feather";
import Question from "./question";
import * as React from "react";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
function getInitialAnswers(len) {
  let answers = Array(len).fill(-1);
  return answers;
}
export default function QuizTest({
  result,
  setResult,
  setShowResult,
  questions = [],
}) {
  const [open, setOpen] = useState(false);
  let [answers, setAnswer] = useState(getInitialAnswers(questions.length));
  function getResult() {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      let q = questions[i];
      if (String(q.answer) === String(answers[i])) {
        score++;
      }
    }
    return score;
  }
  return (
    <Box>
      <Button
        color="success"
        startDecorator={<Zap size={"20"} />}
        onClick={() => {
          setOpen(true);
          answers.fill(-1);
        }}
      >
        {result.score ? "Retake the Quiz" : "Take the Quiz"}
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{ minWidth: 500 }}
        >
          <h2 style={{ padding: 2 }}>Answer Questions Correctly</h2>
          <List sx={{ overflow: "scroll" }}>
            {questions.map((q, i) => {
              return (
                <Question key={i} question={q} setAnswer={setAnswer} idx={i} />
              );
            })}
          </List>
          <Button
            onClick={() => {
              let score = getResult();
              setResult({ score });
              setShowResult(true);
              console.log("setted");
              setOpen(false);
            }}
          >
            Get Result
          </Button>
        </ModalDialog>
      </Modal>
    </Box>
  );
}
