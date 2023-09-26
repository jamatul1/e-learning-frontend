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
export default function ModuleForm({ setOpen }) {
  let { id } = useParams();
  let { user } = useAuth();
  let [addModule, { error, isLoading }] = useAddModuleMutation();
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
      let module = {};
      module.instructor = user._id;
      module.course = id;
      module.title = values.title;
      module.description = values.description;
      let data = { params: { id }, body: module };
      try {
        await addModule(data);

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
          Give the title of the module
        </FormHelperText>
        <Input type="text" {...formik.getFieldProps("title")} />
      </FormControl>
      {formik.touched.title && formik.errors.title ? (
        <Alert color="danger">{formik.errors.title}</Alert>
      ) : null}
      <FormControl>
        <FormLabel>Description</FormLabel>
        <FormHelperText sx={{ my: 1 }}>
          Provide description of the module
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
      {error && <Alert color="danger">{error.data.message}</Alert>}
      <Button loading={isLoading} type="submit" sx={{ mt: 2 }} fullWidth>
        Add module
      </Button>
      {/* {error && (
        <Alert color="danger">
          {error && error.data && error.data.message} */}
      {/* </Alert> */}
      {/* )} */}
    </form>
  );
}
