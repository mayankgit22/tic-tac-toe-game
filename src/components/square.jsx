import React from "react";
function Square(props){
    return(<>
    <div onClick={props.onClick} id={props.id} className={props.className}>{props.value}</div>
    </>)
}
export default Square;  