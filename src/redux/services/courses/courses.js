import { courseApi } from "./courseApi";

export const coursesApiSlice = courseApi.injectEndpoints({
  endpoints: (builder) => ({
    singleCourse: builder.query({
      query: (id) => "/" + id,
      providesTags: (result = [], error, arg) => [{ type: "Course", id: arg }],
    }),
    updateCourse: builder.mutation({
      query: (body) => ({
        url: "/" + body._id,
        method: "POST",
        body,
      }),
      invalidatesTags: (result = [], error, arg) => [
        { type: "Course", id: arg._id },
      ],
    }),
    getCourses: builder.query({
      query: (q) => `/${q}`,
      providesTags: (result = [], error, arg) => [
        "Course",
        ...result.data.map(({ _id }) => ({ type: "Course", _id })),
      ],
    }),
    addCourse: builder.mutation({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Course"],
    }),
  }),
});

export const {
  useAddCourseMutation,
  useSingleCourseQuery,
  useGetCoursesQuery,
  useUpdateCourseMutation,
} = coursesApiSlice;
