import { createContext } from 'react';


// Step 1: Define the Context Type
interface ArmyContextType {
    army: string;
    setArmy: React.Dispatch<React.SetStateAction<string>>;
}

// Step 2: Create the Context with a Proper Default Value
const defaultValue: ArmyContextType = {
    army: '',
    setArmy: () => { },
};

export const ArmyContext = createContext<ArmyContextType>(defaultValue);
