import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addBook: builder.mutation({
      query: ({ data }) => ({
        url: "/books",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["book"],
    }),
    addComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `books/add-review/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["book"],
    }),
    editBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["book"],
    }),
    deleteBook: builder.mutation({
      query: ({ id }) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["book"],
    }),
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["book"],
    }),
    getTopTen: builder.query({
      query: () => "/books/get-top-ten",
      providesTags: ["book"],
    }),
    singleBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ["book"],
    }),
  }),
});

export const {
  useAddBookMutation,
  useGetBooksQuery,
  useGetTopTenQuery,
  useSingleBookQuery,
  useAddCommentMutation,
  useEditBookMutation,
  useDeleteBookMutation,
} = bookApi;
