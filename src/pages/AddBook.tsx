import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAddBookMutation } from '../redux/features/book/bookApi';
import { useAppSelector } from '../redux/hook';
import { toast } from "react-toastify";


export type AddBookInputs = {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews?: string[];
  owner: string;
  image: string;
}

export type BookCardProps = {
  book: AddBookInputs;
};

export type ICurrentList = {
  _id: string
  email: string;
  isComplete: true | false;
  book: AddBookInputs;
};

export type CurrentListCardProps = {
  currentList: ICurrentList
}
export type IWishlist = {
  _id: string
  email: string;
  book: AddBookInputs;
};

export type WishlistCardProps = {
  wishlist: IWishlist
}

const AddBook = () => {
  const { user } = useAppSelector(state => state.user)
  const [addBook, { data }] = useAddBookMutation()

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<AddBookInputs>();

  const onSubmit: SubmitHandler<AddBookInputs> = (data: AddBookInputs) => {
    const options = {
      data: { title: data.title, author: data.author, genre: data.genre, publicationDate: data.publicationDate, image: data.image, owner: user.email },
    };
    addBook(options);

  };

  useEffect(() => {
    if (data?.success) {
      reset();
      toast.success(`Book added successfully!`);
    }
  }, [data, reset])


  return (
    <div className=' flex justify-center items-center bg-gray-200 py-10'>
      <div className="lg:w-[50%] text-center shadow-xl rounded-lg p-10 bg-base-100 ">
        <h2 className=" text-2xl font-bold mb-4">Add New Book</h2>

        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered w-full"
              {...register("title", {
                required: {
                  value: true,
                  message: "Title is required",
                },
              })}
            />
            <label className="label">
              {errors.title?.type === "required" && (
                <span className="label-text-alt text-red-500 text-sm">
                  {errors.title.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Author</span>
            </label>
            <input
              type="text"
              placeholder="Author"
              className="input input-bordered w-full"
              {...register("author", {
                required: {
                  value: true,
                  message: "Author is required",
                },
              })}
            />
            <label className="label">
              {errors.author?.type === "required" && (
                <span className="label-text-alt text-red-500 text-sm">
                  {errors.author.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Genre</span>
            </label>
            <input
              type="text"
              placeholder="Genre"
              className="input input-bordered w-full"
              {...register("genre", {
                required: {
                  value: true,
                  message: "Genre is required",
                },
              })}
            />
            <label className="label">
              {errors.genre?.type === "required" && (
                <span className="label-text-alt text-red-500 text-sm">
                  {errors.genre.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Publication Date</span>
            </label>
            <input
              type="date"
              placeholder="Publication Date"
              className="input input-bordered w-full"
              {...register("publicationDate", {
                required: {
                  value: true,
                  message: "Publication date is required",
                },
              })}
            />
            <label className="label">
              {errors.publicationDate?.type === "required" && (
                <span className="label-text-alt text-red-500 text-sm">
                  {errors.publicationDate.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              placeholder="Image URL"
              className="input input-bordered w-full"
              {...register("image", {
                required: {
                  value: true,
                  message: "Image URL is required",
                },
              })}
            />
            <label className="label">
              {errors.image?.type === "required" && (
                <span className="label-text-alt text-red-500 text-sm">
                  {errors.image.message}
                </span>
              )}
            </label>
          </div>

          <input
            type="submit"
            className="btn btn-primary w-full mt-4 text-white"
            value="Add Book"
          />
        </form>
      </div>
    </div>
  );
};

export default AddBook;