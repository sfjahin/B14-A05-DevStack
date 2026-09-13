import banner from '../assets/banner-stack.png'

const Hero = () => {
    return (
        <div className="flex justify-center items-center p-20">
            <div className="w-full flex justify-between items-center container mx-auto">
                <div>
                    <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">Build Your Ideal <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600">Development Stack</span></h1>
                    <p className="mt-4 text-lg text-slate-500 max-w-2xl">Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>
                    <div className="flex justify-start gap-5 w-full mt-10">
                        <button className="w-50 bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2.5 rounded-md text-white font-medium">Explore Technologies</button>
                        <button className="w-50 border-2 border-slate-300 px-4 py-2.5 rounded-md text-slate-500 font-medium">Learn More</button>
                    </div>
                </div>
                <img src={banner} alt="" />
            </div>
        </div>
    )
}

export default Hero;