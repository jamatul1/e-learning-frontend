import { courseApi } from "./courseApi";

export const modulesApiSlice = courseApi.injectEndpoints({
  endpoints: (builder) => ({
    singleModule: builder.query({
      query: (params) => `/${params.id}/modules/${params.moduleId}`,
      providesTags: (result = [], error, arg) => [
        { type: "Module", id: arg.moduleId },
      ],
    }),
    updateModule: builder.mutation({
      query: (data) => ({
        url: `/${data.params.id}/modules/${data.params.moduleId}`,
        method: "POST",
        body: data.body,
      }),
      invalidatesTags: (result = [], error, arg) => [
        { type: "Module", id: arg.params.moduleId },
      ],
    }),
    getModules: builder.query({
      query: (params) => `/${params.id}/modules`,
      providesTags: (result = [], error, arg) => [
        "Module",
        ...result.modules.map(({ _id }) => ({ type: "Module", _id })),
      ],
    }),
    addModule: builder.mutation({
      query: (data) => ({
        url: `/${data.params.id}/modules`,
        method: "POST",
        body: data.body,
      }),
      invalidatesTags: ["Module", "CourseStats"],
    }),
  }),
});

export const {
  useAddModuleMutation,
  useGetModulesQuery,
  useSingleModuleQuery,
  useUpdateModuleMutation,
} = modulesApiSlice;
