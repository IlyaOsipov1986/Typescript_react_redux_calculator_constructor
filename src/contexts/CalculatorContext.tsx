import {createContext, useState, ReactNode} from "react";

interface ICalcContextProps {
    children: ReactNode | ReactNode[]
}

interface Inim {
    isList: string
}

const CalculatorContext = createContext({});

export const CalculatorContextProvider = ({children}: ICalcContextProps) => {

    const [isList, setList] = useState<Inim[]>([]);

    return (
        <CalculatorContext.Provider value={{
            isList,
            setList
        }}>
            {children}
        </CalculatorContext.Provider>
    )
}
export default CalculatorContext;