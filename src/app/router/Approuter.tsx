// app/router/AppRouter.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages — 각 페이지는 lazy import 권장
import { HomePage } from "@/pages/home";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 공개 라우트 — 누구나 접근 가능 */}
        <Route path="/" element={<HomePage />} />

        {/* 운영자 전용 — ProtectedRoute는 여기서만 사용 */}
        {/* <Route element={<ProtectedRoute />}>
          <Route path="/operator" element={<OperatorPage />} />
        </Route> */}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
