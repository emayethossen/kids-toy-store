import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import SingleToy from "./SingleToy";

const AllToys = () => {
    const [showAll, setShowAll] = useState(false)
    const [toys, setToys] = useState([])
    const [searchApiData, setSearchApiData] = useState([])
    const [filterVal, setFilterVal] = useState('');

    const url = 'https://baby-toys-server-five.vercel.app/toys';

    const handleShowAll = () => {
        setShowAll(true)
    }

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setToys(data);
                setSearchApiData(data);
            })
    }, [url])

    const handleFilter = (e) => {
        if (e.target.value == '') {
            setToys(searchApiData)
        } else {
            const filterResult = searchApiData.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
            setToys(filterResult)
        }
        setFilterVal(e.target.value)
    }

    return (
        <div>
            <Helmet>
                <title>Kids Store All Toys</title>
            </Helmet>
            <div>
                <div className=" mb-8 rounded-xl bg-gray-200 w-1/2 mx-auto">
                    <input type="text" value={filterVal} onInput={(e) => handleFilter(e)} className="input rounded bg-gray-100 w-full" placeholder="Search" />
                </div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Sub-Category</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Details</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                toys.slice(0, showAll ? toys.length : 20).map(ty => <SingleToy
                                    key={ty._id}
                                    ty={ty} />)
                            }
                        </tbody>

                    </table>
                </div>
                <div className=" w-1/2 mx-auto my-6">
                    {
                        !showAll && <span onClick={handleShowAll}>
                            <button className="btn bg-[#6495ED] border-none w-full hover:bg-[#ff69b4] uppercase">See More</button>
                        </span>
                    }
                </div>
            </div>
        </div>
    );
};

export default AllToys;