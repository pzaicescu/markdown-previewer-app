import './App.css';
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import {useState} from "react";

function App() {

    const [previewOutput, setPreviewOutput] = useState("")

    return (
        <div className="app-wrapper">
            <Editor setPreviewOutput={setPreviewOutput}/>
            <Previewer previewOutput={previewOutput}/>
        </div>
    );
}

export default App;
