import { Carousel } from 'flowbite-react';
import React from 'react';
import bannerImg from '../../../assets/img/Illustration.png'

const Banner = () => {
    return (
        <div className='bg-[#f5f2f2] lg:py-5 py-24'>
            <div className='flex justify-between flex-wrap items-center container mx-auto space-y-40'>
                {/**banner text */}
                <div className='lg:px-4 px-7'>
                    <h1 className='text-6xl text-[#4D4D4D] mb-4 font-s  leading-snug'>
                        Lessons and insights<br /> <span className='text-[#62f062] leading-snug'>from 8 years</span>
                    </h1>
                    <p className='mb-8 text-[#4D4D4D] text-base'>
                        Where to grow your business as a photographer: site or social media?
                    </p>
                    <button className='bg-[#55f177] text-white rounded hover:bg-slate-600 px-7 py-2 transition-all duration-300 hover:-translate-y-4'>Register</button>
                </div>
                <div>
                    <img src={bannerImg} alt="" className=''/>
                </div>
            </div>
        </div>

    );
};

export default Banner;