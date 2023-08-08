import { useSingleBookQuery } from '../redux/features/book/bookApi';
import Loading from "../utils/Loading";
import { Link, useParams } from 'react-router-dom';
import Review from '../components/Review';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { setDeleteConfirm } from '../redux/features/book/bookSlice';
import DeleteBookModal from '../components/DeleteBookModal';

const BookDetails = () => {
    const { user } = useAppSelector(state => state.user)
    const { deleteConfirm } = useAppSelector((state) => state.book)
    const dispatch = useAppDispatch()
    const { id } = useParams()
    const { data: books, isLoading } = useSingleBookQuery(id, { refetchOnMountOrArgChange: true, pollingInterval: 30000 });

    if (isLoading) {
        return <Loading></Loading>
    }
    const { _id, title, author, genre, image, publicationDate, reviews, owner } = books?.data;


    return (
        <div className='flex flex-col justify-center items-center bg-gray-200 py-10'>
            <div className=' shadow-xl p-10 rounded-xl bg-base-100'>
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
                        {
                            user.email === owner && <div>
                                <Link to={`/bookEdit/${_id}`}>
                                    <button className="btn btn-sm btn-primary mr-2" disabled={user.email !== owner}>Edit</button>
                                </Link>
                                <label onClick={() => dispatch(setDeleteConfirm(_id))} className='btn btn-sm bg-red-300 ' for="delete-book-modal">
                                    Delete
                                </label>
                            </div>
                        }
                    </div>
                </div>
                <Review id={id} reviews={reviews}></Review>
            </div>
            {
                deleteConfirm && <DeleteBookModal></DeleteBookModal>
            }
        </div>
    );
};

export default BookDetails;