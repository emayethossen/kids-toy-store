import img1 from '../../assets/banner/banner.jpg'
import img2 from '../../assets/banner/banner1.jpg'
import img3 from '../../assets/banner-img/banner.png'


const HeaderSec = () => {
    return (
        <div>
            <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full h-screen" />

                    <div className="absolute rounded-xl left-0 top-0 text-white">
                        <div className=''>
                            <div className='text-center'>
                                <h4 className='text-3xl font-bold'>Mind games</h4>
                                <h2 className='text-6xl font-bold'>Favourite Toys</h2>
                                <p>Up To 60% Off On Selected Toys</p>
                                <div>
                                    <button className="btn btn-error mr-5 text-white">Shop Now</button>
                                </div>
                            </div>
                            <img src={img3} className='w-full h-full' />
                        </div>
                    </div>


                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* slider two */}
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full h-screen" />

                    <div className="absolute rounded-xl left-0 top-0 text-white">
                        <div className=''>
                            <div className='text-center'>
                                <h4 className='text-3xl font-bold'>Mind games</h4>
                                <h2 className='text-6xl font-bold'>Favourite Toys</h2>
                                <p>Up To 60% Off On Selected Toys</p>
                                <div>
                                    <button className="btn btn-error mr-5 text-white">Shop Now</button>
                                </div>
                            </div>
                            <img src={img3} className='w-full h-full' />
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderSec;