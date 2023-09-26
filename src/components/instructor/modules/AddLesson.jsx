import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import { Plus } from "react-feather";
import ModuleForm from "./ModuleForm";
import LessonForm from "../LessonForm";

export default function AddLesson() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="neutral"
        startDecorator={<Plus />}
        onClick={() => setOpen(true)}
      >
        New Lesson
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{ minWidth: 400 }}
        >
          <Typography id="basic-modal-dialog-title" level="h2">
            Create a new Lesson
          </Typography>
          <Typography id="basic-modal-dialog-description">
            Fill in the information of the Lessons.
          </Typography>
          {/* <form
            onSubmit={(event) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input autoFocus required />
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input required />
              </FormControl>
              <Button type="submit">Submit</Button>
            </Stack>
            
          </form> */}
          <LessonForm setOpen={setOpen} />
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
