import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PlayLessonIcon from "@mui/icons-material/PlayLesson";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import ArticleIcon from "@mui/icons-material/Article";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
export default function Lesson({
  lesson,
  onLessonClick,
  onLessonChange,
  currentExpanded,
  activeLesson,
}) {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(false);
  useEffect(() => {
    if (currentExpanded != lesson.id) setOpen(false);
  }, [lesson.id, currentExpanded]);

  useEffect(() => {
    if (lesson.id === activeLesson) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [activeLesson, lesson.id]);
  const handleClick = (e) => {
    onLessonClick(lesson.id);
    setOpen(!open);
  };
  const handleLessonChange = (e) => {
    onLessonChange(lesson.id);
  };

  function getRightIcon(type) {
    if (type == "video") return <PlayLessonIcon color="primary" />;
    if (type == "text") return <ArticleIcon color="primary" />;
    if (type == "download") return <SimCardDownloadIcon color="primary" />;
    if (type == "assignment") return <AssignmentLateIcon color="primary" />;
  }
  return (
    <div
      role="presentation"
      style={{
        backgroundColor: active ? "#2b5fae4d" : "",
        opacity: lesson.completed ? 0.5 : 1,
      }}
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{getRightIcon(lesson.type)}</ListItemIcon>
        <ListItemText primary={"Lesson - " + lesson.id} />
        {lesson.completed && <CheckCircleIcon color="success" />}
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={handleLessonChange}>
            <ListItemIcon>{getRightIcon(lesson.type)}</ListItemIcon>
            <ListItemText primary={lesson.title} />
          </ListItemButton>
          <ListItemText sx={{ ml: 4 }}>
            <Grid container>
              <Grid item sm={2}>
                <ListItemIcon>
                  <QueryBuilderIcon />
                </ListItemIcon>
              </Grid>
              <Grid item sm={8}>
                {" "}
                <Typography color={"text.secondary"} variant="body2">
                  Estimated Time Required :
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  color={"text.secondary"}
                  component="span"
                  variant="body2"
                >
                  {lesson.duration}m
                </Typography>
              </Grid>
            </Grid>
          </ListItemText>
        </List>
      </Collapse>
    </div>
  );
}
