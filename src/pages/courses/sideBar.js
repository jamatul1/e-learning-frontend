import {
  Button,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import BoltIcon from "@mui/icons-material/Bolt";
import { BoltRounded } from "@mui/icons-material";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import MicNoneIcon from "@mui/icons-material/MicNone";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LaptopMacOutlinedIcon from "@mui/icons-material/LaptopMacOutlined";
import { useRouter } from "next/router";
export default function SideBar({ authors }) {
  const router = useRouter();
  return (
    <Box
      sx={{
        zIndex: 1000,
        p: 5,
        border: "1px solid #eeeeee",
        borderRadius: "10px",
      }}
    >
      <Item icon={<MicNoneIcon color="primary" />} label={"English"} />

      <Item
        icon={<SchoolOutlinedIcon color="primary" />}
        label={"Beginner & Intermediate"}
      />
      <Item
        icon={<LaptopMacOutlinedIcon color="primary" />}
        label={"Access from anywhere"}
      />
      <Item icon={<BoltRounded color="primary" />} label="Full time access" />
      <Item
        icon={<CardGiftcardIcon color="primary" />}
        label="Certification on completetion"
      />
      <Typography fontWeight={700} color="primary" variant="h5">
        $129
      </Typography>
      <Button
        disableElevation
        fullWidth
        sx={{ fontSize: "12px", py: 1.5, my: 2 }}
        variant="contained"
        onClick={() => router.push("/course")}
      >
        Enroll Today
      </Button>
      <Typography color={(t) => t.palette.g} variant="body2">
        30 Days Money Back Guerrenty !
      </Typography>
    </Box>
  );
}

function Item({ icon, label }) {
  return (
    <Box sx={{ display: "flex", gap: 1, marginBottom: 3 }}>
      {icon}
      <Typography variant="body2">{label}</Typography>
    </Box>
  );
}
