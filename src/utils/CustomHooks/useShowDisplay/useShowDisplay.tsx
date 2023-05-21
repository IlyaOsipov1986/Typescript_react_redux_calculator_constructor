import {useEffect, useState} from "react";
import {IToolList} from "../../../types/toolList.tsx";

interface IShowDisplay extends IToolList {
    itemSideBar: string;
}

function useShowDisplay (isToolsList: IShowDisplay[]) {
    const [value, setValue] = useState(false);

    useEffect(() => {
        const findType = isToolsList.find(el => el.itemSideBar === 'display')
        if (findType !== undefined) {
            setValue(true)
        }
    },[isToolsList])

    return [value, setValue]
}
export default useShowDisplay;