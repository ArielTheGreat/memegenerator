import React from "react";
import thinkIt from "../img/thinkit.jpeg"

export default function InteractiveImg(props){
    return (
        <div className="imgContainer" id="capture">
            <div className="text firstText">{props.firstText}</div>
            <img className="img" src={props.imgUrl || thinkIt}/>
            <div className="text secondText">{props.secondText}</div>
        </div>
    )
}