import React, {useState} from 'react';
import {FaExpandAlt,FaCompressAlt} from "react-icons/fa"
import {placeholder} from "../placeholder";

const Editor = (props) => {

    const [text, setText] = useState(placeholder)

    const expandEditor = () => {
        document.getElementById("previewer").style.setProperty("display", "none")
        document.getElementById("editor-textarea").style.setProperty("min-height", "95vh")
        document.getElementById("expand-editor").style.setProperty("display", "none")
        document.getElementById("compress-editor").style.setProperty("display", "block")
    }

    const compressEditor = () => {
        document.getElementById("previewer").style.setProperty("display", "block")
        document.getElementById("editor-textarea").style.setProperty("min-height", "200px")
        document.getElementById("expand-editor").style.setProperty("display", "block")
        document.getElementById("compress-editor").style.setProperty("display", "none")
    }

    const handleChange = (event) => {
        setText(event.target.value)
        props.setPreviewOutput(event.target.value)
    }

    return (
        <div className="editor-wrapper" id="editor">
            <div className="toolbar">
                <h5>Editor</h5>
                <FaExpandAlt onClick={expandEditor} id="expand-editor"/>
                <FaCompressAlt style={{display: "none"}} onClick={compressEditor} id="compress-editor"/>
            </div>
            <textarea style={{width: "100%"}} id="editor-textarea" onChange={handleChange} spellCheck="false" value={text}></textarea>
        </div>
    );
};

export default Editor;
