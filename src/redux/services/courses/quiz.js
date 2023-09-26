import { courseApi } from "./courseApi";

export const quizApiSlice = courseApi.injectEndpoints({
  endpoints: (builder) => ({
    singleQuiz: builder.query({
      query: (params) =>
        `/${params.id}/modules/${params.moduleId}/quizzes/${params.quizId}`,
      providesTags: (result = [], error, arg) => [
        { type: "Quiz", id: arg.quizId },
      ],
    }),
    updateQuiz: builder.mutation({
      query: (data) => ({
        url: `/${data.params.id}/modules/${data.params.moduleId}/quizzes/${data.params.quizId}`,
        method: "POST",
        body: data.body,
      }),
      invalidatesTags: (result = [], error, arg) => [
        { type: "Quiz", id: arg.params.quizId },
      ],
    }),
    getQuizzs: builder.query({
      query: (params) => `/${params.id}/quizzes`,
      providesTags: (result = [], error, arg) => [
        "Quiz",
        ...result.quizzes.map(({ _id }) => ({ type: "Quiz", _id })),
      ],
    }),
    addQuiz: builder.mutation({
      query: (data) => ({
        url: `/${data.params.id}/modules/${data.params.moduleId}/quizzes`,
        method: "POST",
        body: data.body,
      }),
      invalidatesTags: ["Quiz", "Module", "CourseStats"],
    }),
  }),
});

export const {
  useAddQuizMutation,
  useUpdateQuizMutation,
  useGetQuizzsQuery,
  useSingleQuizQuery,
} = quizApiSlice;
