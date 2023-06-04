import {useEffect, useState} from "react";
import {IToolList} from "../../../types/toolList.tsx";

interface IShowNumbers extends IToolList {
    itemSideBar: string;
}

function useShowNumbers (isToolsList: IShowNumbers[]) {
    const [value, setValue] = useState(false);

    useEffect(() => {
        const findType = isToolsList.find(el => el.itemSideBar === 'numbers')
        if (findType !== undefined) {
            setValue(true)
        } else {
            setValue(false)
        }
    },[isToolsList])

    return [value, setValue]
}
export default useShowNumbers;