import { useState } from "react";
import logo from '../../../assets/img/Icon.png'
import { Link } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";

const Navber = () => {
    //toggle jonno
    const [isMenuOpne, SetIsMenuOpen] = useState(false);
    const Togglehandle = () => {
        SetIsMenuOpen(!isMenuOpne);
    }

    //link item
    const navItems = [
        { link: 'Home', path: 'home' },
        { link: 'Services', path: 'services' },
        { link: 'About', path: 'about' },
        { link: 'Product', path: 'product' },
        { link: 'Testimonial', path: 'testimonial' },
        { link: 'FAQ', path: 'faq' },
    ];

    return (
       <div className='bg-[#f3f0eb]'>
            <header className="container mx-auto ">
                <nav className="lg:px-14 px-4 py-6 ">
                    <div className="flex justify-between items-center text-base gap-8">
                        {/**navber logo */}
                        <a href="#" className="text-2xl font-semibold flex items-center space-x-4">
                            <img src={logo} alt="" className="w-10 items-center inline-block" /><span>Pexcent</span>
                        </a>
                        {/**nav link item */}
                        <ul className="md:block hidden space-x-12">
                            {
                                navItems.map(({ link, path }) => <Link key={path}  spy={true}
                                    smooth={true}
                                    offset={-50} activeClass="active" className="text-black text-xl hover:text-green-300 first:font-medium" >{link}</Link>)
                            }
                        </ul>
                        {/**large device */}
                        <div className="lg:flex items-center hidden space-x-10">
                            <Link to='/login' className="hidden lg:flex items-center text-xl text-green-400 hover:text-black]">Login</Link>
                            <Link to='/signup'>
                                <button className="bg-[#4CAF4F] text-white text-xl rounded py-2 px-4 transition-all duration-300 hover:bg-emerald-600 ">SignUp</button>
                            </Link>
                        </div>
                        {/**togglemenu */}
                        <div className="md:hidden">
                            <button onClick={Togglehandle} className="text-[#726c6c] focus:outline-none focus:text-[#807d7d]">
                                {
                                    isMenuOpne ? (<FaXmark className='w-6 h-6' />) : (<FaBars className="w-6 h-6" />)
                                }
                            </button>
                        </div>
                        {/**moblie device */}
                        <div className={`space-y-10 px-4 py-7 mt-16 absolute top-0 left-0  bg-[#000000] overflow-visible ${isMenuOpne ? 'block fixed top-0 right-0 left-0' : 'hidden'}`}>
                            {
                                navItems.map(({ link, path }) => <Link key={path}  spy={true}
                                    smooth={true}
                                    offset={-50} activeClass="active" className="flex items-center hover:text-green-300  justify-center  text-white  first:font-medium" >{link}</Link>)
                            }
                            <Link className="flex justify-center items-center" to='/signup'>
                                <button className="bg-[#4CAF4F] text-white rounded py-2 px-4 transition-all duration-300 hover:bg-emerald-600 ">SignUp</button>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navber;