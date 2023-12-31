import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["book", "wishlist", "currentList"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-net-server-orcin.vercel.app/api/v1/",
    prepareHeaders: (headers) => {
      const accessToken = localStorage.getItem("accessToken");

      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
