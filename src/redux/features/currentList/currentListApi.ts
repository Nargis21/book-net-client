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
    updateStatus: builder.mutation({
      query: ({ id }) => ({
        url: `currentList/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["currentList"],
    }),
    // editBook: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `books/${id}`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    //   invalidatesTags: ["book"],
    // }),
    deleteCurrentList: builder.mutation({
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
  useDeleteCurrentListMutation,
  useUpdateStatusMutation,
  //   useGetBooksQuery,
  //   useSingleBookQuery,
  //   useAddCommentMutation,
  //   useEditBookMutation,
  //   useDeleteBookMutation,
} = currentListApi;
