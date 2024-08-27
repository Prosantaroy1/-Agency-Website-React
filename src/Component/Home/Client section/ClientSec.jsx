import React from 'react';
import img1 from '../../../assets/img/Logo (1).png'
import img2 from '../../../assets/img/Logo (2).png'
import img3 from '../../../assets/img/Logo (3).png'
import img4 from '../../../assets/img/Logo (4).png'
import img5 from '../../../assets/img/Logo (5).png'
import img6 from '../../../assets/img/Logo (6).png'
import img7 from '../../../assets/img/Logo.png'
import icon1 from '../../../assets/img/about1.png'
import icon2 from '../../../assets/img/about2.png'
import icon3 from '../../../assets/img/about3.png'

const ClientSec = () => {
    return (
        <div className='pt-12 px-14 container mx-auto'>
            <h3 className='text-center font-sans font-bold text-4xl text-black'>Our Clients</h3>
            <p className='text-center pt-2'>We have been working with some Fortune 500+ clients</p>
            {/**company logo clients */}
            <div className='flex overflow-x-auto justify-between pt-10 items-center gap-6 lg:px-16 px-1'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img4} alt="" />
                <img src={img3} alt="" />
                <img src={img6} alt="" />
                <img src={img5} alt="" />
                <img src={img7} alt="" />
            </div>
            {/**service section */}
            <div className='pt-16'>
                <h3 className='text-3xl text-center font-sans font-semibold pb-2'>Manage your entire community in<br/> a single system</h3>
                <p className='text-center'>
                    Who is Nextcent suitable for?
                </p>
                {/**card */}
                <div className='flex justify-between flex-wrap gap-y-12 lg:px-16 px-1  items-center pt-14'>
                    <div className='flex justify-center items-center space-y-4 flex-col'>
                        <img src={icon1} alt="" />
                        <h3>Membership Organisations</h3>
                        <p className='text-center'>
                        Our membership management<br/> software provides full automation of<br/> membership renewals and payments
                        </p>
                    </div>
                    <div className='flex justify-center items-center space-y-4 flex-col'>
                        <img src={icon2} alt="" />
                        <h3>National Associations</h3>
                        <p className='text-center'>
                        Our membership management software<br/> provides full automation of<br/> membership renewals and payments
                        </p>
                    </div>
                    <div className='flex justify-center items-center space-y-4 flex-col'>
                        <img src={icon3} alt="" />
                        <h3>Clubs And Groups</h3>
                        <p className='text-center'>
                        Our membership management<br/> software provides full automation <br/>of membership renewals and payments
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientSec;