import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import { Box } from "@mui/joy";

export default function ICourseCover({ imgUrl }) {
  return (
    <Box
      sx={{
        height: "24vh",
        width: "90%",
        margin: "auto",
        backgroundColor: "black",
        backgroundImage: "linear-gradient(to right, #141e30, #243b55)",
        borderRadius: 20,
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: 320,
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <img
          height={"100%"}
          width={"100%"}
          style={{
            borderRadius: 15,
            border: "3px solid white",
          }}
          alt="image"
          src={
            imgUrl
              ? imgUrl
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnpuoODOk_MteGTIFJyJW70iq11i8Jlm-LtA&usqp=CAU"
          }
        />
      </Box>
    </Box>
  );
}
