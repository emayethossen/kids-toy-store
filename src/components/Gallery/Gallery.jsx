import img2 from '../../assets/gallery-pic/img2.jpg'
import img3 from '../../assets/gallery-pic/img3.jpg'
import img4 from '../../assets/gallery-pic/img4.jpg'
import img5 from '../../assets/gallery-pic/img5.jpg'
import img6 from '../../assets/gallery-pic/img6.jpg'
import img7 from '../../assets/gallery-pic/img7.jpg'
import AOS from 'aos/dist/aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Gallery = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <div>
            <h2 className='lg:text-5xl text-3xl text-center font-bold my-6 lg:my-12 text-[#FF69B4]'>Toys Gallery</h2>
            <div className='grid lg:grid-cols-4 grid-cols-3 lg:gap-4 gap-1  lg:space-y-0 lg:mx-16'>
            {/* card one */}
            <div data-aos="flip-left" className="carousel-item relative w-full lg:col-span-2">
                <img src={img6} className="h-72 w-full rounded-xl" />
            </div>
            {/* card two */}
            <div data-aos="flip-right" className="carousel-item relative w-full">
                <img src={img2} className="h-72 w-full rounded-xl" />
            </div>
            {/* card three */}
            <div data-aos="flip-left" className="carousel-item relative w-full">
                <img src={img3} className="h-72 w-full rounded-xl" />
            </div>
            {/* card 4 */}
            <div data-aos="flip-right" className="carousel-item relative w-full">
                <img src={img4} className="h-72 w-full rounded-xl" />
            </div>
            {/* card 5 */}
            <div data-aos="flip-left" className="carousel-item relative w-full">
                <img src={img5} className="h-72 w-full rounded-xl" />
            </div>
            {/* card 6 */}
            <div data-aos="flip-right" className="carousel-item relative w-full lg:col-span-2">
                <img src={img7} className="h-72 w-full rounded-xl" />
            </div>
        </div>
        </div>
    );
};

export default Gallery;