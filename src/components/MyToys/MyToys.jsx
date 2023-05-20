import { useState, useEffect, useContext } from 'react';
import MySingleToy from '../MySingleToy/MySingleToy';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../providers/AuthProvider';

const MyToys = () => {

    const { user } = useContext(AuthContext)

    const [toys, setToys] = useState([])
    const url = `https://baby-toys-server-five.vercel.app/toys?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [url])

    return (
        <div className='w-3/4 mx-auto space-y-6 lg:mb-16 my-6'>
            <Helmet>
                <title>Kids Store My Toys</title>
            </Helmet>

            <div className="overflow-x-auto w-full">
                <table className="table w-full rounded-xl">
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
                            <th>Edit & Delete</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <MySingleToy
                                key={toy._id}
                                toy={toy}
                                toys={toys}
                                setToys={setToys} />)
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default MyToys;