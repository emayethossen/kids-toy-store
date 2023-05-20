import { useState,useEffect } from 'react';
import MySingleToy from '../MySingleToy/MySingleToy';
import { Helmet } from 'react-helmet';

const MyToys = () => {
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('https://baby-toys-server-five.vercel.app/toys')
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [])

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