import img1 from '../../assets/gallery-pic/img1.jpg'
import img2 from '../../assets/gallery-pic/img2.jpg'
import img3 from '../../assets/gallery-pic/img3.jpg'
import img4 from '../../assets/gallery-pic/img4.jpg'
import img5 from '../../assets/gallery-pic/img5.jpg'
import img6 from '../../assets/gallery-pic/img6.jpg'
import img7 from '../../assets/gallery-pic/img7.jpg'

const NewArrival = () => {
    return (
        <div className='my-12'>
            <h2 className='text-3xl lg:text-5xl font-bold text-center'>New Arrivals</h2>
            <p className='text-center'>Shop great Toys for your kids</p>
            <div className='lg:grid grid-cols-4 gap-4 mx-16'>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={img3} /></figure>
                <h2 className="card-title">Shoes!</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={img3} /></figure>
                <h2 className="card-title">Shoes!</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={img3} /></figure>
                <h2 className="card-title">Shoes!</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={img3} /></figure>
                <h2 className="card-title">Shoes!</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default NewArrival;