import banner from '../assets/banner-stack.png'

const Hero = () => {
    return (
        <div className="flex justify-center items-center px-5 py-10 sm:p-12 lg:p-20">
            <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center gap-10 lg:gap-5 container mx-auto">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">Build Your Ideal <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600">Development Stack</span></h1>
                    <p className="mt-4 text-base sm:text-lg text-slate-500 max-w-2xl mx-auto lg:mx-0">Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>
                    <div className="flex justify-center lg:justify-start gap-3 sm:gap-5 w-full mt-8 sm:mt-10">
                        <button className="flex-1 sm:flex-none sm:w-50 bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2.5 rounded-md text-white font-medium">Explore Technologies</button>
                        <button className="flex-1 sm:flex-none sm:w-50 border-2 border-slate-300 px-4 py-2.5 rounded-md text-slate-500 font-medium">Learn More</button>
                    </div>
                </div>
                <img className="w-full max-w-xs sm:max-w-sm lg:max-w-none lg:w-auto" src={banner} alt="" />
            </div>
        </div>
    )
}

export default Hero;