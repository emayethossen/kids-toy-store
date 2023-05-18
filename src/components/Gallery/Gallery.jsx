import img1 from '../../assets/gallery-pic/img1.jpg'
import img2 from '../../assets/gallery-pic/img2.jpg'
import img3 from '../../assets/gallery-pic/img3.jpg'
import img4 from '../../assets/gallery-pic/img4.jpg'
import img5 from '../../assets/gallery-pic/img5.jpg'
import img6 from '../../assets/gallery-pic/img6.jpg'
import img7 from '../../assets/gallery-pic/img7.jpg'

const Gallery = () => {
    return (
        <div className='grid m-1 grid-cols-8 lg:gap-4 gap-1'>
            <div className='row-span-2 col-span-3 lg:rounded-xl rounded shadow-xl'>
                <img className='lg:rounded-xl rounded h-full w-full' src={img2} alt="" />
            </div>

            <div className='lg:rounded-xl rounded col-span-3 shadow-xl'>
                <img className='lg:rounded-xl rounded h-full w-full' src={img3} alt="" />
            </div>

            <div className='lg:rounded-xl rounded col-span-2 shadow-xl'>
                <img className='lg:rounded-xl rounded h-full w-full' src={img4} alt="" />
            </div>
            <div className='lg:rounded-xl rounded col-span-2 shadow-xl'>
                <img className='lg:rounded-xl rounded h-full w-full' src={img5} alt="" />
            </div>
            <div className='lg:rounded-xl rounded col-span-3 shadow-xl'>
                <img className='lg:rounded-xl rounded h-full w-full' src={img6} alt="" />
            </div>
            <div className='lg:rounded-xl rounded col-span-2 shadow-xl'>
                <img className='lg:rounded-xl rounded h-full w-full' src={img1} alt="" />
            </div>

            <div className='lg:rounded-xl rounded col-span-3 shadow-xl '>
                <img className='lg:rounded-xl rounded h-full w-full' src={img2} alt="" />
            </div>
            <div className='lg:rounded-xl rounded col-span-3 shadow-xl row-span-2'>
                <img className='lg:rounded-xl rounded h-full w-full' src={img7} alt="" />
            </div>
            <div className='lg:rounded-xl rounded col-span-3 shadow-xl'>
                <img className='lg:rounded-xl rounded h-full w-full' src={img3} alt="" />
            </div>

            <div className='lg:rounded-xl rounded col-span-2 shadow-xl'>
                <img className='lg:rounded-xl rounded h-full w-full' src={img4} alt="" />
            </div>

        </div>
    );
};

export default Gallery;