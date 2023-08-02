import React, { useEffect } from 'react';
import { useAddCommentMutation, useSingleBookQuery } from '../redux/features/book/bookApi';
import Loading from "../utils/Loading";
import { Link, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Review from '../components/Review';



const BookDetails = () => {
    const { id } = useParams()
    const { data: books, isLoading } = useSingleBookQuery(id, { refetchOnMountOrArgChange: true, pollingInterval: 30000 });

    if (isLoading) {
        return <Loading></Loading>
    }

    const { _id, title, author, genre, image, publicationDate, reviews } = books?.data;



    return (
        <div className='flex flex-col justify-center items-center '>
            <div className='lg:my-16 shadow-xl p-10 rounded-xl'>
                <div className="flex flex-col lg:flex-row gap-10 bg-base-100 ">
                    <figure><img className='h-80' src={image} alt="Album" /></figure>
                    <div className="">
                        <h2 className="card-title text-rose-900 font-serif text-4xl mb-6 ">{title}</h2>
                        <h1 className=' font-bold text-gray-600'>Author: </h1>
                        <h1 className=' text-xl font-bold mb-3'>{author}</h1>
                        <h1 className=' font-bold text-gray-600'>Genre: </h1>
                        <h1 className=' text-xl font-bold mb-3'>{genre}</h1>
                        <h1 className=' font-bold text-gray-600'>Publication Date: </h1>
                        <h1 className=' text-xl font-bold mb-3'>{publicationDate}</h1>
                        <div>
                            <Link to={`/bookEdit/${_id}`}>
                                <button className="btn btn-sm btn-primary">Edit</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <Review id={id} reviews={reviews}></Review>
            </div>
        </div>
    );
};

export default BookDetails;