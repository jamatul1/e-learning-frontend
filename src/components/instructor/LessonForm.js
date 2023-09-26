import {
  Alert,
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Option,
  Select,
} from "@mui/joy";
import { Form, useFormik } from "formik";
import { useState } from "react";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import {
  useUplaodVideosMutation,
  useUploadPdfsMutation,
} from "../../redux/services/uploadApi";
import { useAddLessonMutation } from "../../redux/services/courses/lessons";
export default function LessonForm({ setOpen }) {
  let { id, moduleId } = useParams();
  let [type, setType] = useState("video");
  let [file, setFile] = useState(null);
  let [uploadPdf, { error: pdfError, isLoading: pdfLoading }] =
    useUploadPdfsMutation();
  let [uploadVideo, { error: videoError, isLoading: videoLoading }] =
    useUplaodVideosMutation();

  let [addLesson, { error, isLoading }] = useAddLessonMutation();
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  let formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      duration: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      duration: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      let lesson = {};
      lesson.title = values.title;
      lesson.description = values.description;
      lesson.type = type;
      lesson.duration = values.duration;

      let newFormData = new FormData();
      newFormData.append("file", file);
      newFormData.append("path", "courses");
      try {
        let data;
        if (type === "pdf") data = await uploadPdf(newFormData).unwrap();
        else data = await uploadVideo(newFormData).unwrap();
        lesson.url = data[0].url;
        data = { params: { id, moduleId }, body: lesson };
        await addLesson(data);
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
          Give the title of the Lesson
        </FormHelperText>
        <Input type="text" {...formik.getFieldProps("title")} />
      </FormControl>
      {formik.touched.title && formik.errors.title ? (
        <Alert color="danger">{formik.errors.title}</Alert>
      ) : null}
      <FormControl>
        <FormLabel>Description</FormLabel>
        <FormHelperText sx={{ my: 1 }}>
          Provide description of the Lesson
        </FormHelperText>
        <Input type="text" {...formik.getFieldProps("description")} />
      </FormControl>
      <FormControl>
        <FormLabel>Duration</FormLabel>
        <FormHelperText sx={{ my: 1 }}>
          Provide Duration of the Lesson
        </FormHelperText>
        <Input type="number" {...formik.getFieldProps("duration")} />
      </FormControl>
      {formik.touched.duration && formik.errors.duration ? (
        <Alert color="danger">{formik.errors.duration}</Alert>
      ) : null}
      <FormControl>
        <FormLabel>Select the Type of Lesson</FormLabel>
        <Select
          placeholder="Select the type"
          name="type"
          onChange={(e, val) => setType(val)}
          defaultValue={"video"}
          required
          sx={{ minWidth: 200 }}
        >
          <Option value="video">Video</Option>
          <Option value="pdf">Pdf</Option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Select the file of the Lesson</FormLabel>
        <FormHelperText sx={{ my: 1 }}>
          Your file must be a pdf or mp4 video!
        </FormHelperText>
        <Input type="file" onChange={handleFileChange} />
      </FormControl>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      ></Box>
      {error && <Alert color="danger">{error?.data?.message}</Alert>}
      {pdfError && <Alert color="danger">{pdfError?.data?.message}</Alert>}
      {videoError && <Alert color="danger">{videoError?.data?.message}</Alert>}
      <Button
        sx={{ mt: 2 }}
        loading={isLoading || pdfLoading || videoLoading}
        type="submit"
        fullWidth
      >
        Add Lesson
      </Button>
      {/* {error && (
        <Alert color="danger">
          {error && error.data && error.data.message} */}
      {/* </Alert> */}
      {/* )} */}
    </form>
  );
}
