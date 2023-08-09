import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import { useDeleteCurrentListMutation, useUpdateStatusMutation } from "../redux/features/currentList/currentListApi";
import { CurrentListCardProps } from "../pages/AddBook";

const CurrentListCard = ({ currentList }: CurrentListCardProps) => {
    const { _id, title, author, genre, image, publicationDate } = currentList?.book;
    const id = currentList?._id
    const { user } = useAppSelector(state => state.user)
    const [deleteCurrentList,] = useDeleteCurrentListMutation()
    const [updateStatus] = useUpdateStatusMutation()
    const options = {
        id: id
    }
    const handleDeleteCurrentList = () => {
        deleteCurrentList(options)
    }
    const handleUpdateStatus = () => {
        updateStatus(options)
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
                    <div className="flex gap-2 items-center">
                        <button onClick={handleDeleteCurrentList} className='btn btn-primary btn-sm' disabled={!user.email}>
                            Remove
                        </button>
                        {
                            !currentList.isComplete ? <button onClick={handleUpdateStatus} className='btn btn-primary btn-sm' disabled={!user.email}>
                                Mark as completed
                            </button> : <p className="font-bold">You have completed this book</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentListCard;
