import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png'
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { signOut } from "firebase/auth";
import { setUser } from "../redux/features/user/userSlice";
import { auth } from "../lib/firebase";

const Navbar = () => {
    const { user } = useAppSelector(state => state.user)
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(setUser(null))
            localStorage.removeItem('accessToken')
        })
    }

    return (
        <div className="navbar bg-base-100 lg:px-6 md:px-4 sm:px-2 shadow-lg"
        >
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold">
                        <li><Link to='/books'>All Books</Link></li>
                    </ul>
                </div>
                <Link to='/' className=" hidden lg:flex">
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="w-[50px]" />
                        <h1 className="normal-case text-2xl font-thin"> <span className="font-bold">Book</span> Net</h1>
                    </div>
                </Link>
            </div>

            <div className="navbar-end ">
                <ul className="menu menu-horizontal px-1 hidden lg:flex text-gray-700 font-semibold text-[16px]">
                    <li><Link to='/books'>All Books</Link></li>
                    {
                        !user.email && (<>
                            <li><Link to='/signup'>Sign Up</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                        </>)
                    }
                    {
                        user.email && (
                            <>
                                <li><Link to='/add-new-book'>Add New Book</Link></li>
                                <li onClick={handleLogout} className="cursor-pointer mt-2">Logout</li>
                            </>

                        )
                    }
                </ul>
                <Link to='/' className=" lg:hidden">
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="w-[50px]" />
                        <h1 className="normal-case text-2xl font-thin"> <span className="font-bold">Book</span> Net</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;