import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import { useDeleteWishlistMutation } from '../redux/features/wishlist/wishlistApi';
import { WishlistCardProps } from "../pages/AddBook";

const WishlistCard = ({ wishlist }: WishlistCardProps) => {
    const { _id, title, author, genre, image, publicationDate } = wishlist?.book;
    const id = wishlist?._id
    const { user } = useAppSelector(state => state.user)
    const [deleteWishlist] = useDeleteWishlistMutation()

    const handleDeleteWishlist = () => {
        const options = {
            id: id
        }
        deleteWishlist(options)
    }


    return (
        <div className="">
            <div className="card w-96 bg-base-100 shadow-2xl">
                <div>
                    <figure><img src={image} alt="Book Image" className="cover h-80 mt-12" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title text-blue-900 font-bold uppercase">{title}</h2>
                    <div className="flex justify-between items-center">
                        <p>By <span className=" font-bold"> {author}</span></p>
                        <p className="text-center bg-rose-200 p-1 rounded-full">{genre}</p>
                    </div>
                    <div className="card-actions justify-between items-center text-sm text-gray-600 font-semibold ">
                        <p>Published at {publicationDate}</p>
                        <Link to={`/bookDetails/${_id}`}>
                            <button className="btn capitalize btn-link">View Details</button>
                        </Link>
                    </div>
                    <div>
                        <button onClick={handleDeleteWishlist} className='btn btn-primary btn-sm' disabled={!user.email}>
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishlistCard;
