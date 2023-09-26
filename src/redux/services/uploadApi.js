import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";
export const uploadApiSlice = createApi({
  reducerPath: "uploadApiSlice",

  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl + "/uploads",
  }),
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = getState().auth.token;
    if (token) {
      headers.set("authentication", `Bearer ${token}`);
      return headers;
    }
  },
  tagTypes: ["Upload"],
  endpoints: (builder) => ({
    uploadImages: builder.mutation({
      query: (body) => ({
        url: "uploadImages",
        method: "POST",
        body,
      }),
    }),
    uploadPdfs: builder.mutation({
      query: (body) => ({
        url: "uploadPdfs",
        method: "POST",
        body,
      }),
    }),
    uplaodVideos: builder.mutation({
      query: (body) => ({
        url: "uploadVideos",
        method: "POST",

        body,
      }),
    }),
  }),
});
export const {
  useUploadImagesMutation,
  useUplaodVideosMutation,
  useUploadPdfsMutation,
} = uploadApiSlice;
