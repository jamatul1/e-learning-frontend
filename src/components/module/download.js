import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import Link from "next/link";
import UserFeedback from "./userFeedback";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function DownloadFile({
  lesson,
  handleNextLesson,
  handleLessonCompleted,
}) {
  return (
    <Card elevation={0} sx={{ minWidth: 275, p: 3 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Powerpoint document
        </Typography>
        <Typography variant="h5" component="div">
          Your guide on Javascript Arrays
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          22m estimated read
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" endIcon={<DownloadForOfflineIcon />}>
          <Link href={lesson.url}>Download File</Link>
        </Button>
      </CardActions>
      <UserFeedback
        lessonId={lesson.id}
        completed={lesson.completed}
        handleLessonCompleted={handleLessonCompleted}
        handleNextLesson={handleNextLesson}
      />
    </Card>
  );
}
