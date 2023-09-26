import { courseApi } from "./courseApi";

export const lessonApiSlice = courseApi.injectEndpoints({
  endpoints: (builder) => ({
    singleLesson: builder.query({
      query: (params) =>
        `/${params.id}/modules/${params.moduleId}/lessons/${params.lessonId}`,
      providesTags: (result = [], error, arg) => [
        { type: "Lesson", id: arg.lessonId },
      ],
    }),
    updateLesson: builder.mutation({
      query: (data) => ({
        url: `/${data.params.id}/modules/${data.params.moduleId}/lessons/${data.params.lessonId}`,
        method: "POST",
        body: data.body,
      }),
      invalidatesTags: (result = [], error, arg) => [
        { type: "Lesson", id: arg.params.lessonId },
      ],
    }),
    addLesson: builder.mutation({
      query: (data) => ({
        url: `/${data.params.id}/modules/${data.params.moduleId}/lessons`,
        method: "POST",
        body: data.body,
      }),
      invalidatesTags: (result = [], error, arg) => [
        "CourseStats",
        "Module",

        "Lesson",
      ],
    }),
  }),
});

export const {
  useAddLessonMutation,
  useSingleLessonQuery,
  useUpdateLessonMutation,
} = lessonApiSlice;
