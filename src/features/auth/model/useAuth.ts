// features/auth/model/useAuth.ts
import { useState, useEffect, useCallback } from "react";
import { type User } from "firebase/auth";
import {
  loginWithEmail,
  logout,
  subscribeToAuthState,
  type LoginCredentials,
  type AuthError,
} from "../api/authApi";

type AuthStatus = "idle" | "loading" | "authenticated" | "unauthenticated";

interface AuthState {
  user: User | null;
  status: AuthStatus;
  error: AuthError | null;
}

interface UseAuthReturn extends AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logoutUser: () => Promise<void>;
  clearError: () => void;
}

const AUTH_ERROR_MESSAGES: Record<string, string> = {
  "auth/invalid-email": "이메일 형식이 올바르지 않습니다.",
  "auth/user-disabled": "비활성화된 계정입니다.",
  "auth/user-not-found": "등록되지 않은 이메일입니다.",
  "auth/wrong-password": "비밀번호가 올바르지 않습니다.",
  "auth/invalid-credential": "이메일 또는 비밀번호를 확인해주세요.",
  "auth/too-many-requests":
    "너무 많은 시도가 있었습니다. 잠시 후 다시 시도해주세요.",
  "auth/network-request-failed": "네트워크 연결을 확인해주세요.",
};

const resolveErrorMessage = (code: string): string =>
  AUTH_ERROR_MESSAGES[code] ?? "로그인 중 오류가 발생했습니다.";

export const useAuth = (): UseAuthReturn => {
  const [state, setState] = useState<AuthState>({
    user: null,
    status: "loading",
    error: null,
  });

  // Firebase Auth 상태 구독 — 앱 새로고침 시 세션 복원
  useEffect(() => {
    const unsubscribe = subscribeToAuthState((user) => {
      setState({
        user,
        status: user ? "authenticated" : "unauthenticated",
        error: null,
      });
    });

    return unsubscribe;
  }, []);

  const login = useCallback(async (credentials: LoginCredentials) => {
    setState((prev) => ({ ...prev, status: "loading", error: null }));
    try {
      await loginWithEmail(credentials);
      // onAuthStateChanged가 상태를 "authenticated"로 업데이트하므로
      // 여기서 별도로 setState 불필요
    } catch (err: unknown) {
      const code = (err as { code?: string }).code ?? "auth/unknown";
      setState((prev) => ({
        ...prev,
        status: "unauthenticated",
        error: { code, message: resolveErrorMessage(code) },
      }));
    }
  }, []);

  const logoutUser = useCallback(async () => {
    setState((prev) => ({ ...prev, status: "loading", error: null }));
    try {
      await logout();
    } catch (err: unknown) {
      const code = (err as { code?: string }).code ?? "auth/unknown";
      setState((prev) => ({
        ...prev,
        status: "authenticated", // 로그아웃 실패 시 인증 상태 유지
        error: { code, message: resolveErrorMessage(code) },
      }));
    }
  }, []);

  const clearError = useCallback(() => {
    setState((prev) => ({ ...prev, error: null }));
  }, []);

  return {
    ...state,
    isAuthenticated: state.status === "authenticated",
    isLoading: state.status === "loading" || state.status === "idle",
    login,
    logoutUser,
    clearError,
  };
};
