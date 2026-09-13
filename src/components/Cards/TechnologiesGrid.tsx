import React from 'react';
import TechnologyCard from './TechnologyCard';
import type { Itechnology } from '../../types/Itechnology';
import Stack from '../Stack/Stack';

interface TechnologiesGridProps {
    technologies: Itechnology[];
}

const TechnologiesGrid = ({ technologies }: TechnologiesGridProps) => {
    return (

        <div className='w-full'>
            <div className='grid grid-cols-3 gap-5 container mx-auto'>
                {technologies.map(technology => (
                    <TechnologyCard key={technology.id} technology={technology} />
                ))}
            </div>
        </div>

    );
};

export default TechnologiesGrid;