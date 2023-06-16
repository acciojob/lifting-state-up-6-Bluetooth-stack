import React, {useState} from "react";
import Child from "./Child";

const arr = [
    { task: "Learn React", completed: false },
    { task: "Build a React app", completed: false },
    { task: "Deploy the React app", completed: false }
];

const Parent = ()=>{
    let [todos, setTodos] = useState(arr);

    function changeState(index){
        let lists = [...todos];
        lists[index].completed=true;
        setTodos(lists);
    }

    return(
        <div>
            <h1>Parent Component</h1>
            <Child list={todos} click={(ind)=>{changeState(ind)}}></Child>
        </div>
    )
}

export default Parent;