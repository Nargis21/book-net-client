import { useGetCurrentListQuery } from "../redux/features/currentList/currentListApi";
import CurrentListCard from '../components/CurrentListCard'
import Loading from "../utils/Loading";

const CurrentList = () => {
    const { data, isLoading } = useGetCurrentListQuery(undefined)
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(data.data);
    return (
        <div>
            <div className=" py-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-10 lg:pl-10 bg-gray-200 ">
                {data?.data?.map((currentList) => (
                    <CurrentListCard
                        key={currentList._id}
                        currentList={currentList}
                    ></CurrentListCard>
                ))}
            </div>
        </div>
    );
};

export default CurrentList;