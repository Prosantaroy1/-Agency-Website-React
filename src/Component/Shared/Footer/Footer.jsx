import React from 'react';
import { CgFacebook, CgInstagram, CgTwitter, CgYoutube } from "react-icons/cg";
import logo from '../../../assets/img/Icon.png'

const Footer = () => {
    return (
        <div className=''>
            <footer className="footer lg:px-16 px-1 bg-[#181616] text-white p-10">
                <nav className='space-y-3'>
                    <a href="#" className="text-2xl font-semibold flex items-center space-x-4">
                        <img src={logo} alt="" className="w-10 items-center inline-block" /><span>Pexcent</span>
                    </a>
                    <p>Copyright © 2020 Nexcent ltd.</p>
                    <p>All rights reserved</p>
                    <div className='flex items-center gap-4'>
                        <CgFacebook className='w-6 h-6'/>
                        <CgYoutube className='w-6 h-6'/>
                        <CgTwitter className='w-6 h-6'/>
                        <CgInstagram className='w-6 h-6'/>
                    </div>

                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Support</h6>
                    <a className="link link-hover">Help center</a>
                    <a className="link link-hover">Terms of service</a>
                    <a className="link link-hover">Legal</a>
                    <a className="link link-hover">Privacy policy</a>
                </nav>
                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-white">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;