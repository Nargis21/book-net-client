import { useAppSelector } from "../redux/hook"
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../utils/Loading";

interface IProps {
    children: ReactNode
}

const PrivateRoute = ({ children }: IProps) => {

    const { user, isLoading } = useAppSelector((state) => state.user)
    const location = useLocation();

    if (isLoading) {
        return <Loading></Loading>
    }

    if (!user.email && !isLoading && !localStorage.getItem('accessToken')) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

    return children
};

export default PrivateRoute;