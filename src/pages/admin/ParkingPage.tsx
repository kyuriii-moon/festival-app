import { useEffect, useState } from "react";
import { db } from "../../shared/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [name, setName] = useState("데이터 불러오는 중...");

  useEffect(() => {
    const getData = async () => {
      // 1. 'parking_lots' 폴더(컬렉션)에 접근
      const querySnapshot = await getDocs(collection(db, "parking_lots"));

      // 2. 데이터가 있다면 첫 번째 문서의 이름을 가져옴
      querySnapshot.forEach((doc) => {
        setName(doc.data().name);
      });
    };
    getData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">연결 테스트</h1>
      <div className="p-6 bg-white rounded-xl shadow-md">
        <p className="text-gray-600">불러온 주차장 이름:</p>
        <p className="text-2xl font-black text-slate-800">{name}</p>
      </div>
    </div>
  );
}

export default App;
