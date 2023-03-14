import * as React from "react";
import CustomizedAccordion from "./customizedAccordion";

export default function CustomizedAccordions({ data, handleStart }) {
  return (
    <div>
      {data &&
        data.map((d, i) => (
          <CustomizedAccordion
            key={i}
            id={d.id}
            title={d.title}
            description={d.description}
            handleStart={handleStart}
          />
        ))}
    </div>
  );
}
