import * as React from "react";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary, {
  accordionSummaryClasses,
} from "@mui/joy/AccordionSummary";
import { Plus } from "react-feather";

export default function CourseModules({ modules = [] }) {
  return (
    <AccordionGroup
      sx={{
        maxWidth: 400,
        [`& .${accordionSummaryClasses.indicator}`]: {
          transition: "0.2s",
        },
        [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]: {
          transform: "rotate(45deg)",
        },
      }}
    >
      {modules.map((m, i) => {
        return (
          <Accordion key={i}>
            <AccordionSummary indicator={<Plus />}>{m.title}</AccordionSummary>
            <AccordionDetails>{m.description}</AccordionDetails>
          </Accordion>
        );
      })}
    </AccordionGroup>
  );
}
