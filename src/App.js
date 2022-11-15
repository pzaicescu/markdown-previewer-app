import './App.css';
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";

function App() {
    return (
        <div className="app-wrapper">
            <Editor/>
            <Previewer/>
        </div>
    );
}

export default App;
