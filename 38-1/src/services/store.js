import { createSlice, configureStore } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [
      { id: 1, task: "Wash the dishes", isAccomplished: true },
      { id: 2, task: "Do laundry", isAccomplished: false },
      { id: 3, task: "Mow the lawn", isAccomplished: false },
      { id: 4, task: "Wipe the dust", isAccomplished: false },
    ],
  },
  reducers: {
    addItem: (state, action) => {
      state.todoList.push(action.payload);
    },
    toggleAccomplishedAction: (state, action) => {
      state.todoList = state.todoList.map((task) => {
        if (task.id === action.payload) {
          return { ...task, isAccomplished: !task.isAccomplished };
        } else {
          return task;
        }
      });
    },
  },
});

export const { addItem, toggleAccomplishedAction } = todoSlice.actions;

export const store = configureStore({
  reducer: todoSlice.reducer,
});
