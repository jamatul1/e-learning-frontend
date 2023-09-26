import React from "react";
import { useGetModuleStatusQuery } from "../../redux/services/progress/module";
import { useParams } from "react-router-dom";
import { Button, Sheet } from "@mui/joy";
import ModuleExplorer from "../../components/moduleExplorer";
import { shuffle } from "../../utils/helperFunctions";

export default function StudentModuleExplorerPage() {
  let { moduleId } = useParams();
  let { data } = useGetModuleStatusQuery(moduleId);
  return (
    <Sheet>
      <ModuleExplorer items={shuffle(normalizedStatus(data?.moduleStatus))} />
    </Sheet>
  );
}

// ading type and status
function normalizedStatus(moduleStatus) {
  let status = {};

  if (!moduleStatus) return [];
  for (let i of moduleStatus.assignmentStatus) {
    status[i.assignment] = i;
  }
  for (let i of moduleStatus.quizStatus) {
    status[i.quiz] = i;
  }
  for (let i of moduleStatus.lessonsStatus) {
    status[i.lesson] = i;
  }
  let normalized = [];
  for (let i of moduleStatus.module.assignments) {
    let d = { ...i };
    d.status = status[i._id];
    d.type = "assignment";
    normalized.push(d);
  }
  for (let i of moduleStatus.module.quizzes) {
    let d = { ...i };
    d.status = status[i._id];
    d.type = "quiz";
    normalized.push(d);
  }
  for (let i of moduleStatus.module.lessons) {
    let d = { ...i };
    d.status = status[i._id];
    normalized.push(d);
  }
  return normalized;
}
