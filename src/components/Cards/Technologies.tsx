import { use, useState } from "react";
import { toast } from "react-toastify";
import type { Itechnology } from "../../types/Itechnology";
import Stack from "../Stack/Stack";
import TechnologiesGrid from "./TechnologiesGrid";

interface TechnologiesProps {
    technologyPromise: Promise<Itechnology[]>;
}

const Technologies = ({ technologyPromise }: TechnologiesProps) => {
    const [selectedStack, setSelectedStack] = useState<Itechnology[]>([]);
    const technologies = use(technologyPromise);

    const handleAddToStack = (technology: Itechnology) => {
        const alreadyAdded = selectedStack.some(item => item.id === technology.id);

        if (alreadyAdded) {
            toast.warning(`${technology.name} is already in your stack.`);
            return;
        }

        setSelectedStack(prev => [...prev, technology]);
        toast.success(`${technology.name} added to your stack.`);
    };

    const handleRemoveFromStack = (id: string) => {
        const technology = selectedStack.find(item => item.id === id);
        setSelectedStack(prev => prev.filter(item => item.id !== id));

        if (technology) {
            toast.info(`${technology.name} removed from your stack.`);
        }
    };

    const handleRemoveAll = () => {
        if (selectedStack.length === 0) return;
        setSelectedStack([]);
        toast.info('All technologies removed from your stack.');
    };

    return <div className="flex flex-col lg:flex-row container mx-auto gap-10 px-5 sm:px-10 lg:px-20">
        <div className="w-full lg:w-[70%]">
            <TechnologiesGrid technologies={technologies} selectedStack={selectedStack} onAddToStack={handleAddToStack} />
        </div>
        <div className="w-full lg:w-[30%]">
            <Stack selectedStack={selectedStack} onRemoveFromStack={handleRemoveFromStack} onRemoveAll={handleRemoveAll} />
        </div>
    </div>
}

export default Technologies;