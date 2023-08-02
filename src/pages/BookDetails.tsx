import React from 'react';
import { useSingleBookQuery } from '../redux/features/book/bookApi';
import Loading from "../utils/Loading";
import { useParams } from 'react-router-dom';

const BookDetails = () => {
    const { id } = useParams()
    const { data, isLoading } = useSingleBookQuery(id);

    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(data);
    const { title, author, genre, image, publicationDate } = data?.data;

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
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default BookDetails;