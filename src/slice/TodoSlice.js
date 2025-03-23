import { createSlice } from "@reduxjs/toolkit";

//program for Todo-App

const initialState = {
    todos: [],
};
export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todos.push(action.payload);
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter((todo)=>{
                return todo.id !== action.payload;
            })
        },
        editTodo(state, action) {
            const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
        }
    }
})
export const {addTodo,removeTodo,editTodo}=todoSlice.actions
export default todoSlice.reducer;  //export reducer for store