
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
                    <img src="https://i.ibb.co/Nx8qmwL/istockphoto-1464419061-170667a.jpg" className="h-20 lg:h-72 w-full rounded-xl" />
                </div>
                {/* card two */}
                <div data-aos="flip-right" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/hgty8HJ/istockphoto-473745612-170667a.jpg" className="h-20 lg:h-72 w-full rounded-xl" />
                </div>
                {/* card three */}
                <div data-aos="flip-left" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/2jbnHPX/istockphoto-176000800-170667a.jpg" className="h-20 lg:h-72 w-full rounded-xl" />
                </div>
                {/* card 4 */}
                <div data-aos="flip-right" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/4dQR4Sp/istockphoto-615108878-170667a.jpg" className="h-20 lg:h-72 w-full rounded-xl" />
                </div>
                {/* card 5 */}
                <div data-aos="flip-left" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/JF6XjGN/istockphoto-530668513-170667a.jpg" className="h-20 lg:h-72 w-full rounded-xl" />
                </div>
                {/* card 6 */}
                <div data-aos="flip-right" className="carousel-item relative w-full lg:col-span-2">
                    <img src="https://i.ibb.co/z5pfHJZ/istockphoto-1363471030-170667a.jpg" className="h-20 lg:h-72 w-full rounded-xl" />
                </div>

                {/* card one */}
                <div data-aos="flip-left" className="carousel-item relative lg:hidden w-full lg:col-span-2">
                    <img src="https://i.ibb.co/MNY1TZ3/istockphoto-466333918-170667a.jpg" className="h-20 lg:h-72 w-full rounded-xl" />
                </div>
                {/* card two */}
                <div data-aos="flip-right" className="carousel-item relative lg:hidden w-full">
                    <img src="https://i.ibb.co/8MHbkPp/istockphoto-1209135785-170667a.jpg" className="h-20 lg:h-72 w-full rounded-xl" />
                </div>
                {/* card three */}
                <div data-aos="flip-left" className="carousel-item relative lg:hidden w-full">
                    <img src="https://i.ibb.co/x2kbDZ0/istockphoto-1365882880-170667a.jpg" className="h-20 lg:h-72 w-full rounded-xl" />
                </div>
                {/* card 4 */}
                <div data-aos="flip-right" className="carousel-item relative lg:hidden w-full">
                    <img src="https://i.ibb.co/87ZsbWJ/istockphoto-1384054751-170667a.jpg" className="h-20 lg:h-72 w-full rounded-xl" />
                </div>
                {/* card 5 */}
                <div data-aos="flip-left" className="carousel-item relative lg:hidden w-full">
                    <img src="https://i.ibb.co/s6CHWWN/istockphoto-1199194264-170667a.jpg" className="h-20 lg:h-72 w-full rounded-xl" />
                </div>
                {/* card 6 */}
                <div data-aos="flip-right" className="carousel-item relative lg:hidden w-full lg:col-span-2">
                    <img src="https://i.ibb.co/k5mdW31/istockphoto-1212259442-170667a.jpg" className="h-20 lg:h-72 w-full rounded-xl" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;