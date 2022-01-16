import React from "react";
import html2canvas from 'html2canvas';

export default function FormMeme(props){
    return (
        <div>
            <div className="formInputs">
            <input type="text" onChange={(event) => props.handleFirst(event.target.value)}/>
            <input type="text" onChange={(event) => props.handleSecond(event.target.value)}/>
            </div>
            <button onClick={props.handleClick}>Change Image 🖼</button>
            <button onClick={props.propsCapture}>Save Image</button>
        </div>
    )
}