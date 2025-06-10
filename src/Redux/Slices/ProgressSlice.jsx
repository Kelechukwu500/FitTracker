import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch progress data
export const fetchProgress = createAsyncThunk(
  "progress/fetchProgress",
  async (userId, thunkAPI) => {
    try {
      // Replace with your API endpoint
      const response = await fetch(`/api/progress/${userId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch progress data");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Async thunk to add a progress entry
export const addProgressEntry = createAsyncThunk(
  "progress/addProgressEntry",
  async ({ userId, entry }, thunkAPI) => {
    try {
      // Replace with your API endpoint
      const response = await fetch(`/api/progress/${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entry),
      });
      if (!response.ok) {
        throw new Error("Failed to add progress entry");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  progress: [],
  loading: false,
  error: null,
};

const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    clearProgress(state) {
      state.progress = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch progress
      .addCase(fetchProgress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProgress.fulfilled, (state, action) => {
        state.loading = false;
        state.progress = action.payload.progress || [];
      })
      .addCase(fetchProgress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Add progress entry
      .addCase(addProgressEntry.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProgressEntry.fulfilled, (state, action) => {
        state.loading = false;
        state.progress.push(action.payload.entry);
      })
      .addCase(addProgressEntry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearProgress } = progressSlice.actions;
export default progressSlice.reducer;
