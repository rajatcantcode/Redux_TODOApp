import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todo: [{ id: "1", task: "sample task", isCompleted: false }],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };
      state.todo.push(newTodo);
    },
    toggleTodo(state, action) {
      state.todo = state.todo.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isCompleted: !todo.isCompleted }; 
        }
        return todo; 
      });
    },
    deleteTodo(state, action) {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
