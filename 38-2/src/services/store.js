import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export const fetchTodoList = createAsyncThunk(
  "todoList/fetchTodoList",
  async () => {
    const response = await fetch(
      "https://663914414253a866a2503fa7.mockapi.io/todo/v1/todoItem"
    );
    if (response.ok === false) {
      throw new Error("Failed to fetch todo list");
    }
    const responseObj = await response.json();
    return responseObj;
  }
);
export const addNewTodoItem = createAsyncThunk(
  "todoList/addNewTodoItem",
  async (data) => {
    const response = await fetch(
      "https://663914414253a866a2503fa7.mockapi.io/todo/v1/todoItem",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    if (response.ok === false) {
      throw new Error("Failed to add new item");
    }
    const responseObj = await response.json();
    return responseObj;
  }
);

export const toggleAccomplishedItem = createAsyncThunk(
  "todoList/toggleAccomplishedItem",
  async (id, { getState }) => {
    const state = getState();
    const item = state.todoList.find((todoItem) => todoItem.id === id);
    const response = await fetch(
      `https://663914414253a866a2503fa7.mockapi.io/todo/v1/todoItem/${id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ isAccomplished: !item.isAccomplished }),
      }
    );
    if (response.ok === false) {
      throw new Error("Failed to update the status");
    }
    const responseObj = await response.json();
    return responseObj;
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTodoList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodoList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todoList = action.payload;
      })
      .addCase(fetchTodoList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewTodoItem.fulfilled, (state, action) => {
        state.todoList.push(action.payload);
      })
      .addCase(addNewTodoItem.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(toggleAccomplishedItem.fulfilled, (state, action) => {
        state.todoList = state.todoList.map((task) => {
          if (task.id === action.payload.id) {
            return action.payload;
          } else {
            return task;
          }
        });
      })
      .addCase(toggleAccomplishedItem.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const {} = todoSlice.actions;

export const store = configureStore({
  reducer: todoSlice.reducer,
});
