import { FaTimes } from 'react-icons/fa';
import type { Itechnology } from '../../types/Itechnology';

interface ISelectedStacksProps {
    selectedStack: Itechnology[];
    onRemoveFromStack: (id: string) => void;
}

const SelectedStacks = ({ selectedStack, onRemoveFromStack }: ISelectedStacksProps) => {
    return (
        <div className='flex flex-col divide-y divide-gray-200'>
            {selectedStack.map(technology => (
                <div
                    key={technology.id}
                    className='flex justify-between items-center gap-2 p-3'
                >
                    <div className='flex items-center gap-2'>
                        <img className='w-[30px] h-[30px]' src={technology.icon} alt={technology.name} />
                        <div>
                            <p className='font-medium'>{technology.name}</p>
                            <p className='text-sm text-gray-500'>{technology.category}</p>
                        </div>
                    </div>
                    <button
                        onClick={() => onRemoveFromStack(technology.id)}
                        className='text-gray-400 hover:text-pink-600'
                    >
                        <FaTimes />
                    </button>
                </div>
            ))}
        </div>
    );
};

export default SelectedStacks;