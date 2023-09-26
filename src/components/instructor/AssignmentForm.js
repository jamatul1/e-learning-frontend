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
import { useAddAssignmentMutation } from "../../redux/services/courses/assignments";
import { useParams } from "react-router-dom";
export default function AssignmentForm({ setOpen }) {
  let { id, moduleId } = useParams();
  let [addAssignment, { error, isLoading }] = useAddAssignmentMutation();
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
      let assignment = {};
      assignment.course = id;
      assignment.module = moduleId;
      assignment.title = values.title;
      assignment.description = values.description;

      try {
        let data = { params: { id, moduleId }, body: assignment };
        await addAssignment(data);
        setOpen(false);
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <FormHelperText sx={{ my: 1 }}>
          Give the title of the assignment
        </FormHelperText>
        <Input type="text" {...formik.getFieldProps("title")} />
      </FormControl>
      {formik.touched.title && formik.errors.title ? (
        <Alert color="danger">{formik.errors.title}</Alert>
      ) : null}
      <FormControl>
        <FormLabel>Description</FormLabel>
        <FormHelperText sx={{ my: 1 }}>
          Provide description of the assignment
        </FormHelperText>
        <Textarea {...formik.getFieldProps("description")} />
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
      {error && <Alert color="danger">{error?.data?.message}</Alert>}
      <Button sx={{ mt: 2 }} loading={isLoading} type="submit" fullWidth>
        Add Assignment
      </Button>
    </form>
  );
}
