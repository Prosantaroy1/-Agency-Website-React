import { Carousel } from 'flowbite-react';
import React from 'react';
import bannerImg from '../../../assets/img/Illustration.png'

const Banner = () => {
    return (
        <div className='bg-[#f5f2f2]'>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto h-screen min-h-screen'>
                <Carousel className='w-full mx-auto'>
                    {/**banner slide one */}
                    <div className='md:my-6 my-28  py-12 lg:px-16 px-1 flex md:flex-row flex-col  items-center justify-between  gap-12'>
                        {/**banner text */}
                        <div className='md:w-1/2 '>
                            <h1 className='text-6xl text-[#4D4D4D] mb-4 font-s  leading-snug'>
                                Lessons and insights<br/> <span className='text-[#62f062] leading-snug'>from 8 years</span>
                            </h1>
                            <p className='mb-8 text-[#4D4D4D] text-base'>
                                Where to grow your business as a photographer: site or social media?
                            </p>
                            <button className='bg-[#55f177] text-white rounded hover:bg-slate-600 px-7 py-2 transition-all duration-300 hover:-translate-y-4'>Register</button>
                        </div>
                        <div>
                            <img src={bannerImg} alt="" />
                        </div>
                    </div>
                    <div className='md:my-6 my-28  py-12 lg:px-16 px-1 flex md:flex-row flex-col  items-center justify-between  gap-12'>
                        {/**banner text */}
                        <div className='md:w-1/2 '>
                            <h1 className='text-5xl text-[#4D4D4D] mb-4 font-s  leading-snug'>
                                Lessons and insights<br/> <span className='text-[#62f062] leading-snug'>from 8 years</span>
                            </h1>
                            <p className='mb-8 text-[#4D4D4D] text-base'>
                                Where to grow your business as a photographer: site or social media?
                            </p>
                            <button className='bg-[#55f177] text-white rounded hover:bg-slate-600 px-7 py-2 transition-all duration-300 hover:-translate-y-4'>Register</button>
                        </div>
                        <div>
                            <img src={bannerImg} alt="" />
                        </div>
                    </div>
                  
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;