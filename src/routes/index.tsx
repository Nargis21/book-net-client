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
                element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>
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