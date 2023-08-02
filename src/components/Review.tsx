import React, { useEffect } from 'react';
import { useAddCommentMutation } from '../redux/features/book/bookApi';
import { useForm } from 'react-hook-form';
import { useAppSelector } from '../redux/hook';
type AddCommentInput = {
    comment: string
}

const Review = ({ id, reviews }) => {
    const { user } = useAppSelector(state => state.user)
    const [addComment, { data }] = useAddCommentMutation()

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const onSubmit = (data: AddCommentInput) => {
        console.log(data);
        const options = {
            id: id,
            data: { comment: data.comment },
        };
        addComment(options);

    };

    useEffect(() => {
        if (data?.success) {
            reset();
        }
    }, [data, reset])

    return (
        <div className='mt-4'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex gap-2 w-full'>
                <div className="form-control w-full">
                    <textarea
                        placeholder="Your Comment"
                        className=" textarea textarea-bordered textarea-xs w-full"
                        {...register("comment", {
                            required: {
                                value: true,
                                message: "Comment is required",
                            },
                        })}
                    />
                    <label className="label">
                        {errors.comment?.type === "required" && (
                            <span className="label-text-alt text-red-500 text-sm">
                                {errors.comment.message}
                            </span>
                        )}
                    </label>
                </div>
                <input
                    disabled={!user.email}
                    type="submit"
                    className="btn btn-primary text-white"
                    value="Send"
                />
            </form>
            <div className="mt-6">
                {reviews?.map((comment: string, index: number) => (
                    <div key={index} className="flex gap-3 items-center mb-5">
                        <div className="avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU" />
                            </div>
                        </div>
                        <p>{comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Review;