// Selector to get nutrition state
export const selectNutrition = (state) => state.nutrition;

// Selector to get nutrition entries
export const selectNutritionEntries = (state) => state.nutrition.nutrition;

// Selector to get nutrition loading state
export const selectNutritionLoading = (state) => state.nutrition.loading;

// Selector to get nutrition error
export const selectNutritionError = (state) => state.nutrition.error;
