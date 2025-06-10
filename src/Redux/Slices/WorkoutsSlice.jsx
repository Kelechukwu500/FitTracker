import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch workouts data
export const fetchWorkouts = createAsyncThunk(
  "workouts/fetchWorkouts",
  async (userId, thunkAPI) => {
    try {
      // Replace with your API endpoint
      const response = await fetch(`/api/workouts/${userId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch workouts data");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Async thunk to add a workout entry
export const addWorkoutEntry = createAsyncThunk(
  "workouts/addWorkoutEntry",
  async ({ userId, entry }, thunkAPI) => {
    try {
      // Replace with your API endpoint
      const response = await fetch(`/api/workouts/${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entry),
      });
      if (!response.ok) {
        throw new Error("Failed to add workout entry");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  workouts: [],
  loading: false,
  error: null,
};

const workoutsSlice = createSlice({
  name: "workouts",
  initialState,
  reducers: {
    clearWorkouts(state) {
      state.workouts = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch workouts
      .addCase(fetchWorkouts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWorkouts.fulfilled, (state, action) => {
        state.loading = false;
        state.workouts = action.payload.workouts || [];
      })
      .addCase(fetchWorkouts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Add workout entry
      .addCase(addWorkoutEntry.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addWorkoutEntry.fulfilled, (state, action) => {
        state.loading = false;
        state.workouts.push(action.payload.entry);
      })
      .addCase(addWorkoutEntry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearWorkouts } = workoutsSlice.actions;
export default workoutsSlice.reducer;
