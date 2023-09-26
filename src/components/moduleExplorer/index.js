import { Grid, Sheet } from "@mui/joy";
import ModuleSidebar from "./sidebar";
import { useState } from "react";
import AssignmentPlayer from "./assignmentPlayer";
import QuizForm from "../instructor/modules/QuizForm";
import LessonPlayer from "./lessonPlayer";
import QuizPlayer from "./quizPlayer";

export default function ModuleExplorer({ items = [], student = true }) {
  let [selected, setSelected] = useState(0);
  return (
    <Sheet sx={{ minHeight: "80vh" }}>
      <Grid container>
        <Grid xs={5}>
          <ModuleSidebar
            items={items}
            selected={selected}
            setSelected={setSelected}
          />
        </Grid>
        <Grid xs={7}>
          {items.length && getPlayer(items[selected], student)}
        </Grid>
        {/* <Grid xs={0}>{student && <p>Status</p>}</Grid> */}
      </Grid>
    </Sheet>
  );
}

function getPlayer(item, student) {
  if (item.type === "pdf" || item.type === "video")
    return <LessonPlayer student={student} item={item}></LessonPlayer>;
  if (item.type === "assignment")
    return <AssignmentPlayer student={student} item={item} />;
  if (item.type === "quiz") return <QuizPlayer student={student} item={item} />;
}
