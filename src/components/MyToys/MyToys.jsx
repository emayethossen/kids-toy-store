import { useState, useEffect, useContext } from 'react';
import MySingleToy from '../MySingleToy/MySingleToy';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../providers/AuthProvider';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([])
    const url = `https://baby-toys-server-five.vercel.app/toys?email=${user.email}`;
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
            <div className='w-1/2 text-right rounded-lg'>
                <h2 className='text-3xl text-left font-bold p-4'>Sort by</h2>
                <select className="input w-full bg-gray-200 rounded-lg">
                    <option value="ase">Price Acending</option>
                    <option value="desc">Price decending</option>
                </select>

            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full rounded-xl">
                    {/* head */}
                    <thead className='w-full'>
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
                            <th>Edit & Delete</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='w-full'>
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