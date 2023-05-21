import './App.css'
import React, {FC, useState} from "react";
import ToggleRunTimeConstructor from "../ToggleRunTimeConstructor/ToggleRunTimeConstructor.tsx";
import SideBar from "../SideBar/SideBar.tsx";
import Canvas from "../ Canvas/ Canvas.tsx";
import {IToolList} from "../../types/toolList.tsx";

const App: FC = () => {

    const [isToolsList, setToolsList] = useState<IToolList[]>([]);

    const handleOnDrag = (e: React.DragEvent, typeSideBar: string) => {
        e.dataTransfer.setData("typeSideBar", typeSideBar);
    }

    const handleOnDrop = (e: React.DragEvent) => {
        const typeSideBar = e.dataTransfer.getData("typeSideBar") as string;
        console.log("typeSideBar", typeSideBar);
        setToolsList([...isToolsList, {itemSideBar: typeSideBar}]);
    }

    console.log(isToolsList)

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    }

    return (
         <div className="app">
            <div className="app-main-page-wrapper">
                <div className="app-main-page-container">
                    <div className="app-main-page-block">
                        <ToggleRunTimeConstructor/>
                        <div className="app-main-page-drag-and-drop-block">
                            <SideBar
                                handleOnDrag={handleOnDrag}
                            />
                            <Canvas
                                handleOnDrag={handleOnDrag}
                                handleDragOver={handleDragOver}
                                handleOnDrop={handleOnDrop}
                                isToolsList={isToolsList}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
export default App
