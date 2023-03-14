import { courses } from "@/data/courses";
import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect, useState } from "react";

const CourseContext = createContext();
const initialState = {
  isLoading: true,
  course: {},
  setCourse: undefined,
};

export const CourseProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  let router = useRouter();
  useEffect(() => {
    let newState = { ...state };
    newState.course = courses[0];
    newState.isLoading = false;
    setState(newState);
  }, []);

  const handleModuleStart = (id) => {
    router.push(`/course/modules/${id}`);
  };

  return (
    <CourseContext.Provider
      value={{
        isLoading: state.isLoading,
        course: state.course,
        handleModuleStart,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourseContext = () => useContext(CourseContext);
