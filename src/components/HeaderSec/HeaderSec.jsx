import img1 from '../../assets/banner/banner.jpg'
import img2 from '../../assets/banner/banner1.jpg'
import img3 from '../../assets/banner-img/banner.png'
import img4 from '../../assets/banner-img/banner2.png'
import AOS  from 'aos/dist/aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const HeaderSec = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <div>
            <div className="carousel w-full">
                {/* slider one */}
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full h-[740px] lg:h-[540px]" />

                    <div className="absolute rounded-xl left-0 top-14  text-white w-full">
                        <div className='lg:flex lg:gap-36 items-center justify-center lg:flex-row-reverse space-y-8'>
                            <div data-aos="flip-left" className='flex justify-center items-center'>
                                <img src={img3} className='w-[400px] h-[420px] lg:w-440px] lg:h-[480px]' />
                            </div>
                            <div className='text-center space-y-4'>
                                <h4 data-aos="flip-left" className='lg:text-3xl text-2xl font-semibold uppercase'>Mind games</h4>
                                <h2 data-aos="fade-up" className='lg:text-6xl text-4xl font-bold'>Favourite Toys</h2>
                                <p data-aos="fade-down" className='bg-[#FF69B4] py-2 font-semibold w-80 rounded-xl mx-auto'>Up To <span className='text-2xl font-bold'>60%</span> Off On Selected Toys</p>
                                <div>
                                    <button data-aos="flip-right" className="btn btn-error text-white">Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* slide two */}
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full h-[740px] lg:h-[540px]" />

                    <div className="absolute rounded-xl left-0 top-14  text-white w-full">
                        <div className='lg:flex lg:gap-36 items-center justify-center space-y-8'>
                            <div data-aos="flip-left" className='flex justify-center items-center'>
                                <img data-aos="flip-left" src={img4} className='w-[400px] h-[420px] lg:w-440px] lg:h-[480px]' />
                            </div>
                            <div className='text-center space-y-4'>
                                <h4 data-aos="flip-left" className='lg:text-3xl text-2xl font-semibold uppercase'>Mind games</h4>
                                <h2 data-aos="fade-up" className='lg:text-6xl text-4xl font-bold'>Favourite Toys</h2>
                                <p data-aos="fade-down" className='bg-[#FF69B4] py-2 font-semibold w-80 rounded-xl mx-auto'>Up To <span className='text-2xl font-bold'>60%</span> Off On Selected Toys</p>
                                <div>
                                    <button data-aos="flip-right" className="btn btn-error text-white">Shop Now</button>
                                </div>
                            </div>
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