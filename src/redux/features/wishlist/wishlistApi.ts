import { api } from "../../api/apiSlice";

const wishlistApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addWishlist: builder.mutation({
      query: ({ data }) => ({
        url: "/wishlist",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["wishlist"],
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
    getWishlist: builder.query({
      query: () => "/wishlist",
      providesTags: ["wishlist"],
    }),
    // singleBook: builder.query({
    //   query: (id) => `/books/${id}`,
    //   providesTags: ["book"],
    // }),
  }),
});

export const {
  useAddWishlistMutation,
  useGetWishlistQuery,
  //   useGetBooksQuery,
  //   useSingleBookQuery,
  //   useAddCommentMutation,
  //   useEditBookMutation,
  //   useDeleteBookMutation,
} = wishlistApi;
