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
import { Minus, Plus, PlusCircle, X } from "react-feather";

export default function AddQuestion({ setQuestions }) {
  const [open, setOpen] = useState(false);
  let [question, setQuestion] = useState("");
  let [options, setOptions] = useState([]);
  let [answer, setAnswer] = useState(-1);
  let [error, setError] = useState(null);
  function addOption() {
    setOptions([...options, ""]);
  }
  function onChangeOption(idx, val) {
    let newOptions = [...options];
    newOptions[idx] = val;
    setOptions(newOptions);
  }

  function AddQuestion() {
    if (question === "") {
      setError({ message: "Question is not given !" });
      return;
    }
    if (options.length < 2 || options.some((opt) => opt === "")) {
      setError({ message: "Options are not valid !" });
      return;
    }
    if (answer === -1) {
      setError({ message: "Answer is not given !" });
      return;
    }
    let finalQuestion = { question, options, answer };
    setQuestions((questions) => {
      return [...questions, finalQuestion];
    });
    setOpen(false);
    setAnswer(-1);
    setOptions([]);
    setQuestion("");
  }
  return (
    <Box>
      <Button
        variant="outlined"
        color="neutral"
        startDecorator={<Plus />}
        onClick={() => setOpen(true)}
      >
        Add a question
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{ minWidth: 500 }}
        >
          <List sx={{ overflow: "scroll" }}>
            <Typography id="basic-modal-dialog-title" level="h2">
              Create a new Question
            </Typography>
            <Typography id="basic-modal-dialog-description">
              Fill in the information of the Question.
            </Typography>
            <FormControl>
              <FormLabel>Question Name: </FormLabel>
              <FormHelperText sx={{ my: 1 }}>
                What is the question ?
              </FormHelperText>
              <Input
                type="text"
                value={question}
                onChange={(e) => {
                  setQuestion(e.target.value);
                }}
              />
            </FormControl>
            <Box sx={{ position: "fixed", top: 20, right: 20, zIndex: 10000 }}>
              <Button onClick={addOption} startDecorator={<Plus />}>
                Add Option
              </Button>
            </Box>
            <Box>
              {options.map((opt, idx) => (
                <FormControl key={idx}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <FormLabel>Option {idx + 1}</FormLabel>
                    <IconButton
                      onClick={() => {
                        setOptions(options.filter((o, i) => i !== idx));
                      }}
                    >
                      <X />
                    </IconButton>
                  </Box>
                  <FormHelperText sx={{ my: 0.2 }}>
                    What will be option {idx + 1}?
                  </FormHelperText>
                  <Input
                    value={opt}
                    onChange={(e) => {
                      onChangeOption(idx, e.target.value);
                    }}
                    type="text"
                  />
                </FormControl>
              ))}
            </Box>
            <FormControl>
              <FormLabel>Select the result</FormLabel>
              <FormHelperText>Select which is the answer</FormHelperText>
              <Select onChange={(e, val) => setAnswer(val)}>
                {options.map((opt, i) => {
                  return (
                    <Option key={i} value={i}>
                      {i + 1}. {opt}
                    </Option>
                  );
                })}
              </Select>
            </FormControl>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            ></Box>
            <Button
              sx={{ mt: 2 }}
              variant="outlined"
              onClick={AddQuestion}
              fullWidth
            >
              <PlusCircle></PlusCircle>Add Question
            </Button>
            {error && <Alert color="danger">{error && error.message}</Alert>}
          </List>
        </ModalDialog>
      </Modal>
    </Box>
  );
}
