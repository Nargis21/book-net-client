import { Link } from "react-router-dom";

const BookCard = ({ book }) => {

    const { _id, title, author, genre, image, publicationDate } = book;

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
                    <div className="card-actions justify-between items-center text-sm text-gray-600 font-semibold mt-4">
                        <p>Published at {publicationDate}</p>
                        <Link to={`/bookDetails/${_id}`}>
                            <button className="btn btn-sm btn-primary">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
