import {createContext, useState} from "react";
import {calcType, ICalcContextProps} from "../types/calcContext.tsx"

const CalculatorContext = createContext({});

export const CalculatorContextProvider = ({children}: ICalcContextProps) => {

    const[calc, setCalc] = useState<calcType>({
        sign: '',
        num: 0,
        res: 0
    })

    return (
        <CalculatorContext.Provider value={{
            calc,
            setCalc
        }}>
            {children}
        </CalculatorContext.Provider>
    )
}
export default CalculatorContext;