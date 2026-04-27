// src/pages/home/ui/HomePage.tsx
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center min-h-screen">
      {/* 헤더 */}
      <header className="py-6 w-full text-center ">
        <h1 className="text-2xl font-haBold">
          <span className="text-[var(--font-red)] webkit-text-stroke">2</span>
          <span className="text-[var(--font-yellow) webkit-text-stroke]">0</span>
          <span className="text-[var(--font-green)] webkit-text-stroke">2</span>
          <span className="text-[var(--font-orange)] webkit-text-stroke">6</span> 김천 김밥 축제
        </h1>
      </header>

      {/* 버튼 섹션 */}
      <main className="flex flex-col gap-4 mt-10 w-full px-10">
        <button
          onClick={() => navigate("/booth")}
          className="  text-2xl font-haBold py-10 rounded-2xl shadow-lg active:scale-95 transition"
        >
          김밥 부스 현황
        </button>

        <button
          onClick={() => navigate("/parking")}
          className="text-2xl font-haBold py-10 rounded-2xl border-4 border-black shadow-lg active:scale-95 transition"
        >
          주차 현황
        </button>

        <button className="text-gray-700 py-2 px-6 rounded-full w-fit mx-auto mt-4 text-sm font-haBold">
          운영진 로그인
        </button>
      </main>

      {/* 캐릭터 및 하단 정보 (이미지는 나중에 src/shared/assets에 넣으세요!) */}
      <section className="mt-auto mb-10 text-center">
        <div className="rounded-full px-8 py-6 mb-4 relative">
          <p className="text-lg  leading-tight">
            지금은 김밥 축제 중!
            <br />
            실시간 현황을
            <br />
            확인하세요
          </p>
          {/* <img src={characterImg} alt="캐릭터" className="absolute -left-10 top-0 w-20" /> */}
        </div>

        <div className="text-xs text-gray-500 space-y-1">
          <p>축제 기간: 2026.10.23.(금) ~ 2026.10.25.(일)</p>
          <p>장소: 김천시 직지문화공원 및 사명대사공원 일원</p>
        </div>
      </section>

      {/* 푸터 (SNS 아이콘 등) */}
      <footer className="w-full py-4 border-t flex justify-around items-center">
        <span className="font-haBold text-sm">김천시 SNS</span>
        {/* 아이콘들이 들어갈 자리 */}
      </footer>
    </div>
  );
};
