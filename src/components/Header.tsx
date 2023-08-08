import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/images/book.png'

const Header = () => {
    return (
        <div className="grid lg:grid-cols-2  grid-cols-1 justify-around gap-10 items-center lg:px-24 md:px-12 px-6 lg:py-16 md:py-8 py-4  bg-gray-200">
            <div className="col-span-1 w-full">
                <h2 className="text-6xl font-bold mb-6">Find Your Best Friend</h2>
                <p className='text-gray-600'>Read book improve and your knowledge and peace your mind. A book can change your mind. Good books don't give up their secrets at once. Discover a new way to learning. All your book collection in one platform</p>
                <Link to='/books' className='btn btn-primary mt-6'>Explore Now</Link>
            </div>
            <div className='col-span-1 '><img src={image} className='w-full' /></div>
        </div>
    );
};

export default Header;