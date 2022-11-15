import React from 'react';
import {FaCompressAlt, FaExpandAlt} from "react-icons/fa";
import {marked} from "marked";

const Previewer = (props) => {

    const expandPreviewer = () => {
        document.getElementById("editor").style.setProperty("display", "none")
        document.getElementById("previewer-output").style.setProperty("min-height", "95vh")
        document.getElementById("expand-previewer").style.setProperty("display", "none")
        document.getElementById("compress-previewer").style.setProperty("display", "block")
    }

    const compressPreviewer = () => {
        document.getElementById("editor").style.setProperty("display", "block")
        document.getElementById("previewer-output").style.setProperty("min-height", "200px")
        document.getElementById("expand-previewer").style.setProperty("display", "block")
        document.getElementById("compress-previewer").style.setProperty("display", "none")
    }

    const getMarkdownText = () => {
        let rawMarkup = marked.parse(props.previewOutput);
        return { __html: rawMarkup };
    }


    return (
        <div className="previewer-wrapper" id="previewer">
            <div className="toolbar">
                <h5>Previewer</h5>
                <FaExpandAlt onClick={expandPreviewer} id="expand-previewer"/>
                <FaCompressAlt style={{display: "none"}} onClick={compressPreviewer} id="compress-previewer"/>
            </div>
            <div className="previewer-output" id="previewer-output" dangerouslySetInnerHTML={getMarkdownText()}></div>
        </div>
    );
};

export default Previewer;
