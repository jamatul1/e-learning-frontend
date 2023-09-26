import { Alert, Box, Button, Input, Typography } from "@mui/joy";
import React, { useState } from "react";
import { File, Info, Type, Zap } from "react-feather";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { useSubmitAssignmentMutation } from "../../redux/services/users/action";
import { useUploadPdfsMutation } from "../../redux/services/uploadApi";
import { useAuth } from "../../hooks/useAuth";
import { useUpdateAssignmentPMutation } from "../../redux/services/progress/module";

export default function AssignmentPlayer({ item, student = true }) {
  let { moduleId } = useParams();
  let { user } = useAuth();
  console.log(item);
  let [status, setStatus] = useState("");
  const [file, setFile] = useState(null);
  const [submit, { error, isLoading: loading }] = useSubmitAssignmentMutation();
  const [updateStatus] = useUpdateAssignmentPMutation();
  const [uploadPdf, { error: err, isLoading }] = useUploadPdfsMutation();
  function handleFile(e) {
    setFile(e.target.files[0]);
  }
  async function handleSubmission() {
    let formdata = new FormData();
    formdata.append("path", user.name + "/assignments/");
    formdata.append("file", file);
    try {
      let upload = await uploadPdf(formdata).unwrap();
      let body = {};
      body.fileUrl = upload[0].url;
      body.progress = {};
      body.progress.mId = moduleId;
      body.progress.assignmentId = item.status._id;
      let res = await submit({ id: item._id, body });
      let progress = {};
      progress.params = { mId: moduleId, assignmentId: item.status._id };
      progress.body = {
        fileUrl: body.fileUrl,
        status: {
          currentStatus: "Your assignment is submitted",
          comment: "Waiting for your instructor feedback!",
        },
      };
      let st = await updateStatus(progress);
      if (st) setStatus("Assignment is submitted successfully!");
    } catch (error) {}
  }
  return (
    <Box sx={{ p: 5 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {" "}
        <Box>
          <Typography fontWeight={500} level="h2">
            {item.title}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ width: "90%" }}>
        <Typography width={"100%"} lavel="body" sx={{ my: 2 }}>
          {item.description}
        </Typography>
      </Box>

      {student && (
        <>
          <Alert
            variant="soft"
            color="success"
            startDecorator={<Zap />}
            sx={{ mb: 2 }}
          >
            {item.status?.status.currentStatus}
          </Alert>
          <Alert variant="soft" startDecorator={<Info />} sx={{ mb: 2 }}>
            {item.status?.status.comment}
          </Alert>
        </>
      )}
      <form>
        <Input onChange={handleFile} type="file" accept="application/pdf">
          Upload Assignment
        </Input>
        {file && (
          <Typography variant="body1">{file.name} is selected</Typography>
        )}
        {!status && (
          <Button loading={isLoading} sx={{ mt: 2 }} onClick={handleSubmission}>
            Submit
          </Button>
        )}
        {status && (
          <Alert sx={{ mt: 2 }} startDecorator={<Info />}>
            {status}
          </Alert>
        )}
      </form>
    </Box>
  );
}
