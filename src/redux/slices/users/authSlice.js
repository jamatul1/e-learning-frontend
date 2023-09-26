import { createSlice } from "@reduxjs/toolkit";
let initialState = { user: null, token: null, enrolledCourses: {} };
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload: { user, token } }) => {
      state.user = user;
      state.token = token;
    },
    unsetCredentials: (state) => {
      state.user = null;
      state.token = null;
    },
    setEnrolledCourses: (state, { payload: { enrolledCourses } }) => {
      state.enrolledCourses = enrolledCourses;
    },
    unsetEnrolled: (state) => {
      state.enrolledCourses = {};
    },
  },
});

export const {
  setCredentials,
  unsetCredentials,
  setEnrolledCourses,
  unsetEnrolled,
} = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectEnrolledCourse = (state) => state.auth.enrolledCourses;
