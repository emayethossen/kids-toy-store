import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import AOS  from 'aos/dist/aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const SingleToy = ({ ty }) => {

    const { _id, name, photo, rating, price, } = ty;

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <div data-aos="flip-right" className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img className="w-full h-56" src={photo} /></figure>
            <div className="text-left p-6 space-y-4">
                <h2 className="text-3xl text-[#FF69B4]">{name}</h2>
                <div className="flex justify-between">
                    <p>Price: ${price}</p>
                    <Rating
                        placeholderRating={rating}
                        emptySymbol={<FaRegStar />}
                        readonly
                        placeholderSymbol={<FaStar className="text-warning" />}
                        fullSymbol={<FaStar />} />
                </div>
                <div className="card-actions justify-start">
                    <Link to={`/single-toy/${_id}`}>
                        <button className="btn w-full border-none hover:bg-[#ff69b4] bg-[#6495ED]">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;