import {Dispatch, SetStateAction} from "react";

export interface ICalcContextProps {
    calc: calcType
    setCalc: Dispatch<SetStateAction<calcType>>
}

export type calcType = {
    sign: string,
    num: number | string,
    res: number | string
}