import { use, useState } from "react";
import type { Itechnology } from "../../types/Itechnology";
import Stack from "../Stack/Stack";
import TechnologiesGrid from "./TechnologiesGrid";

interface TechnologiesProps {
    technologyPromise: Promise<Itechnology[]>;
}

const Technologies = ({ technologyPromise }: TechnologiesProps) => {
    const [isSelected, setIsSelected] = useState(false);
    const technologies = use(technologyPromise);
    return <div className="flex container mx-auto gap-10 px-20">
        <div className="w-[70%]">
            <TechnologiesGrid technologies={technologies} />
        </div>
        <div className="w-[30%]">
            <Stack technologies={technologies} isSelected={isSelected} setSelected={setIsSelected}/>
        </div>
    </div>
}

export default Technologies;