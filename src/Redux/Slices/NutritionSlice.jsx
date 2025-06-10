import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch nutrition data
export const fetchNutrition = createAsyncThunk(
  "nutrition/fetchNutrition",
  async (userId, thunkAPI) => {
    try {
      // Replace with your API endpoint
      const response = await fetch(`/api/nutrition/${userId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch nutrition data");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Async thunk to add a nutrition entry
export const addNutritionEntry = createAsyncThunk(
  "nutrition/addNutritionEntry",
  async ({ userId, entry }, thunkAPI) => {
    try {
      // Replace with your API endpoint
      const response = await fetch(`/api/nutrition/${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entry),
      });
      if (!response.ok) {
        throw new Error("Failed to add nutrition entry");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  nutrition: [],
  loading: false,
  error: null,
};

const nutritionSlice = createSlice({
  name: "nutrition",
  initialState,
  reducers: {
    clearNutrition(state) {
      state.nutrition = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch nutrition
      .addCase(fetchNutrition.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNutrition.fulfilled, (state, action) => {
        state.loading = false;
        state.nutrition = action.payload.nutrition || [];
      })
      .addCase(fetchNutrition.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Add nutrition entry
      .addCase(addNutritionEntry.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addNutritionEntry.fulfilled, (state, action) => {
        state.loading = false;
        state.nutrition.push(action.payload.entry);
      })
      .addCase(addNutritionEntry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearNutrition } = nutritionSlice.actions;
export default nutritionSlice.reducer;
