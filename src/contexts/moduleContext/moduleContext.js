import React, { createContext, useContext, useReducer } from "react";
import { moduleReducer } from "./moduleReducer";

const ModuleContext = createContext();
const initialState = {
  isLoading: true,
  module: {
    lessons: [],
  },

  currentLesson: null,
};

export const ModuleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(moduleReducer, initialState);

  return (
    <ModuleContext.Provider
      value={{
        isLoading: state.isLoading,
        lessons: state.module.lessons,
        currentLesson: state.currentLesson,
        dispatch: dispatch,
      }}
    >
      {children}
    </ModuleContext.Provider>
  );
};

export const useModuleContext = () => useContext(ModuleContext);
