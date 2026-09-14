
import Logo from './assets/logo-text.png'


const Footer = () => {
    return (
        <footer className="bg-white border-t-2 border-gray-200 pt-14 px-5 sm:px-10 lg:px-20 mt-20">
            <div className="container mx-auto sm:px-5">
                <div className="flex flex-col items-center text-center gap-10 lg:flex-row lg:items-start lg:text-left lg:justify-between lg:gap-10">
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-4 max-w-sm">
                        <div className="flex items-center gap-2">
                            <img src={Logo} alt="" />
                        </div>
                        <p className="text-gray-500 text-sm">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>
                        <div className="flex gap-5 text-sm font-medium">
                            <a className="hover:text-pink-500" href="">GitHub</a>
                            <a className="hover:text-pink-500" href="">Twitter</a>
                            <a className="hover:text-pink-500" href="">LinkedIn</a>
                        </div>
                    </div>
                    <div className="hidden lg:flex flex-col gap-3">
                        <h3 className="text-sm font-bold tracking-wide">PRODUCT</h3>
                        <a className="text-gray-500 text-sm hover:text-pink-500" href="">Home</a>
                        <a className="text-gray-500 text-sm hover:text-pink-500" href="">Technologies</a>
                        <a className="text-gray-500 text-sm hover:text-pink-500" href="">Projects</a>
                    </div>
                    <div className="hidden lg:flex flex-col gap-3">
                        <h3 className="text-sm font-bold tracking-wide">COMPANY</h3>
                        <a className="text-gray-500 text-sm hover:text-pink-500" href="">About</a>
                        <a className="text-gray-500 text-sm hover:text-pink-500" href="">Contact</a>
                        <a className="text-gray-500 text-sm hover:text-pink-500" href="">Careers</a>
                    </div>
                    <div className="hidden lg:flex flex-col gap-3">
                        <h3 className="text-sm font-bold tracking-wide">LEGAL</h3>
                        <a className="text-gray-500 text-sm hover:text-pink-500" href="">Privacy Policy</a>
                        <a className="text-gray-500 text-sm hover:text-pink-500" href="">Terms of Service</a>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left border-t-2 border-gray-200 mt-10 py-6 text-sm text-gray-500">
                    <p>&copy; 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex gap-5">
                        <a className="hover:text-pink-500" href="">Privacy</a>
                        <a className="hover:text-pink-500" href="">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;