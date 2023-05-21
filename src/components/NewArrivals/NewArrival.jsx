import img1 from '../../assets/arrival-img/img1.jpg';
import img2 from '../../assets/arrival-img/img2.jpg';
import img3 from '../../assets/arrival-img/img3.jpg';
import img4 from '../../assets/arrival-img/img4.jpg';
import img5 from '../../assets/arrival-img/img5.jpg';
import img7 from '../../assets/arrival-img/img7.jpg';
import AOS  from 'aos/dist/aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const NewArrival = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <div className='my-12'>
            <h2 className='text-3xl lg:text-5xl font-bold text-center text-[#FF69B4]'>New Arrivals Toys</h2>
            <p className='text-center font-semibold my-4'>Shop great Toys for your kids</p>

            <div className='lg:grid grid-cols-4 gap-4  lg:space-y-0 space-y-4 mx-16'>
                {/* card one */}
                <div data-aos="flip-left" className="carousel-item relative w-full col-span-2">
                    <img src={img1} className="h-72 w-full rounded-xl" />
                    <div className="absolute rounded-xl left-5 top-10">
                        <div className=''>
                            <div className='space-y-4'>
                                <h4 className='text-3xl font-bold uppercase text-[#FF69B4]'>Wooden toys</h4>
                                <p className='font-semibold text-gray-700'>Shape the tree.</p>
                                <div>
                                    <button className="btn bg-[#6495ED] border-none hover:bg-[#FF69B4]">Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card two */}
                <div data-aos="flip-right" className="carousel-item relative w-full">
                    <img src={img2} className="h-72 w-full rounded-xl" />
                    <div className="absolute rounded-xl left-5 top-10">
                        <div className=''>
                            <div className='space-y-4'>
                                <h4 className='text-3xl font-bold uppercase text-[#FF69B4]'>Duck toys</h4>
                                <div>
                                    <button className="btn bg-[#6495ED] border-none hover:bg-[#FF69B4]">Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card three */}
                <div data-aos="flip-left" className="carousel-item relative w-full">
                    <img src={img3} className="h-72 w-full rounded-xl" />
                    <div className="absolute rounded-xl left-5 top-10">
                        <div className=''>
                            <div className='space-y-4'>
                                <h4 className='text-3xl font-bold uppercase text-[#FF69B4]'>Brick block</h4>
                                <div>
                                    <button className="btn bg-[#6495ED] border-none hover:bg-[#FF69B4]">Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card 4 */}
                <div data-aos="flip-right" className="carousel-item relative w-full">
                    <img src={img4} className="h-72 w-full rounded-xl" />
                    <div className="absolute rounded-xl left-5 top-10">
                        <div className=''>
                            <div className='space-y-4'>
                                <h4 className='text-3xl font-bold uppercase text-[#FF69B4]'>car toys</h4>
                                <div>
                                    <button className="btn bg-[#6495ED] border-none hover:bg-[#FF69B4]">Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card 5 */}
                <div data-aos="flip-left" className="carousel-item relative w-full">
                    <img src={img5} className="h-72 w-full rounded-xl" />
                    <div className="absolute rounded-xl left-5 top-10">
                        <div className=''>
                            <div className='space-y-4'>
                                <h4 className='text-3xl font-bold uppercase text-[#FF69B4]'>Dominoes toys</h4>
                                <div>
                                    <button className="btn bg-[#6495ED] border-none hover:bg-[#FF69B4]">Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card 6 */}
                <div data-aos="flip-right" className="carousel-item relative w-full col-span-2">
                    <img src={img7} className="h-72 w-full rounded-xl" />
                    <div className="absolute rounded-xl left-5 top-10">
                        <div className=''>
                            <div className='space-y-4'>
                                <h4 className='text-3xl font-bold uppercase text-[#FF69B4]'>House</h4>
                                <p className='font-semibold text-gray-700'>Model of baby wooden
                                    toys assembled....</p>
                                <div>
                                    <button className="btn bg-[#6495ED] border-none hover:bg-[#FF69B4]">Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewArrival;