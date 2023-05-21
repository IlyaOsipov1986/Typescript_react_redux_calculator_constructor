import {useEffect, useState} from "react";
import {IToolList} from "../../../types/toolList.tsx";

interface IShowOperations extends IToolList {
    itemSideBar: string;
}

function useShowOperations (isToolsList: IShowOperations[]) {
    const [value, setValue] = useState(false);

    useEffect(() => {
        const findType = isToolsList.find(el => el.itemSideBar === 'operations')
        if (findType !== undefined) {
            setValue(true)
        }
    },[isToolsList])

    return [value, setValue]
}
export default useShowOperations;