import { useState,useEffect } from 'react';
import MySingleToy from '../MySingleToy/MySingleToy';

const MyToys = () => {
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [])

    return (
        <div className='w-3/4 mx-auto space-y-6 lg:mb-16 my-6'>
            {
                toys.map(toy => <MySingleToy
                    key={toy._id}
                    toy={toy} />)
            }
        </div>
    );
};

export default MyToys;