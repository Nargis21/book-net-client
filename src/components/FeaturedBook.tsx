import { AddBookInputs } from '../pages/AddBook';
import { useGetTopTenQuery } from '../redux/features/book/bookApi';
import Loading from '../utils/Loading';
import BookCard from './BookCard';

const FeaturedBook = () => {
    const { data, isLoading } = useGetTopTenQuery(undefined)
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='py-10 text-center text-5xl bg-gray-300'>Featured Books</h1>
            <div className=" py-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-10 lg:pl-10  bg-gray-200">
                {data?.data?.map((book: AddBookInputs) => (
                    <BookCard
                        key={book._id}
                        book={book}
                    ></BookCard>
                ))}
            </div>
        </div>
    );
};

export default FeaturedBook;