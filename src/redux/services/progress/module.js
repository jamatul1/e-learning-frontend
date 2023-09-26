import { progressApi } from "./progressApi";

export const moduleProgressApi = progressApi.injectEndpoints({
  endpoints: (builder) => ({
    updateAssignmentP: builder.mutation({
      query: ({ params, body }) => ({
        url: `module/${params.mId}/assignment/${params.assignmentId}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: (result = [], error, arg) => [
        { type: "ModuleProgress", id: arg.params.mId },
      ],
    }),
    updateQuizP: builder.mutation({
      query: ({ params, body }) => ({
        url: `module/${params.mId}/quiz/${params.quizId}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: (result = [], error, arg) => [
        { type: "ModuleProgress", id: arg.params.mId },
      ],
    }),
    updateLessonP: builder.mutation({
      query: ({ params, body }) => ({
        url: `module/${params.mId}/lesson/${params.lessonId}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: (result = [], error, arg) => [
        { type: "ModuleProgress", id: arg.params.mId },
      ],
    }),
    getModuleStatus: builder.query({
      query: (id) => "module/" + id,
      providesTags: (result = [], error, arg) => [
        { type: "ModuleProgress", id: arg },
      ],
    }),
  }),
});

export const {
  useUpdateAssignmentPMutation,
  useUpdateLessonPMutation,
  useUpdateQuizPMutation,
  useGetModuleStatusQuery,
} = moduleProgressApi;
