import { userApi } from "./userApi";

export const actionApi = userApi.injectEndpoints({
  endpoints: (builder) => ({
    submitQuiz: builder.mutation({
      query: ({ id, body }) => ({
        url: "submitQuiz/" + id,
        method: "POST",
        body,
      }),
    }),
    submitAssignment: builder.mutation({
      query: ({ id, body }) => ({
        url: "submitAssignment/" + id,
        method: "POST",
        body,
      }),
    }),
    rejectAssignment: builder.mutation({
      query: ({ id, body }) => ({
        url: "rejectAssignment/" + id,
        method: "POST",
        body,
      }),
    }),
    acceptAssignment: builder.mutation({
      query: ({ id, body }) => ({
        url: "acceptAssignment/" + id,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useAcceptAssignmentMutation,
  useSubmitAssignmentMutation,
  useSubmitQuizMutation,
  useRejectAssignmentMutation,
} = actionApi;
