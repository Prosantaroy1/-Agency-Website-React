import React from 'react';
import productImg from "../../../assets/img/pana.png"
import Img2 from "../../../assets/img/image 9.png"
import icon1 from '../../../assets/img/Logo (1).png'
import icon2 from '../../../assets/img/Logo (2).png'
import icon3 from '../../../assets/img/Logo (3).png'
import icon4 from '../../../assets/img/Logo (4).png'
import icon5 from '../../../assets/img/Logo (5).png'
import { GoArrowRight } from "react-icons/go";

const ProductSec = () => {

    return (
        <div className='pt-12 mb-3'>
            {/**part1 open */}
            <div className='flex lg:px-16 px-1 items-center  justify-center gap-20'>
                <div className='space-y-6'>
                    <h2 className='text-3xl font-sans font-semibold'>How to design your site footer like<br /> we did</h2>
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
                <img src={productImg} alt="" className='w-[460px]' />
            </div>
            {/**part2 open  */}
            <div className='pt-14 py-8 bg-[#F5F7FA] mt-8'>
                <div className='flex items-center justify-center gap-14 px-16'>
                    <img src={Img2} alt="" />
                    <div className='space-y-4'>
                        <p className='font-sans'>
                            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui,<br/>
                            vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero<br/>
                            ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit<br/>
                            elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse<br/>
                            cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget<br/>
                            lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien,<br/>
                            vitae placerat ante feugiat eget. Quisque vulputate odio neque,<br/>
                            eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.<br/>
                        </p>
                        <h3 className='font-bold text-xl text-[#61ff42]'>Prosanta Roy</h3>
                        <p>British Dragon Boat Racing Association</p>
                        <div className='flex items-center gap-8 pt-3'>
                            <img src={icon1} alt="" />
                            <img src={icon2} alt="" />
                            <img src={icon3} alt="" />
                            <img src={icon4} alt="" />
                            <img src={icon5} alt="" />
                            <a href="#" className='text-[#589e29] flex items-center gap-2 font-semibold'>Meet All Customer<span><GoArrowRight/></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSec;