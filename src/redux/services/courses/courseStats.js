import { courseApi } from "./courseApi";

export const courseStatApiSlice = courseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCourseStats: builder.query({
      query: (id) => `/${id}/stats`,
      providesTags: () => ["CourseStats"],
    }),
  }),
});

export const { useGetCourseStatsQuery } = courseStatApiSlice;
