import { api } from "../../api/apiSlice";

const currentListApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addCurrentList: builder.mutation({
      query: ({ data }) => ({
        url: "/currentList",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["currentList"],
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
    deleteWishlist: builder.mutation({
      query: ({ id }) => ({
        url: `/wishlist/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["wishlist"],
    }),
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
  useAddCurrentListMutation,
  useGetWishlistQuery,
  useDeleteWishlistMutation,
  //   useGetBooksQuery,
  //   useSingleBookQuery,
  //   useAddCommentMutation,
  //   useEditBookMutation,
  //   useDeleteBookMutation,
} = currentListApi;
