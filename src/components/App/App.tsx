import './App.css'
import React, {FC, useState} from "react";
import ToggleRunTimeConstructor from "../ToggleRunTimeConstructor/ToggleRunTimeConstructor.tsx";
import SideBar from "../SideBar/SideBar.tsx";
import Canvas from "../ Canvas/ Canvas.tsx";
import {IToolList} from "../../types/toolList.tsx";

const App: FC = () => {

    const [isToolsList, setToolsList] = useState<IToolList[]>([]);
    const [isActiveRunTimeMode, setActiveRunTimeMode] = useState(false);

    const handleOnDrag = (e: React.DragEvent, typeSideBar: string) => {
        e.dataTransfer.setData("typeSideBar", typeSideBar);
    }

    const handleOnDrop = (e: React.DragEvent) => {
        const typeSideBar = e.dataTransfer.getData("typeSideBar") as string;
        setToolsList([...isToolsList, {itemSideBar: typeSideBar}]);
    }

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    }

    const onHandleReset = (setActiveConstrMode: (mode: boolean) => void, setRunTimeMode: (mode: boolean) => void) => {
        setToolsList([]);
        setActiveRunTimeMode(false);
        setActiveConstrMode(true);
        setRunTimeMode(false);
    }

    const onHandleToggleRunTime = (setActiveToggleRunTime: (mode: boolean) => void, setActiveToggleConstructor: (mode: boolean) => void) => {
        setActiveRunTimeMode(true)
        setActiveToggleRunTime(true)
        setActiveToggleConstructor(false)
    }

    const onHandleToggleConstructor = (setActiveToggleRunTime: (mode: boolean) => void, setActiveToggleConstructor: (mode: boolean) => void) => {
        setActiveRunTimeMode(false)
        setActiveToggleRunTime(false)
        setActiveToggleConstructor(true)
    }

    return (
         <div className="app">
            <div className="app-main-page-wrapper">
                <div className="app-main-page-container">
                    <div className="app-main-page-block">
                        <ToggleRunTimeConstructor
                            isToolsList={isToolsList}
                            onHandleReset={onHandleReset}
                            onHandleToggleRunTime={onHandleToggleRunTime}
                            onHandleToggleConstructor={onHandleToggleConstructor}
                        />
                        <div className="app-main-page-drag-and-drop-block">
                            <SideBar
                                isActiveRunTimeMode={isActiveRunTimeMode}
                                isToolsList={isToolsList}
                                handleOnDrag={handleOnDrag}
                            />
                            <Canvas
                                isActiveRunTimeMode={isActiveRunTimeMode}
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
