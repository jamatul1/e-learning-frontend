import { progressApi } from "./progressApi";

export const progress = progressApi.injectEndpoints({
  endpoints: (builder) => ({
    createCourseProgress: builder.mutation({
      query: (id) => ({
        url: `create/${id}`,
        method: "POST",
      }),
    }),
    getAllCourseProgress: builder.query({
      query: () => "",
    }),
    getSingleCourseProgress: builder.query({
      query: (id) => id,
    }),
  }),
});

export const {
  useCreateCourseProgressMutation,
  useGetAllCourseProgressQuery,
  useGetSingleCourseProgressQuery,
} = progress;
