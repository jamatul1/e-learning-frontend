import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import { Eye, Plus } from "react-feather";
import QuizForm from "./QuizForm";
import { ModalClose } from "@mui/joy";
import ModuleExplorer from "../../moduleExplorer";

export default function ModulePreview({ items }) {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="neutral"
        startDecorator={<Eye />}
        onClick={() => setOpen(true)}
      >
        Preview
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          layout="fullscreen"
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{}}
        >
          {" "}
          <ModalClose />
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
          <Typography
            color="primary"
            textAlign={"center"}
            sx={{ mb: 2 }}
            level="h3"
          >
            Preview
          </Typography>
          <ModuleExplorer student={false} items={items} />
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
