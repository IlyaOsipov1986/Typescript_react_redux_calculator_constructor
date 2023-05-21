import {useEffect, useState} from "react";
import {IToolList} from "../../../types/toolList.tsx";

interface IShowEquals extends IToolList {
    itemSideBar: string;
}

function useShowEquals (isToolsList: IShowEquals[]) {
    const [value, setValue] = useState(false);

    useEffect(() => {
        const findType = isToolsList.find(el => el.itemSideBar === 'equals')
        if (findType !== undefined) {
            setValue(true)
        }
    },[isToolsList])

    return [value, setValue]
}
export default useShowEquals;