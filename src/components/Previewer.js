import React from 'react';
import {FaCompressAlt, FaExpandAlt} from "react-icons/fa";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'


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

    return (
        <div className="previewer-wrapper" id="previewer">
            <div className="toolbar">
                <h5>Previewer</h5>
                <FaExpandAlt onClick={expandPreviewer} id="expand-previewer"/>
                <FaCompressAlt style={{display: "none"}} onClick={compressPreviewer} id="compress-previewer"/>
            </div>
            <ReactMarkdown children={props.previewOutput} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeKatex]}  className="previewer-output" id="previewer-output"/>
        </div>
    );
};

export default Previewer;
