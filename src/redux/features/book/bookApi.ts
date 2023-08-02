import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addBook: builder.mutation({
      query: ({ data }) => ({
        url: "/books",
        method: "POST",
        body: data,
      }),
    }),
    getBooks: builder.query({
      query: () => "/books",
    }),
    singleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
  }),
});

export const { useAddBookMutation, useGetBooksQuery, useSingleBookQuery } =
  bookApi;
