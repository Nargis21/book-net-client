import { useGetCurrentListQuery } from "../redux/features/currentList/currentListApi";
import CurrentListCard from '../components/CurrentListCard'
import Loading from "../utils/Loading";
import { Link } from "react-router-dom";

const CurrentList = () => {
    const { data, isLoading } = useGetCurrentListQuery(undefined)
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            {data?.data?.length === 0 ? (
                <div className="text-center lg:py-36 md:py-24 py-12 bg-gray-200">
                    <p className="lg:text-5xl md:text-3xl text-2xl text-gray-500 font-semibold">No items in the current list.</p>
                    <Link to='/books' className='btn btn-primary mt-6'>Explore Now</Link>
                </div>
            ) :
                <div className=" py-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-10 lg:pl-10 bg-gray-200 ">
                    {data?.data?.map((currentList) => (
                        <CurrentListCard
                            key={currentList?._id}
                            currentList={currentList}
                        ></CurrentListCard>

                    ))}
                </div>
            }

        </div>
    );
};

export default CurrentList;