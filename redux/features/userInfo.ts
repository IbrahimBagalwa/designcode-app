import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userInfoApi = createApi({
  reducerPath: "userinfoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://randomuser.me/api" }),
  tagTypes: ["Post"],

  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: () => "/",
    }),
  }),
});

export const { useGetUserInfoQuery } = userInfoApi;
