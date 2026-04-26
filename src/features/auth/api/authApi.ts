// features/auth/api/authApi.ts
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User,
} from "firebase/auth";
import { auth } from "@/shared/lib/firebase";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthError {
  code: string;
  message: string;
}

export const loginWithEmail = async (
  credentials: LoginCredentials,
): Promise<User> => {
  const { email, password } = credentials;
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password,
  );
  return userCredential.user;
};

export const logout = async (): Promise<void> => {
  await signOut(auth);
};

export const subscribeToAuthState = (
  callback: (user: User | null) => void,
): (() => void) => {
  return onAuthStateChanged(auth, callback);
};
