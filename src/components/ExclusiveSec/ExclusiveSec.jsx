import img1 from '../../assets/exclusive-pic/img1.jpg';
import img2 from '../../assets/exclusive-pic/img2.jpg';
import img3 from '../../assets/exclusive-pic/img3.jpg';
import img4 from '../../assets/exclusive-pic/img4.jpg';
import img5 from '../../assets/exclusive-pic/img5.jpg';
import img9 from '../../assets/exclusive-pic/img9.jpg';
import img7 from '../../assets/exclusive-pic/img7.jpg';
import img8 from '../../assets/exclusive-pic/img8.jpg';
import AOS  from 'aos/dist/aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const ExclusiveSec = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <div className='lg:mx-10'>
            <h2 className='text-center text-lg lg:text-3xl mt-12 uppercase font-semibold tracking-widest text-[#FF69B4]'>Trending Products</h2>
            <p className='lg:text-5xl text-3xl mb-12 font-bold text-center text-[#FF69B4]'>Exclusive Collection</p>
            <div className='grid lg:grid-cols-4 grid-cols-1 gap-4'>
                <div data-aos="flip-left" className='rounded-lg bg-base-200 shadow-xl p-2 text-center mx-16 lg:mx-0'>
                    <figure><img className='h-48 rounded w-full' src={img1} /></figure>
                    <div className="card-body">
                        <p className='font-semibold'>Unique Omnesque Percipitur</p>
                        <p className='font-semibold'>Price: $26.79</p>
                        <div className="card-actions justify-center">
                            <div className="badge badge-outline uppercase bg-[#6495ED] border-none text-white px-12 py-4 font-bold hover:bg-[#FF69B4]">Add to cart</div>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-left" className="rounded-lg bg-base-200 shadow-xl p-2 text-center mx-16 lg:mx-0">
                    <figure><img className='h-48 rounded w-full' src={img2} /></figure>
                    <div className="card-body">
                        <p className='font-semibold'>Unique Omnesque Percipitur</p>
                        <p className='font-semibold'>Price: $26.79</p>
                        <div className="card-actions justify-center">
                            <div className="badge badge-outline uppercase bg-[#6495ED] border-none text-white px-12 py-4 font-bold hover:bg-[#FF69B4]">Add to cart</div>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-left" className="rounded-lg bg-base-200 shadow-xl p-2 text-center mx-16 lg:mx-0">
                    <figure><img className='h-48 rounded w-full' src={img3} /></figure>
                    <div className="card-body">
                        <p className='font-semibold'>Unique Omnesque Percipitur</p>
                        <p className='font-semibold'>Price: $26.79</p>
                        <div className="card-actions justify-center">
                            <div className="badge badge-outline uppercase bg-[#6495ED] border-none text-white px-12 py-4 font-bold hover:bg-[#FF69B4]">Add to cart</div>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-left" className="rounded-lg bg-base-200 shadow-xl p-2 text-center mx-16 lg:mx-0">
                    <figure><img className='h-48 rounded w-full' src={img4} /></figure>
                    <div className="card-body">
                        <p className='font-semibold'>Unique Omnesque Percipitur</p>
                        <p className='font-semibold'>Price: $26.79</p>
                        <div className="card-actions justify-center">
                            <div className="badge badge-outline uppercase bg-[#6495ED] border-none text-white px-12 py-4 font-bold hover:bg-[#FF69B4]">Add to cart</div>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-left" className="rounded-lg bg-base-200 shadow-xl p-2 text-center mx-16 lg:mx-0">
                    <figure><img className='h-48 rounded w-full' src={img5} /></figure>
                    <div className="card-body">
                        <p className='font-semibold'>Unique Omnesque Percipitur</p>
                        <p className='font-semibold'>Price: $26.79</p>
                        <div className="card-actions justify-center">
                            <div className="badge badge-outline uppercase bg-[#6495ED] border-none text-white px-12 py-4 font-bold hover:bg-[#FF69B4]">Add to cart</div>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-left" className="rounded-lg bg-base-200 shadow-xl p-2 text-center mx-16 lg:mx-0">
                    <figure><img className='h-48 rounded w-full' src={img9} /></figure>
                    <div className="card-body">
                        <p className='font-semibold'>Unique Omnesque Percipitur</p>
                        <p className='font-semibold'>Price: $26.79</p>
                        <div className="card-actions justify-center">
                            <div className="badge badge-outline uppercase bg-[#6495ED] border-none text-white px-12 py-4 font-bold hover:bg-[#FF69B4]">Add to cart</div>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-left" className="rounded-lg bg-base-200 shadow-xl p-2 text-center mx-16 lg:mx-0">
                    <figure><img className='h-48 rounded w-full' src={img7} /></figure>
                    <div className="card-body">
                        <p className='font-semibold'>Unique Omnesque Percipitur</p>
                        <p className='font-semibold'>Price: $26.79</p>
                        <div className="card-actions justify-center">
                            <div className="badge badge-outline uppercase bg-[#6495ED] border-none text-white px-12 py-4 font-bold hover:bg-[#FF69B4]">Add to cart</div>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-left" className="rounded-lg bg-base-200 shadow-xl p-2 text-center mx-16 lg:mx-0">
                    <figure><img className='h-48 rounded w-full' src={img8} /></figure>
                    <div className="card-body">
                        <p className='font-semibold'>Unique Omnesque Percipitur</p>
                        <p className='font-semibold'>Price: $26.79</p>
                        <div className="card-actions justify-center">
                            <div className="badge badge-outline uppercase bg-[#6495ED] border-none text-white px-12 py-4 font-bold hover:bg-[#FF69B4]">Add to cart</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExclusiveSec;