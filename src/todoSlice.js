import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}

const initialStateFromLocal = () =>{
    return (
        JSON.parse(localStorage.getItem("todos")) || {
            
        }
    )
}

const todosSlice = createSlice({
    name: "Todos",
    initialState,
    reducers: {
        addTodo: (state, {payload}) =>{
            console.log(payload);
            // state.todos = [...state.todos, payload]
        },
        removeTodo: (state, {payload}) =>{
            state.todos
        },
        changeStatusTodo: (state, {payload}) =>{}
    }
})

export const {addTodo, removeTodo, changeStatusTodo} = todosSlice.actions;

export default todosSlice.reducer;