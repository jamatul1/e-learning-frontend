import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";

import Typography from "@mui/joy/Typography";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Alert, Option, Select } from "@mui/joy";
import { useState } from "react";
import { useUploadImagesMutation } from "../../redux/services/uploadApi";
import { useAddCourseMutation } from "../../redux/services/courses/courses";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { catagories } from "../../utils/catagories";
export default function MyProfile() {
  let { user } = useAuth();
  const [imgFile, setImgFile] = useState(null);
  const [catagory, setCatagory] = useState(catagories[0].toLowerCase(""));
  const [coverImgFile, setCoverImgFile] = useState(null);
  const [uploadImage, { error: uploadingError, isLoading: uploading }] =
    useUploadImagesMutation();
  const [addCourse, { isLoading: adding, error: addingError }] =
    useAddCourseMutation();
  const navigateTo = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      shortDesc: "",
      language: "",
      price: 0,
      difficulty: "",
      duration: 0,
      assignment: "",
      prerequisties: "",
      materials: "",
      description: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required()
        .min(6, "Course title should be minimum 6.")
        .max(64, "You name should have maximum 64 letters"),
      description: Yup.string()
        .required("Required")
        .min(16, "Course description should be minimum 16."),
      shortDesc: Yup.string().required("Required"),
      difficulty: Yup.string().required("Required"),
      duration: Yup.string().required("Required"),
      price: Yup.number().required("Required"),
      language: Yup.string().required("No langauage provided."),
      assignment: Yup.string()
        .required("Required")
        .min(16, "Course assignment description should be minimum 16."),
      prerequisties: Yup.string()
        .required("Required")
        .min(16, "Course prerequisties should be minimum 16."),
      materials: Yup.string()
        .required("Required")
        .min(16, "Course materials description should be minimum 16."),
    }),
    onSubmit: async (values) => {
      let images = new FormData();
      images.append("path", "CourseImages");
      images.append("image", imgFile);
      images.append("coverImage", coverImgFile);
      try {
        let res = await uploadImage(images).unwrap();
        let body = { ...values };
        body.image = res.image.url;
        body.coverImage = res.coverImage.url;
        body.instructor = user._id;
        body.catagory = catagory;
        let { data } = await addCourse(body).unwrap();
        if (data) navigateTo("/instructor/course/" + data._id + "/dashboard");
      } catch (error) {
        console.log(error);
      }
    },
  });

  function handleImgChange(e) {
    const file = e.target.files[0];
    setImgFile(file);
  }
  function handleCoverImgChange(e) {
    const file = e.target.files[0];
    setCoverImgFile(file);
  }
  return (
    <Box
      sx={{
        flex: 1,
        maxWidth: 800,
        width: "100%",
        mx: "auto",
        gap: 1,
        py: 5,
      }}
    >
      <Typography
        level="h2"
        fontWeight={500}
        sx={{ mb: 1, textAlign: "center" }}
      >
        Add a course 🎉
      </Typography>
      <Typography textAlign={"center"}>
        Let change the world by spreading knowledge
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            pt: 3,
            pb: 10,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              placeholder="course title"
              {...formik.getFieldProps("title")}
            />
          </FormControl>
          {formik.touched.title && formik.errors.title ? (
            <Alert color="danger">{formik.errors.title}</Alert>
          ) : null}
          {/* <Divider role="presentation" /> */}
          <div>
            <FormLabel>Short Description</FormLabel>
            <FormHelperText>Write a short description.</FormHelperText>
          </div>
          <div>
            <Textarea
              {...formik.getFieldProps("shortDesc")}
              minRows={4}
              sx={{ mt: 1.5 }}
            />
          </div>
          {formik.touched.shortDesc && formik.errors.shortDesc ? (
            <Alert color="danger">{formik.errors.shortDesc}</Alert>
          ) : null}
          {/* <Divider role="presentation" /> */}
          <div>
            <FormLabel>Brief Description</FormLabel>
            <FormHelperText>Write a Brieif description.</FormHelperText>
          </div>
          <div>
            <Textarea
              {...formik.getFieldProps("description")}
              minRows={4}
              sx={{ mt: 1.5 }}
            />
          </div>
          {formik.touched.description && formik.errors.description ? (
            <Alert color="danger">{formik.errors.description}</Alert>
          ) : null}
          {/* <Divider role="presentation" /> */}
          <FormControl>
            <FormLabel>Price</FormLabel>
            <Input
              type="number"
              placeholder="course price"
              {...formik.getFieldProps("price")}
            />
          </FormControl>
          {formik.touched.price && formik.errors.price ? (
            <Alert color="danger">{formik.errors.price}</Alert>
          ) : null}
          {/* <Divider role="presentation" /> */}
          <FormControl>
            <FormLabel>Language</FormLabel>
            <Input
              placeholder="course langauage"
              {...formik.getFieldProps("language")}
            />
          </FormControl>
          {formik.touched.language && formik.errors.language ? (
            <Alert color="danger">{formik.errors.language}</Alert>
          ) : null}
          {/* <Divider role="presentation" /> */}
          <FormControl>
            <FormLabel>Difficulty</FormLabel>
            <Input
              placeholder="course difficulty"
              {...formik.getFieldProps("difficulty")}
            />
          </FormControl>
          {formik.touched.difficulty && formik.errors.difficulty ? (
            <Alert color="danger">{formik.errors.difficulty}</Alert>
          ) : null}

          {/* <Divider role="presentation" /> */}
          <FormControl>
            <FormLabel>Duration</FormLabel>
            <Input
              placeholder="course duration"
              {...formik.getFieldProps("duration")}
            />
          </FormControl>
          {formik.touched.duration && formik.errors.duration ? (
            <Alert color="danger">{formik.errors.duration}</Alert>
          ) : null}
          {/* <Divider role="presentation" /> */}
          <div>
            <FormLabel>Assignment Description</FormLabel>
            <FormHelperText>
              Write about all the assignments of the course
            </FormHelperText>
          </div>
          <div>
            <Textarea
              {...formik.getFieldProps("assignment")}
              minRows={4}
              sx={{ mt: 1.5 }}
            />
          </div>
          {formik.touched.assignment && formik.errors.assignment ? (
            <Alert color="danger">{formik.errors.assignment}</Alert>
          ) : null}
          {/* <Divider role="presentation" /> */}
          <div>
            <FormLabel>Prerequiestices</FormLabel>
            <FormHelperText>
              Write a Prerequiestices of this course.
            </FormHelperText>
          </div>
          <div>
            <Textarea
              {...formik.getFieldProps("prerequisties")}
              minRows={4}
              sx={{ mt: 1.5 }}
            />
          </div>
          {formik.touched.prerequisties && formik.errors.prerequisties ? (
            <Alert color="danger">{formik.errors.prerequisties}</Alert>
          ) : null}
          {/* <Divider role="presentation" /> */}
          <div>
            <FormLabel>Materials</FormLabel>
            <FormHelperText>
              Write a about all the materials of this course.
            </FormHelperText>
          </div>
          <div>
            <Textarea
              {...formik.getFieldProps("materials")}
              minRows={4}
              sx={{ mt: 1.5 }}
            />
          </div>
          {formik.touched.materials && formik.errors.materials ? (
            <Alert color="danger">{formik.errors.materials}</Alert>
          ) : null}
          {/* <Divider role="presentation" /> */}
          <Box>
            <FormLabel>Upload Image</FormLabel>
            <FormHelperText sx={{ my: 1 }}>
              This image will be used as thumbline for course card.
            </FormHelperText>
            <Input type="file" accept="image/*" onChange={handleImgChange} />
            {imgFile && (
              <img
                width={370}
                src={URL.createObjectURL(imgFile)}
                alt="Uploaded"
              />
            )}
            {/* <Divider role="presentation" /> */}
          </Box>
          <Box>
            <FormLabel>Upload Cover Image:</FormLabel>
            <FormHelperText sx={{ my: 1 }}>
              This image will be used as cover image in course page.
            </FormHelperText>
            <Input
              type="file"
              accept="image/*"
              onChange={handleCoverImgChange}
            />
            {coverImgFile && (
              <img
                width={"100%"}
                src={URL.createObjectURL(coverImgFile)}
                alt="Uploaded"
              />
            )}
            {/* <Divider role="presentation" /> */}
          </Box>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Typography>Select Catagories:</Typography>
            <Select
              defaultValue={catagory}
              onChange={(e, val) => {
                setCatagory(val);
              }}
            >
              {catagories.map((c, i) => {
                return (
                  <Option value={c.toLocaleLowerCase()} key={i}>
                    {c}
                  </Option>
                );
              })}
            </Select>
          </Box>
          <Box
            sx={{
              gridColumn: "1/-1",
              justifySelf: "flex-end",
              display: "flex",
              gap: 1,
            }}
          >
            <Button variant="outlined" color="neutral" size="sm">
              Cancel
            </Button>
            <Button loading={uploading || adding} type="submit" size="sm">
              Add this course
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
}
