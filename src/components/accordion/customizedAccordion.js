import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import ModuleProgress from "../progress/moduleProgress";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import DescriptionIcon from "@mui/icons-material/Description";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.border}`,
  borderRadius: 5,
  marginBottom: 10,
  "&:not(:last-child)": {},
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .00)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordion({
  id,
  title,
  description,
  handleStart = () => {},
  info,
  disable,
  readable,
}) {
  const [expanded, setExpanded] = React.useState("");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Accordion expanded={expanded === title} onChange={handleChange(title)}>
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            fontSize={16}
            fontWeight={400}
            color={(t) => t.palette.g}
            variant="h6"
          >
            {title}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <InfoItem
              icon={<DescriptionIcon fontSize="14px" />}
              label={
                "Lessons :" +
                String(
                  Number(info.text) + Number(info.video) + Number(info.file)
                )
              }
            />

            <InfoItem
              icon={<AssignmentLateIcon fontSize="14px" />}
              label={"Assignments :" + info.assignment}
            />
            <InfoItem
              icon={<WatchLaterIcon color="red" fontSize="14px" />}
              label={"Duration : " + info.totalDuration + "m"}
            />
            {!disable && !readable && (
              <Box sx={{ ml: 5 }}>
                <ModuleProgress />
              </Box>
            )}
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{description}</Typography>
        {!readable && (
          <Button
            variant="outlined"
            sx={{ mt: 2 }}
            onClick={() => handleStart(id)}
          >
            Start Now
          </Button>
        )}
      </AccordionDetails>
    </Accordion>
  );
}

function InfoItem({ icon, label }) {
  return (
    <Box
      sx={{
        color: "gray",
        display: "flex",

        // flexDirection: "column",
        alignItems: "center",
        gap: 1,
      }}
    >
      {icon}
      <Typography
        letterSpacing={0.5}
        fontSize={14}
        fontWeight={400}
        color={"#a0a0a0"}
      >
        {label}
      </Typography>
    </Box>
  );
}
