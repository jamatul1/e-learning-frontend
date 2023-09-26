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

import { ModalClose } from "@mui/joy";
import ModuleExplorer from "./moduleExplorer";
import { useParams } from "react-router-dom";
import { shuffle } from "../utils/helperFunctions";
import { useSingleModuleQuery } from "../redux/services/courses/modules";

export default function SingleCoursePreview({ moduleId }) {
  let { id } = useParams();
  let { data, error, isLoading } = useSingleModuleQuery({
    id,
    moduleId,
  });
  let module = data?.module;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="neutral"
        startDecorator={<Eye />}
        onClick={() => setOpen(true)}
      >
        Watch Preview
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
            sx={{ mb: 2, mt: 5, width: 200, margin: "auto" }}
            level="h2"
            startDecorator={<Eye size={"42"} />}
          >
            Preview
          </Typography>
          <ModuleExplorer student={false} items={shuffle(normalized(module))} />
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
function normalized(module) {
  if (!module) return [];
  let normalized = [];
  for (let i of module.lessons) {
    if (i.type === "video") {
      normalized.push(i);
    }
  }
  return normalized;
}
