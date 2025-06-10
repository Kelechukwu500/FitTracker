// Selector to get progress state
export const selectProgress = (state) => state.progress;

// Selector to get progress entries
export const selectProgressEntries = (state) => state.progress.progress;

// Selector to get progress loading state
export const selectProgressLoading = (state) => state.progress.loading;

// Selector to get progress error
export const selectProgressError = (state) => state.progress.error;
