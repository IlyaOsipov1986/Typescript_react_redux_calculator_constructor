import {createContext, ReactNode, useState} from "react";
import {calcType, ICalcContextProps} from "../types/calcContext.tsx"

const defaultState = {
    calc: {
        sign: '',
        num: 0,
        res: 0
    },
    setCalc: (calc: calcType) => {
        calc.sign
        calc.num
        calc.res}
} as ICalcContextProps

const CalculatorContext = createContext(defaultState);

type calcProviderProps = {
    children: ReactNode
}

export const CalculatorContextProvider = ({children}: calcProviderProps) => {

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