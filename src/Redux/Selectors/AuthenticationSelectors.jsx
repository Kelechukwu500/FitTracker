// Selector to get authentication state
export const selectAuth = (state) => state.auth;

// Selector to get current user
export const selectCurrentUser = (state) => state.auth.user;

// Selector to get authentication token
export const selectAuthToken = (state) => state.auth.token;

// Selector to get authentication loading state
export const selectAuthLoading = (state) => state.auth.loading;

// Selector to get authentication error
export const selectAuthError = (state) => state.auth.error;

// Selector to check if user is authenticated
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
