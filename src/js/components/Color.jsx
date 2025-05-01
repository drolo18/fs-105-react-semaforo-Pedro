import React from "react";

export const Color =(props) =>{
    return(
        <div className={`${props.ActualColor} light ${props.glow}`} onClick={()=> props.onColor(props.ActualColorIndex)} > </div>
    )
}