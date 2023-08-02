import React from 'react';
import { useSingleBookQuery } from '../redux/features/book/bookApi';
import Loading from "../utils/Loading";
import { useParams } from 'react-router-dom';

const BookDetails = () => {
    const { id } = useParams()
    const { data, isLoading } = useSingleBookQuery(id);

    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(data);
    const { title, author, genre, image, publicationDate } = data?.data;

    return (
        <div className=' lg:mx-48 lg:my-12 '>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='lg:h-96' src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-rose-900 font-serif text-2xl ">{title}</h2>
                    <h3 className='text-xl font-bold'>Author: <span className='font-normal'>{author}</span></h3>
                    <h3 className='text-xl font-bold'>Genre: <span className='font-normal'>{genre}</span></h3>
                    <h3 className='text-xl font-bold'>Publication Date: <span className='font-normal'>{publicationDate}</span></h3>

                    {/* <form onSubmit={handleOrder}>
                        <label class="label">
                            <p class="label-text font-bold">Phone</p>
                        </label>
                        <input required type="text" name='phone' placeholder="Phone" class="input w-full input-warning max-w-xs" />
                        <label class="label">
                            <p class="label-text font-bold">Address</p>
                        </label>
                        <input required type="text" name='address' placeholder="Address" class="input w-full input-warning max-w-xs" />
                        <label class="label">
                            <p class="label-text font-bold">Set Order Quantity</p>
                        </label>
                        <input type="text" name='quantity' value={orderQuantity} placeholder="Type here" class="input w-24 input-warning max-w-xs" />
                        <p disabled={orderQuantity >= tool?.availableQuantity} onClick={handleIncrease} class="btn btn-sm btn-accent mx-3">Increase</p>
                        <p disabled={orderQuantity <= tool?.minimumOrderQuantity} onClick={handleDecrease} class="btn btn-sm btn-accent">Decrease</p>
                        <div class="card-actions justify-end mt-12">
                            <button type="submit" className='btn btn-secondary'>Place Order</button>
                        </div>
                    </form> */}
                </div>
            </div>
        </div>
    );
};

export default BookDetails;