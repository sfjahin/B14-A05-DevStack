import React from 'react';
import type { Itechnology } from '../../types/Itechnology';
import type SelectedStacks from './SelectedStacks';


interface IStackProps {
    StackPromise: Itechnology[];
    isSelected: boolean,
    setSelected: boolean
}


const Stack = ({ StackPromise, isSelected, setSelected }: IStackProps) => {
    console.log(StackPromise, 'form stack');
    return (
        <div className='flex flex-col gap-2 border-1 border-gray-300 rounded-2xl w-full p-5'>
            <h2 className='text-2xl font-bold'>Your Stack</h2>
            {isSelected ? (
                <SelectedStacks StackPromise={StackPromise} />
            ) : (
                <p>No technologies selected yet.</p>
            )}
            <div className='border-dashed border-2 border-gray-200 px-15 py-10 rounded-2xl flex justify-center items-center'>
                <p>Your stack is empty.</p>
            </div>
        </div>)
};

export default Stack;