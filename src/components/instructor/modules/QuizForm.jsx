import {
  Alert,
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@mui/joy";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { useAddModuleMutation } from "../../../redux/services/courses/modules";
import { useState } from "react";
import { useAddQuizMutation } from "../../../redux/services/courses/quiz";
import AddQuestion from "../AddQuestion";
import Questions from "./Questions";
export default function QuizForm({ setOpen }) {
  let { id, moduleId } = useParams();
  let { user } = useAuth();
  let [questions, setQuestions] = useState([]);
  let [addQuiz, { error, isLoading }] = useAddQuizMutation();
  let formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      console.log(questions);
      let quiz = {};
      quiz.module = moduleId;
      quiz.course = id;
      quiz.title = values.title;
      quiz.description = values.description;
      quiz.questions = questions;
      let data = { params: { id, moduleId }, body: quiz };
      try {
        await addQuiz(data);

        setOpen(false);
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <form style={{ overflow: "scroll" }} onSubmit={formik.handleSubmit}>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <FormHelperText sx={{ my: 1 }}>
          Give the title of the Quiz
        </FormHelperText>
        <Input type="text" {...formik.getFieldProps("title")} />
      </FormControl>
      {formik.touched.title && formik.errors.title ? (
        <Alert color="danger">{formik.errors.title}</Alert>
      ) : null}
      <FormControl>
        <FormLabel>Description</FormLabel>
        <FormHelperText sx={{ my: 1 }}>
          Provide description of the Quiz
        </FormHelperText>
        {/* <Input type="text" {...formik.getFieldProps("description")} /> */}
        <Textarea {...formik.getFieldProps("description")}></Textarea>
      </FormControl>
      {formik.touched.description && formik.errors.description ? (
        <Alert color="danger">{formik.errors.description}</Alert>
      ) : null}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      ></Box>
      <AddQuestion setQuestions={setQuestions} />
      <Questions questions={questions} />
      {error && <Alert color="danger">{error.data.message}</Alert>}
      <Button loading={isLoading} type="submit" sx={{ mt: 2 }} fullWidth>
        Save Quiz
      </Button>
      {/* {error && (
          <Alert color="danger">
            {error && error.data && error.data.message} */}
      {/* </Alert> */}
      {/* )} */}
    </form>
  );
}
