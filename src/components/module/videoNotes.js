import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import CardContent from "@mui/material/CardContent";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";

export default function VideoNote({ note }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <BookmarkRemoveIcon />
          </IconButton>
        }
        title={note.title}
        subheader="September 14, 2016"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {note.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
