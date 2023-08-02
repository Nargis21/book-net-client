import { api } from "../../api/apiSlice";

const wishlistApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addWishlist: builder.mutation({
      query: ({ data }) => ({
        url: "/wishlist",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["book"],
    }),
    // addComment: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `books/add-review/${id}`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    //   invalidatesTags: ["book"],
    // }),
    // editBook: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `books/${id}`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    //   invalidatesTags: ["book"],
    // }),
    // deleteBook: builder.mutation({
    //   query: ({ id }) => ({
    //     url: `books/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["book"],
    // }),
    // getBooks: builder.query({
    //   query: () => "/books",
    //   providesTags: ["book"],
    // }),
    // singleBook: builder.query({
    //   query: (id) => `/books/${id}`,
    //   providesTags: ["book"],
    // }),
  }),
});

export const {
  useAddWishlistMutation,
  //   useGetBooksQuery,
  //   useSingleBookQuery,
  //   useAddCommentMutation,
  //   useEditBookMutation,
  //   useDeleteBookMutation,
} = wishlistApi;
