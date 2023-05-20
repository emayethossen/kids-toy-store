
const SingleToy = ({ ty }) => {

    const { name, photo, rating, price, } = ty;

    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img className="w-full h-64" src={photo} /></figure>
            <div className="text-left p-6 space-y-4">
                <h2 className="text-3xl">{name}</h2>
                <p>Price: ${price}</p>
                <p>Rating: {rating}</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;