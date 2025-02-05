import { configureStore} from "@reduxjs/toolkit"  //step 1 import ConfigureStore 
import todoReducer from "../features/todo/TodoSlice"

export const store = configureStore({   // step 2 export store variable and this var is assign the configreStore with object 
    reducer : todoReducer
})   