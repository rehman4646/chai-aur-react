import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [ { id:1 , text: "Hello Word"}]
}

export const todoSlice = createSlice({
    name : 'todo',           // everySkice ka name yhi hoga 
    initialState,               // define the initial status 
    reducers : {                 // define the properties oer func inside the reducers 
        addTodo : (state , action)=> {        // state wo jo initial state ka access dy ga or action wo jo ap perform kro gy 
            const todo = {
                id : nanoid(),
                text: action.payload
            }
            state.todos.push(todo)  // push the todo in above todos
        } ,
        removeTodo : (state, action)=>{
           state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        }   
    }
})

 export const { addTodo, removeTodo } = todoSlice.actions     // export the individual function because i used in all the components 
 export default todoSlice.reducer                            // all the reducer exports ....