import BookCard from "../components/BookCard";
import { useGetWishlistQuery } from "../redux/features/wishlist/wishlistApi";
import Loading from "../utils/Loading";

const Wishlist = () => {
    const { data, isLoading } = useGetWishlistQuery(undefined)
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(data.data);
    return (
        <div>
            <div className=" py-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-10 lg:pl-10  ">
                {data?.data?.map((book) => (
                    <BookCard
                        key={book._id}
                        book={book.book}
                    ></BookCard>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;