import { createSlice } from "@reduxjs/toolkit";
let initialState = { active: "" };
const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setActiveCourse: (state, { payload }) => {
      state.active = payload;
    },
  },
});

export const { setActiveCourse } = courseSlice.actions;

export default courseSlice.reducer;

export const selectActiveCourse = (state) => state.course.active;
