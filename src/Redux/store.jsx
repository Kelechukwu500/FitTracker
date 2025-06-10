import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./Slices/AuthenticationSlice";
import workoutsReducer from "./Slices/WorkoutsSlice";
import nutritionReducer from "./Slices/NutritionSlice";
import progressReducer from "./Slices/ProgressSlice";

const store = configureStore({
  reducer: {
    auth: authenticationReducer,
    workouts: workoutsReducer,
    nutrition: nutritionReducer,
    progress: progressReducer,
  },
});

export default store;
