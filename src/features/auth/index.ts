// features/auth/index.ts
export { useAuth } from "./model/useAuth";
export { loginWithEmail, logout, subscribeToAuthState } from "./api/authApi";
export type { LoginCredentials, AuthError } from "./api/authApi";
