import { api } from "../../api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: ({ data }) => ({
        url: "/auth/signup",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: ({ data }) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation } = userApi;
