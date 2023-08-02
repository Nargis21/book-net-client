import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useEditBookMutation, useSingleBookQuery } from '../redux/features/book/bookApi';
import { useAppSelector } from '../redux/hook';
import { toast } from "react-toastify";
import Loading from "../utils/Loading";
import { useNavigate, useParams } from 'react-router-dom';


interface AddBookInputs {
    title: string;
    author: string;
    genre: string;
    publicationDate: string;
    reviews?: string[];
    owner: string;
}

const EditBook = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const { data: books, isLoading } = useSingleBookQuery(id);
    if (isLoading) {
        return <Loading></Loading>
    }
    const { _id, title, author, genre, image, publicationDate, reviews } = books?.data;
    const { user } = useAppSelector(state => state.user)
    const [editBook, { isSuccess, data }] = useEditBookMutation()

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const onSubmit = (data: AddBookInputs) => {
        console.log(data);
        const options = {
            id: id,
            data: { title: data.title, author: data.author, genre: data.genre, publicationDate: data.publicationDate, image: data.image, owner: user.email },
        };
        editBook(options);

    };
    // console.log(isSuccess);
    // console.log(data);
    useEffect(() => {
        if (data?.success) {
            toast.success(`Book updated successfully!`);
            navigate(`/bookDetails/${id}`)
        }
    }, [data, reset])


    return (
        <div className=' flex justify-center items-center'>
            <div className="lg:w-[50%] text-center shadow-xl rounded-lg p-10">
                <h2 className=" text-2xl font-bold mb-4">Edit Book</h2>

                <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Title"
                            className="input input-bordered w-full"
                            defaultValue={title}
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
                            defaultValue={author}
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
                            defaultValue={genre}
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
                            defaultValue={publicationDate}
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
                            defaultValue={image}
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
                        value="Edit Book"
                    />
                    {/* <div className="mt-2 text-center">
            {error && ( // Display the error message if present
              <span className=" text-red-500 text-sm ">{error}</span>
            )}
          </div> */}
                </form>
            </div>
        </div>
    );
};

export default EditBook;