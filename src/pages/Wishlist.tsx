import { Link } from "react-router-dom";
import WishlistCard from "../components/WishlistCard";
import { useGetWishlistQuery } from "../redux/features/wishlist/wishlistApi";
import Loading from "../utils/Loading";
import { IWishlist } from "./AddBook";

const Wishlist = () => {
    const { data, isLoading } = useGetWishlistQuery(undefined)
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            {data?.data?.length === 0 ? (
                <div className="text-center lg:py-36 md:py-24 py-12 bg-gray-200">
                    <p className="lg:text-5xl md:text-3xl text-2xl text-gray-500 font-semibold">No items in the wishlist.</p>
                    <Link to='/books' className='btn btn-primary mt-6'>Explore Now</Link>
                </div>
            ) :
                <div className=" py-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-10 lg:pl-10 bg-gray-200  justify-center">

                    {data?.data?.map((wishlist: IWishlist) => (
                        <WishlistCard
                            key={wishlist._id}
                            wishlist={wishlist}
                        ></WishlistCard>
                    ))}
                </div>
            }

        </div>
    );
};

export default Wishlist;