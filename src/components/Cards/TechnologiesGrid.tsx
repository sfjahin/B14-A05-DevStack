import TechnologyCard from './TechnologyCard';
import type { Itechnology } from '../../types/Itechnology';

interface TechnologiesGridProps {
    technologies: Itechnology[];
    selectedStack: Itechnology[];
    onAddToStack: (technology: Itechnology) => void;
}

const TechnologiesGrid = ({ technologies, selectedStack, onAddToStack }: TechnologiesGridProps) => {
    return (

        <div className='w-full'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto'>
                {technologies.map(technology => (
                    <TechnologyCard
                        key={technology.id}
                        technology={technology}
                        isSelected={selectedStack.some(item => item.id === technology.id)}
                        onAddToStack={onAddToStack}
                    />
                ))}
            </div>
        </div>

    );
};

export default TechnologiesGrid;