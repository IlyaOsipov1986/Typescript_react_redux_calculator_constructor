import {ReactNode} from "react";

export interface ICalcContextProps {
    children: ReactNode | ReactNode[]
}

export type calcType = {
    sign: string,
    num: number,
    res: number
}