import React, {useState} from "react";
import Child from "./Child";

// const arr = [
//     { id:1, task: "Learn React", completed: false },
//     { id:2, task: "Build a React app", completed: false },
//     { id:3, task: "Deploy the React app", completed: false }
// ];

const Parent = ()=>{
    let [todos, setTodos] = useState([ { id:1, task: "Learn React", completed: false },
    { id:2, task: "Build a React app", completed: false },
    { id:3, task: "Deploy the React app", completed: false } ]);

    function changeState(id){
        let lists = todos.map(obj=>{
            if(obj.id===id){
                return {...obj, completed: true};
            }
            return obj;
        });
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