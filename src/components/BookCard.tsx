import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import { useAddWishlistMutation } from "../redux/features/wishlist/wishlistApi";
import { toast } from "react-toastify";
import { useAddCurrentListMutation } from '../redux/features/currentList/currentListApi';

const BookCard = ({ book }) => {

    const { _id, title, author, genre, image, publicationDate } = book;
    const { user } = useAppSelector(state => state.user)
    const [addWishlist, { data: wishlistData }] = useAddWishlistMutation()
    const [addCurrentList, { data: currentListData }] = useAddCurrentListMutation()

    const options = {
        data: {
            email: user.email,
            book: _id
        }
    }
    const handleWishlist = () => {
        addWishlist(options)
    }
    const handleCurrentList = () => {
        addCurrentList(options)
    }

    useEffect(() => {
        if (wishlistData?.success) {
            toast.success(`Added to wishlist`);
        }
        if (currentListData?.success) {
            toast.success(`Added to current list`);
        }
    }, [wishlistData, currentListData])


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
                        <p className="text-center bg-rose-200 p-1 rounded-full">{genre}</p>
                    </div>
                    <div className="card-actions justify-between items-center text-sm text-gray-600 font-semibold ">
                        <p>Published at {publicationDate}</p>
                        <Link to={`/bookDetails/${_id}`}>
                            <button className="btn capitalize btn-link">View Details</button>
                        </Link>
                    </div>
                    <div className='flex gap-2'>
                        <button onClick={handleWishlist} className='btn btn-primary btn-sm' disabled={!user.email}>
                            Add To Wishlist
                        </button>
                        <button onClick={handleCurrentList} className='btn btn-primary btn-sm' disabled={!user.email}>
                            Add To Current List
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
