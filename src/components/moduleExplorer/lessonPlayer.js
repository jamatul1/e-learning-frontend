import { Box, Button, Typography } from "@mui/joy";
import React from "react";
import { File } from "react-feather";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

export default function LessonPlayer({ item, student = true }) {
  return (
    <Box sx={{ p: 5 }}>
      {item.type === "video" && (
        <ReactPlayer
          width={"100%"}
          style={{ borderRadius: 250, marginBottom: 20 }}
          url={item.url}
          controls
        />
      )}
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
          <Typography fontSize={16}>{item.duration} minutes Read</Typography>
        </Box>
        {student && <Button variant="outlined">Mark As Completed</Button>}
      </Box>

      <Typography lavel="body" sx={{ my: 5 }}>
        {item.description}
      </Typography>
      {item.type === "pdf" && (
        <Link to={item.url}>
          <Button startDecorator={<File />}>Download</Button>
        </Link>
      )}
    </Box>
  );
}
