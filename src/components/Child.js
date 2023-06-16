import React, { useState } from "react";


const Child = (props) => {
    
    return (
        <div>
            <h3>Child Component</h3>
            <ul>
                {
                    props.list.map((item,index)=>(
                        <li>{item.task}{!(item.completed) && (<button onClick={()=>{props.click(index)}}>Complete</button>)}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Child;