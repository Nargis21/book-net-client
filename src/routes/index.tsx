import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Login from "../pages/Login"
import NotFound from "../pages/NotFound"
import Home from "../pages/Home"
import Books from "../pages/Books"
import SignUp from "../pages/SignUp"
import PrivateRoute from "./PrivateRoute"
import AddBook from "../pages/AddBook"
import BookDetails from "../pages/BookDetails"
import EditBook from "../pages/EditBook"
import Wishlist from "../pages/Wishlist"
const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/books',
                element: <Books></Books>
            },
            {
                path: '/add-new-book',
                element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
            },
            {
                path: '/bookDetails/:id',
                element: <BookDetails></BookDetails>
            },
            {
                path: '/bookEdit/:id',
                element: <PrivateRoute><EditBook></EditBook></PrivateRoute>
            },
            {
                path: '/wishlist',
                element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/login',
                element: <Login />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    },
])

export default routes