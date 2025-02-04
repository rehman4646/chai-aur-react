import { createContext, useContext } from "react";


export const TodoContext = createContext({ // creating a context then store in var
    todos: [
        {
            id: 1,
            todo: "Todo Messages",
            completed : false
        }
    ],
    addTodo: (todo) =>{},
    updateTodo: (id, todo) =>{},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}

})
export const useTodo = () =>{
    return useContext(TodoContext); // return Context with creating the context
}
 export  const TodoProvider = TodoContext.Provider;               // jo TodoContext create kya tha usy ak var 