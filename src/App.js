import './App.css';
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import {useState} from "react";
import {placeholder} from "./placeholder";

function App() {

    const [previewOutput, setPreviewOutput] = useState(placeholder)

    return (
        <div className="app-wrapper">
            <Editor setPreviewOutput={setPreviewOutput}/>
            <Previewer previewOutput={previewOutput}/>
        </div>
    );
}

export default App;
