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
        url: `/currentList/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["currentList"],
    }),
    getCurrentList: builder.query({
      query: () => "/currentList",
      providesTags: ["currentList"],
    }),
    // singleBook: builder.query({
    //   query: (id) => `/books/${id}`,
    //   providesTags: ["book"],
    // }),
  }),
});

export const {
  useAddCurrentListMutation,
  useGetCurrentListQuery,
  useDeleteWishlistMutation,
  //   useGetBooksQuery,
  //   useSingleBookQuery,
  //   useAddCommentMutation,
  //   useEditBookMutation,
  //   useDeleteBookMutation,
} = currentListApi;
