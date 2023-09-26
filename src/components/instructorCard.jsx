import { Avatar, Box, Typography } from "@mui/joy";
import React from "react";

export default function InstrcutorCard({
  name = "Jon Doe",
  imgUrl = "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  occupation = "Software Engineer At Microsoft",
  description = "I am a software engieer. I have a passion for teaching peoples.",
}) {
  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 3,
        cursor: "pointer",
      }}
    >
      <Avatar sx={{ height: "120px", width: "120px", mb: 1 }} src={imgUrl} />
      <Typography level="h6">{name}</Typography>
      <Typography sx={{ mb: 2 }}>{occupation}</Typography>

      <Typography>
        <q>{description}</q>
      </Typography>
    </Box>
  );
}
