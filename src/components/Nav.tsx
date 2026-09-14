import '../index.css'
import logo from "../assets/logo-text.png";
import { RxHamburgerMenu } from 'react-icons/rx';


const Nav =
    () => {

        return (
            <nav className="bg-white flex items-center justify-center container mx-auto py-5 border-b-2 border-gray-200 px-5 sm:px-10 lg:px-20 sticky top-0 z-10">
                <div className="flex items-center justify-between w-full">
                    <div className='lg:hidden'>
                        <RxHamburgerMenu className='h-[26px] w-[26px] sm:h-[30px] sm:w-[30px]'/>
                    </div>
                    <div>
                        <img className="w-32 sm:w-40" src={logo} alt="" />
                    </div>
                    <div className="gap-5 items-center font-medium text-current hidden lg:flex">
                        <a className="hover:text-pink-500 text-pink-500" href="">Home</a>
                        <a className="hover:text-pink-500" href="">Technologies</a>
                        <a className="hover:text-pink-500" href="">Projects</a>
                        <a className="hover:text-pink-500" href="">About</a>
                        <a className="hover:text-pink-500" href="">Contact</a>
                    </div>
                    <div className="flex gap-2 sm:gap-5 items-center font-medium text-sm sm:text-5">
                        <button>Sign In</button>
                        <button className='bg-pink-600 rounded-full px-3 py-2 sm:p-2 sm:w-25 text-white'>Sign Up</button>
                    </div>
                </div>
            </nav>
        );
    };

export default Nav;