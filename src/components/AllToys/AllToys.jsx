import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import SingleToy from "./SingleToy";

const AllToys = () => {

    const [toys, setToys] = useState([])
    const url = `http://localhost:5000/toys`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [url])

    return (
        <div>
            <Helmet>
                <title>Kids Store All Toys</title>
            </Helmet>
            <div>

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
                                toys.map(ty => <SingleToy
                                    key={ty._id}
                                    ty={ty} />)
                            }
                        </tbody>

                    </table>
                </div>

            </div>
        </div>
    );
};

export default AllToys;