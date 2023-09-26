import { userApi } from "./userApi";

export const instructorApiSlice = userApi.injectEndpoints({
  endpoints: (builder) => ({
    getInstructorStatus: builder.query({
      query: () => "/instructor",
      providesTags: (result = [], error, arg) => ["User"],
    }),
    getAssignmentNew: builder.query({
      query: (id) => "/assignments/" + id,
    }),
  }),
});

export const { useGetInstructorStatusQuery, useGetAssignmentNewQuery } =
  instructorApiSlice;
