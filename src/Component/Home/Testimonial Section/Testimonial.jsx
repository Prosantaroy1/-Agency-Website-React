import React from 'react';
import img1 from '../../../assets/img/image 18.png'
import img2 from '../../../assets/img/image 19.png'
import img3 from '../../../assets/img/image 20.png'
import { GoArrowRight } from 'react-icons/go';

const Testimonial = () => {
    return (
        <div className='pb-32'>
            <div className='pt-14 container mx-auto'>
                <div className='space-y-5 px-8'>
                    <h3 className='text-3xl font-sans font-bold text-center'>
                        Caring is the new marketing
                    </h3>
                    <p className='text-center'>
                        The Nexcent blog is the best place to read about the latest membership
                        insights,<br /> trends and more. See who's joining the community,
                        read about how our community <br />are increasing their membership income and lot's more.
                    </p>
                    {/**card testimonial */}
                    <div className='flex lg:flex-nowrap flex-wrap gap-14 justify-center items-center lg:px-16 px-2'>
                        <div className='flex flex-col relative  border border-slate-400 rounded shadow-md'>
                            <img src={img1} alt="" className='w-72 bg-right' />
                            <div className='bg-[#f7efef] absolute px-4 -bottom-10 left-7 py-5 space-y-3 flex flex-col items-center rounded-r-xl rounded-l-lg'>
                                <h3 className='text-center'>Creating Streamlined <br />Safeguarding Processes with<br /> OneRen</h3>
                                <a href="#" className='text-[#589e29] flex items-center gap-2 font-semibold'>Read More<span><GoArrowRight /></span></a>
                            </div>
                        </div>
                        <div className='flex flex-col relative  border border-slate-400 rounded shadow-md'>
                            <img src={img2} alt="" className='w-72 bg-right' />
                            <div className='bg-[#f7efef] absolute px-4 -bottom-10 left-7 py-5 space-y-3 flex flex-col items-center rounded-r-xl rounded-l-lg'>
                                <h3 className='text-center'>What are your safeguarding<br /> responsibilities and how can<br /> you manage them?</h3>
                                <a href="#" className='text-[#589e29] flex items-center gap-2 font-semibold'>Read More<span><GoArrowRight /></span></a>
                            </div>
                        </div>
                        <div className='flex flex-col relative  border border-slate-400 rounded shadow-md'>
                            <img src={img3} alt="" className='w-72 bg-right' />
                            <div className='bg-[#f7efef] absolute px-4 -bottom-10 left-7 py-5 space-y-3 flex flex-col items-center rounded-r-xl rounded-l-lg'>
                                <h3 className='text-center'>Creating Streamlined <br />Safeguarding Processes with<br /> OneRen</h3>
                                <a href="#" className='text-[#589e29] flex items-center gap-2 font-semibold'>Read More<span><GoArrowRight /></span></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;