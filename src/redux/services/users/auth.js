import { userApi } from "./userApi";

export const authApi = userApi.injectEndpoints({
  endpoints: (builder) => ({
    signin: builder.mutation({
      query: (body) => ({
        url: "signin",
        method: "POST",
        body,
      }),
    }),
    enrolledCourses: builder.query({
      query: () => "enrolled",
    }),
    signup: builder.mutation({
      query: (body) => ({
        url: "signup",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSigninMutation, useSignupMutation, useEnrolledCoursesQuery } =
  authApi;
