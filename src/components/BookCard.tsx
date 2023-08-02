import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import { useAddWishlistMutation } from "../redux/features/wishlist/wishlistApi";
import { toast } from "react-toastify";

const BookCard = ({ book }) => {

    const { _id, title, author, genre, image, publicationDate } = book;
    const { user } = useAppSelector(state => state.user)
    const [addWishlist, { data }] = useAddWishlistMutation()

    const handleWishlist = () => {
        const options = {
            data: {
                email: user.email,
                book: _id
            }
        }
        addWishlist(options)
    }

    useEffect(() => {
        if (data?.success) {
            toast.success(`Added to wishlist`);
        }
    }, [data])


    return (
        <div className="">
            <div className="card w-96 bg-base-100 shadow-2xl">
                <div>
                    <figure><img src={image} alt="Book Image" className="cover h-80 mt-12" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title text-rose-900 font-bold uppercase">{title}</h2>
                    <div className="flex justify-between items-center">
                        <p className="text-sm">By <span className="text-blue-700 font-semibold text-xl"> {author}</span></p>
                        <p className="text-center bg-gray-300 p-1 rounded-full">{genre}</p>
                    </div>
                    <div className="card-actions justify-between items-center text-sm text-gray-600 font-semibold ">
                        <p>Published at {publicationDate}</p>
                        <Link to={`/bookDetails/${_id}`}>
                            <button className="btn capitalize btn-link">View Details</button>
                        </Link>
                    </div>
                    <div>
                        <button onClick={handleWishlist} className='btn btn-primary btn-sm '>
                            Add To Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
