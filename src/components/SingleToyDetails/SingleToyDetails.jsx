import { useLoaderData } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const SingleToyDetails = () => {

    const toys = useLoaderData();
    const { sellerName, details, rating, price, quantity, category, photo, email, name } = toys;
    return (
        <div className="lg:py-16 p-4 bg-[#ffe5ea] ">
            <div className="card card-compact lg:w-3/4 mx-auto bg-base-100 shadow-xl bg-gray-200">
                <figure><img className="rounded-xl lg:m-8 lg:h-96 w-full" src={photo} /></figure>
                <div className="card-body lg:ml-8">
                    <div className="flex justify-between gap-5">
                    <div className="w-1/2">
                        <h2 className="card-title text-4xl font-bold text-[#FF69B4]">{name}</h2>
                        <h1 className="text-2xl font-bold "><span className="text-[#FF69B4]">Seller-Name: </span>{sellerName}</h1>
                        <p className="text-xl font-semibold"><span className="font-semibold text-2xl">Email:</span>{email}</p>
                        
                        <p className="text-xl font-semibold"><span className="font-semibold text-2xl">Quantity:</span> {quantity}</p>
                        <p className="text-xl font-semibold"><span className="font-semibold text-2xl">Category:</span> {category}</p>
                        <p className="text-xl font-semibold"><span className="font-semibold text-2xl">Price</span>: ${price}</p>
                        <Rating
                        placeholderRating={rating}
                        emptySymbol={<FaRegStar />}
                        readonly
                        placeholderSymbol={<FaStar className="text-warning" />}
                        fullSymbol={<FaStar />} />
                        <p className="text-xl font-semibold"><span className="font-semibold text-2xl">Details:</span><br />{details}</p>
                    </div>
                    <div>
                        <img className="lg:w-96 lg:h-96" src="https://i.ibb.co/zPNM361/banner.png" alt="" />
                    </div>
                    </div>
                    <div className="card-actions justify-center">
                        <button className="btn w-1/2 border-none bg-[#6495ED]">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToyDetails;