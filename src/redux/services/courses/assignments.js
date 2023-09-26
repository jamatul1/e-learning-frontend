import { courseApi } from "./courseApi";

export const assignmentApiSlice = courseApi.injectEndpoints({
  endpoints: (builder) => ({
    singleAssignment: builder.query({
      query: (params) => `/${params.id}/assignments/${params.assignmentId}`,
      providesTags: (result = [], error, arg) => [
        { type: "Assignment", id: arg.assignmentId },
      ],
    }),
    updateAssignment: builder.mutation({
      query: (data) => ({
        url: `/${data.params.id}/modules/${data.params.moduleId}/assignments/${data.params.assignmentId}`,
        method: "POST",
        body: data.body,
      }),
      invalidatesTags: (result = [], error, arg) => [
        { type: "Assignment", id: arg.params.assignmentId },
      ],
    }),
    getAssignments: builder.query({
      query: (params) => `/${params.id}/assignments`,
      providesTags: (result = [], error, arg) => [
        "Assignment",
        ...result.assignments.map(({ _id }) => ({ type: "Assignment", _id })),
      ],
    }),
    addAssignment: builder.mutation({
      query: (data) => ({
        url: `/${data.params.id}/modules/${data.params.moduleId}/assignments`,
        method: "POST",
        body: data.body,
      }),
      invalidatesTags: ["CourseStats", "Module", "Assignment"],
    }),
  }),
});

export const {
  useAddAssignmentMutation,
  useGetAssignmentsQuery,
  useSingleAssignmentQuery,
  useUpdateAssignmentMutation,
} = assignmentApiSlice;
