import '../index.css'
import logo from "../assets/logo-text.png";


const Nav =
    () => {

        return (
            <nav className="bg-white flex items-center justify-center container mx-auto py-5 border-b-2 border-gray-200 mx-auto py-5 px-20 sticky top-0">
                <div className="flex items-center justify-between w-full">
                    <div>
                        <img className="w-40" src={logo} alt="" />
                    </div>
                    <div className="flex gap-5 items-center font-medium text-current">
                        <a className="hover:text-pink-500 text-pink-500" href="">Home</a>
                        <a className="hover:text-pink-500" href="">Technologies</a>
                        <a className="hover:text-pink-500" href="">Projects</a>
                        <a className="hover:text-pink-500" href="">About</a>
                        <a className="hover:text-pink-500" href="">Contact</a>
                    </div>
                    <div className="flex gap-5 items-center font-medium text-5">
                        <button>Sign In</button>
                        <button className='bg-pink-600 rounded-full p-2 w-25 text-white'>Sign Up</button>
                    </div>
                </div>
            </nav>
        );
    };

export default Nav;