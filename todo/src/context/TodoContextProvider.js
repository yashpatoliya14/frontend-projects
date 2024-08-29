import React from "react";
import { useContext } from "react";

const TodoContext = React.createContext({
    todos :{
        id:1,
        todo:'defaultmsg',
        completed:false
        
    },
    addTodo : ()=>{},
    updateTodo : ()=>{},
    deleteTodo : ()=>{},
    toggleCompleted : ()=>{}
});

const TodoContextProvider = TodoContext.Provider;

export default TodoContextProvider

export function useTodo(){
    return  useContext(TodoContext);
}

