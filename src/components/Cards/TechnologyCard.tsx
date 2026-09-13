import React, { useState } from 'react';
import { FaReact, FaStar } from 'react-icons/fa';
import type { Itechnology } from '../../types/Itechnology';
import { TiTick } from 'react-icons/ti';

interface TechnologiesGridProps {
    technology: Itechnology;
}



const TechnologyCard = ({ technology }: TechnologiesGridProps) => {
    // const [isSelected, setIsSelected] = useState(false);
    const handleStackClick = () => {
        setIsSelected(true);
    }
    return (
        <div className='flex flex-col gap-2 p-5 border-1 border-gray-300 rounded-2xl h-full'>
            <div className='flex justify-between'>
                <img className='w-[50px] h-[50px]' src={technology.icon} alt={technology.name} />
                <div className='h-8 px-3 py-1 text-[14px] bg-pink-200 rounded-full flex justify-center items-center text-pink-700'>{technology.badge}</div>
            </div>
            <div className='text-2xl font-bold'>
                <h2>{technology.name}</h2>
            </div>
            <div className='w-full'>
                {technology.description}
            </div>
            <div className='flex justify-between'>
                <button className='p-1 bg-gray-200 rounded-md text-gray-600'>{technology.category}</button>
                <p>{technology.difficulty}</p>
                <div className='flex gap-1 items-center text-yellow-500'>
                    <FaStar />
                    <h2 className='text-black'>{technology.rating}</h2>
                </div>
            </div>
            <button
                onClick={handleStackClick}
                className={`rounded-md w-full p-2 text-[18px] mt-4 flex justify-center items-center gap-1 ${isSelected ? 'bg-pink-200 text-pink-700' : 'bg-black text-white'
                    }`}
            >
                {isSelected && <TiTick className="text-xl" />}
                {isSelected ? 'Added to Stack' : 'Add to Stack'}
            </button>
        </div >
    );
};

export default TechnologyCard;