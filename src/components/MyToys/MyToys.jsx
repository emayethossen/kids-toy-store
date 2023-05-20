import { useState, useEffect, useContext } from 'react';
import MySingleToy from '../MySingleToy/MySingleToy';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../providers/AuthProvider';

const MyToys = () => {

    const { user } = useContext(AuthContext)

    const [toys, setToys] = useState([])
    const url = `http://localhost:5000/toys?email=${user.email}`
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
            {
                toys.map(toy => <MySingleToy
                    key={toy._id}
                    toy={toy}
                    toys={toys}
                    setToys={setToys} />)
            }
        </div>
    );
};

export default MyToys;