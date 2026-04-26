// widgets/login-form/ui/LoginForm.tsx (예시)
import { useAuth } from "@/features/auth";

export const LoginForm = () => {
  const { login, isLoading, error, clearError } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    await login({
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      password: (form.elements.namedItem("password") as HTMLInputElement).value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p onClick={clearError}>{error.message}</p>}
      <input name="email" type="email" />
      <input name="password" type="password" />
      <button type="submit" disabled={isLoading}>
        {isLoading ? "로그인 중..." : "로그인"}
      </button>
    </form>
  );
};
