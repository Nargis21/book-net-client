import BookCard from "../components/BookCard";
import { useGetBooksQuery } from "../redux/features/book/bookApi";
import Loading from "../utils/Loading";

const Books = () => {
    const { data, isLoading } = useGetBooksQuery(undefined)
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(data);
    return (
        <div>
            <div className=" py-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-10 lg:pl-10  ">
                {data?.data?.map((book) => (
                    <BookCard
                        key={book._id}
                        book={book}
                    ></BookCard>
                ))}
            </div>
        </div>
    );
};

export default Books;