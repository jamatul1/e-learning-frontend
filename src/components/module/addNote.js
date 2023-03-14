import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddCardIcon from "@mui/icons-material/AddCard";
import { useInput } from "@/hooks/useInput";
import { useModuleContext } from "@/contexts/moduleContext/moduleContext";
import { NOTE_NEW } from "@/contexts/moduleContext/moduleActions";

export default function AddNote({ lessionId, handleNewNote }) {
  const [open, setOpen] = React.useState(false);
  const titleInput = useInput("");
  const descriptionInput = useInput("");
  const { dispatch } = useModuleContext();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAdd = () => {
    setOpen(false);
    if (titleInput.value === "" || descriptionInput.value === "") return;
    dispatch({
      type: NOTE_NEW,
      payload: {
        id: lessionId,
        note: {
          title: titleInput.value,
          description: descriptionInput.value,
        },
      },
    });
    // handleNewNote(lessionId, {
    //   title: titleInput.value,
    //   description: descriptionInput.value,
    // });

    titleInput.reset();
    descriptionInput.reset();
  };

  return (
    <div>
      <Button startIcon={<AddCardIcon />} onClick={handleClickOpen}>
        Add Note
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Note</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Note title : "
            type="text"
            fullWidth
            variant="standard"
            {...titleInput}
          />
          <TextField
            autoFocus
            margin="dense"
            id="note"
            label="Your note : "
            type="text"
            fullWidth
            variant="filled"
            {...descriptionInput}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
