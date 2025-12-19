import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  loading: false,
  error: null,
  status: "All",
};

export const fetchTodos = createAsyncThunk("todo/fetchTodo", async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  const data = await res.json();
  return data.map((task) => ({
    id: task.id,
    title: task.title,
    description: "",
    status: task.completed ? "completed" : "To-Do",
  }));
});

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTasks: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTasks: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );

      if (index !== -1) {
        state.tasks[index] = { ...state.tasks[index], ...action.payload };
      }
    },
    deleteTask:(state,action)=>{
      state.tasks = state.tasks.filter((task) => task.id !== action.payload)
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        (state.loading = false), (state.tasks = action.payload);
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message);
      });
  },
});

export const { addTasks, editTasks,deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
