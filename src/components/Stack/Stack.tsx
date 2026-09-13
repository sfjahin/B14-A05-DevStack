import type { Itechnology } from '../../types/Itechnology';
import SelectedStacks from './SelectedStacks';


interface IStackProps {
    selectedStack: Itechnology[];
    onRemoveFromStack: (id: string) => void;
    onRemoveAll: () => void;
}


const Stack = ({ selectedStack, onRemoveFromStack, onRemoveAll }: IStackProps) => {
    const hasSelectedTechnologies = selectedStack.length > 0;

    return (
        <div className='flex flex-col gap-2 border-1 border-gray-300 rounded-2xl w-full p-5'>
            <h2 className='text-2xl font-bold'>Your Stack</h2>
            <p className='text-gray-500'>{selectedStack.length} Technology Selected</p>
            {hasSelectedTechnologies ? (
                <div className='flex flex-col border-1 border-gray-200 rounded-2xl overflow-hidden'>
                    <SelectedStacks selectedStack={selectedStack} onRemoveFromStack={onRemoveFromStack} />
                    <button
                        onClick={onRemoveAll}
                        className='w-full p-3 text-center text-pink-600 font-medium border-t-1 border-gray-200 hover:bg-gray-50'
                    >
                        Remove All
                    </button>
                </div>
            ) : (
                <div className='border-dashed border-2 border-gray-200 px-15 py-10 rounded-2xl flex justify-center items-center'>
                    <p>Your stack is empty.</p>
                </div>
            )}
        </div>)
};

export default Stack;