// src/app/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/home/ui/HomePage";
// BoothPage, ParkingPage도 import 하세요!

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booth" element={<div>부스 현황 페이지 (공사 중)</div>} />
        <Route
          path="/parking"
          element={<div>주차 현황 페이지 (공사 중)</div>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
