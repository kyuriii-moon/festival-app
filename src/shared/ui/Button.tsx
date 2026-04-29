// src/shared/ui/Button.tsx
import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "outline" | "small" | "cancel" | "confirm";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export const Button = ({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) => {
  const base = "active:scale-95 transition font-haBold cursor-pointer";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "w-full bg-(--color-foreground) text-(--color-background) text-2xl py-10 rounded-2xl shadow-lg",
    outline:
      "w-full bg-(--color-background) text-(--color-foreground) text-2xl py-10 rounded-2xl border-4 shadow-lg",
    small:
      "bg-(--btn-gray) text-(--color-foreground) py-2 px-6 rounded-full text-sm",
    cancel:
      "flex-1 bg-(--color-background) text-(--color-foreground) py-3 rounded-xl border-2",
    confirm: "flex-1 bg-(--btn-green) text-white py-3 rounded-xl",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// 사용예시
// <Button variant="primary" onClick={() => navigate("/booth")}>김밥 부스 현황</Button>
// <Button variant="outline" onClick={() => navigate("/parking")}>주차 현황</Button>
// <Button variant="small">운영진 로그인</Button>
// <Button variant="cancel">취소</Button>
// <Button variant="confirm">검색하기</Button>
