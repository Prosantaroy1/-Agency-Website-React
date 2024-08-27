import React from 'react';
import frame from '../../../assets/img/Frame 35.png'
import icon1 from "../../../assets/img/Icon.png"
import icon2 from "../../../assets/img/Icon (1).png"
import icon3 from "../../../assets/img/Icon (2).png"
import icon4 from "../../../assets/img/Icon (4).png"

const Aboutsec = () => {
    return (
        <div>
            <div className='pt-12'>
                {/**about first part */}
                <div className='flex flex-wrap lg:px-16 px-8 items-center  justify-center gap-20'>
                    <img src={frame} alt="" className='w-[460px]' />
                    <div className='space-y-6'>
                        <h2 className='text-3xl font-sans font-semibold'>The unseen of spending three<br /> years at Pixelgrade</h2>
                        <p className='line-clamp-5'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed sit<br /> amet justo ipsum. Sed accumsan quam vitae est varius
                            fringilla. Pellentesque<br /> placerat vestibulum lorem sed porta.
                            Nullam mattis tristique iaculis. Nullam<br />pulvinar sit amet risus
                            pretium auctor. Etiam qui massa pulvinar,<br /> aliquam quam vitae, tempus
                            sem. Donec elementum pulvinar odio.
                        </p>
                        <button className="bg-[#4CAF4F] text-white rounded py-2 px-4 transition-all duration-300 hover:bg-emerald-600 ">Learn More</button>
                    </div>
                </div>
            </div>
            {/**about member section */}
            <div className='bg-[#f8f1f1]  mt-10'>
                <div className='container mx-auto mb-3 py-5 '>
                    <div className='lg:px-28 flex flex-wrap px-8 justify-between items-center px-1 space-y-4'>
                        <div>
                            <h2 className='text-3xl font-sans font-semibold'>
                                Helping a local <br /><span className='text-[#4CAF4F]'>business reinvent itself</span>
                            </h2>
                            <p className='font-sans pt-2'>
                                We reached here with our hard work and dedication
                            </p>
                        </div>
                        {/**icon about */}
                        <div className='grid grid-cols-2 gap-12'>
                            <div className='flex items-center gap-5'>
                                <img src={icon2} alt="" />
                                <div>
                                    <h3 className='font-semibold text-xl'>2,34,43,456</h3>
                                    <p>Members</p>
                                </div>
                            </div>
                            {/**second div */}
                            <div className='flex items-center gap-3'>
                                <img src={icon3} alt="" />
                                <div>
                                    <h3 className='font-semibold text-xl'>13,456</h3>
                                    <p>Clubs</p>
                                </div>
                            </div>
                            {/**third div */}
                            <div className='flex items-center gap-3'>
                                <img src={icon4} alt="" />
                                <div>
                                    <h3 className='font-semibold text-xl'>863,456</h3>
                                    <p>Event Bookings</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <img src={icon1} alt="" />
                                <div>
                                    <h3 className='font-semibold text-xl'>1,926,436</h3>
                                    <p>Payment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutsec;