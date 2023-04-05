import * as React from "react";
import CustomizedAccordion from "./customizedAccordion";

export default function CustomizedAccordions({
  data,
  handleStart = () => {},
  readable = false,
}) {
  return (
    <div>
      {data &&
        data.map((d, i) => (
          <CustomizedAccordion
            key={i}
            disable={i === 0 ? false : true}
            readable={readable}
            id={d.id}
            title={d.title}
            description={d.description}
            handleStart={handleStart}
            info={createInfo(d.lessons)}
          />
        ))}
    </div>
  );
}

function createInfo(lessons) {
  let info = {
    video: 0,
    text: 0,
    assignment: 0,
    file: 0,
    totalDuration: 0,
  };
  lessons.forEach((lesson) => {
    info[lesson.type] += 1;
    info.totalDuration += lesson.duration;
  });
  return info;
}
