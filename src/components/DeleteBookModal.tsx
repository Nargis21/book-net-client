import React, { useEffect } from 'react';
import { useDeleteBookMutation } from '../redux/features/book/bookApi';
import { useAppSelector } from '../redux/hook';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";


const DeleteBookModal = () => {
    const navigate = useNavigate()
    const { deleteConfirm } = useAppSelector((state) => state.book)
    const [deleteBook, { data }] = useDeleteBookMutation()

    const handleBookDelete = () => {
        const options = {
            id: deleteConfirm
        }
        deleteBook(options)
    }

    useEffect(() => {
        if (data?.success) {
            toast.success(`Book deleted successfully!`);
            navigate('/books')
        }
    }, [data, navigate])

    return (
        <div>
            <input type="checkbox" id="delete-book-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure want to delete this book?</h3>
                    <div className="modal-action">
                        <button className='btn btn-error  px-6 btn-sm' onClick={handleBookDelete}>Yes</button>
                        <label htmlFor="delete-book-modal" className="btn px-6 btn-sm">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteBookModal;