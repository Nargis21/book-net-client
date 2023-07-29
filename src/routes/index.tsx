import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Login from "../pages/Login"
import NotFound from "../pages/NotFound"
import Home from "../pages/Home"
import Books from "../pages/Books"
import SignUp from "../pages/SignUp"
import PrivateRoute from "./PrivateRoute"
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
                element: <PrivateRoute><Books></Books></PrivateRoute>
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