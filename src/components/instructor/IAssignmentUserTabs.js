import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import Typography from "@mui/joy/Typography";
import { Avatar, Box, Button, Divider, Modal, Table, Textarea } from "@mui/joy";
import { useParams } from "react-router-dom";
import { useSingleAssignmentQuery } from "../../redux/services/courses/assignments";
import { Link } from "react-feather";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";

import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";
import { useAcceptAssignmentMutation } from "../../redux/services/users/action";
import { useUpdateAssignmentPMutation } from "../../redux/services/progress/module";
import { useGetAssignmentNewQuery } from "../../redux/services/users/instructor";

export function RejectDialoge() {
  const [open, setOpen] = React.useState(false);
  const [feedback, setFeedback] = React.useState("");

  function handleSubmitFeedback() {
    console.log("feedback", feedback);
    setOpen(false);
  }
  return (
    <React.Fragment>
      <Button variant="outlined" color="danger" onClick={() => setOpen(true)}>
        Reject
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{ maxWidth: 500 }}
        >
          <Typography id="basic-modal-dialog-description">
            Give Feedback For Rejection
          </Typography>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <Textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                >
                  Please Provide Your Feedback
                </Textarea>
              </FormControl>
              <Button type="submit" onClick={handleSubmitFeedback}>
                Submit
              </Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
export default function IAssignmentUserTabs() {
  const [updateStatus] = useUpdateAssignmentPMutation();
  let { id, assignmentId } = useParams();
  let { data: aData } = useGetAssignmentNewQuery(assignmentId);
  let moduleId = aData?.data?.module;
  // console.log("moduleid", moduleId);
  // let { data, error, setLoading } = useSingleAssignmentQuery({
  //   id,
  //   assignmentId,
  // });
  let assignment = aData?.data;
  console.log(assignment);
  let [acceptAssignment] = useAcceptAssignmentMutation();
  async function handleAccept(id) {
    try {
      await acceptAssignment({ id, body: {} });

      let progress = {};
      progress.params = { mId: moduleId, assignmentId: id };
      progress.body = {
        status: {
          currentStatus: "Your assignment is submitted",
          comment: "Waiting for your instructor feedback!",
        },
      };
      console.log(progress);
      // await updateStatus(progress);

      alert("Assginment is accepcted");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Tabs
      aria-label="Pricing plan"
      defaultValue={0}
      sx={{
        minWidth: 400,
        minHeight: "80vh",
        overflow: "auto",
        border: "1px solid #e6e6e6",
      }}
    >
      <Box sx={{ my: 2 }}>
        <Typography textAlign="center" level="h5">
          Assignment Name: {assignment?.title}
        </Typography>
      </Box>
      <Divider />
      <TabList
        disableUnderline
        tabFlex={1}
        sx={{
          [`& .${tabClasses.root}`]: {
            fontSize: "sm",
            fontWeight: "lg",
            [`&[aria-selected="true"]`]: {
              color: "primary.500",
              bgcolor: "background.surface",
            },
            [`&.${tabClasses.focusVisible}`]: {
              outlineOffset: "-4px",
            },
          },
        }}
      >
        <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
          New Submissions
        </Tab>
        <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
          Accepted
        </Tab>
      </TabList>
      <TabPanel value={0}>
        <Table
          sx={{
            "--TableCell-paddingX": "1rem",
            "--TableCell-paddingY": "1rem",
            border: "1px solid #e6e6e6",
          }}
        >
          <thead>
            <tr>
              <th>Submitted By</th>
              <th>Sumitted File</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {assignment?.submitted.map((a, i) => {
              return (
                <tr key={i}>
                  <td>
                    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                      <Avatar />
                      <Typography
                        level="body-sm"
                        sx={{ alignItems: "flex-start" }}
                      >
                        {a.user.name}
                      </Typography>
                    </Box>
                  </td>

                  <td>
                    <a
                      style={{ textDecoration: "none", font: "inherit" }}
                      href={a.fileUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button variant="outlined">View File </Button>
                    </a>
                  </td>
                  <td>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <Button
                        onClick={() => {
                          handleAccept(a.assignment);
                        }}
                        variant="outlined"
                        color="success"
                      >
                        Accept
                      </Button>
                      <RejectDialoge />
                    </Box>
                  </td>
                </tr>
              );
            })}
            {assignment?.submitted.length === 0 && (
              <tr>
                <td>There is no new submissions</td>
              </tr>
            )}
          </tbody>
        </Table>
      </TabPanel>
      <TabPanel value={1}>
        <Table
          sx={{
            "--TableCell-paddingX": "1rem",
            "--TableCell-paddingY": "1rem",
            border: "1px solid #e6e6e6",
          }}
        >
          <thead>
            <tr>
              <th>Submitted By</th>
              <th>Sumitted File</th>
            </tr>
          </thead>
          <tbody>
            {assignment?.accepted.map((a, i) => {
              return (
                <tr key={i}>
                  <td>
                    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                      <Avatar />
                      <Typography
                        level="body-sm"
                        sx={{ alignItems: "flex-start" }}
                      >
                        {a.user.name}
                      </Typography>
                    </Box>
                  </td>

                  <td>
                    <a
                      style={{ textDecoration: "none", font: "inherit" }}
                      href={a.fileUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button variant="outlined">View File </Button>
                    </a>
                  </td>
                </tr>
              );
            })}
            {assignment?.submitted.length === 0 && (
              <tr>
                <td>There is no accepcted assignments</td>
              </tr>
            )}
          </tbody>
        </Table>
      </TabPanel>
    </Tabs>
  );
}
