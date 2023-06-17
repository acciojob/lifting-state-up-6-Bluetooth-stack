import React, { useState } from "react";


const Child = (todo) => {

    return (
        <div>
            <span>{todo.text}</span>
        </div>
    )
}

export default Child;