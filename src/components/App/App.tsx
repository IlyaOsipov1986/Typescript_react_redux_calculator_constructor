import './App.css'
import {FC} from "react";
import ToggleRunTimeConstructor from "../ToggleRunTimeConstructor/ToggleRunTimeConstructor.tsx";
import SideBar from "../SideBar/SideBar.tsx";
import Canvas from "../ Canvas/ Canvas.tsx";

const App: FC = () => {

    return (
         <div className="app">
            <div className="app-main-page-wrapper">
                <div className="app-main-page-container">
                    <div className="app-main-page-block">
                        <ToggleRunTimeConstructor/>
                        <div className="app-main-page-drag-and-drop-block">
                            <SideBar/>
                            <Canvas/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
export default App
