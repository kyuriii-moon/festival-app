import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBn2ka39ABM-UhGkZt5Ew7__2tV2XtnHTI",
  authDomain: "gimbab-festival.firebaseapp.com",
  projectId: "gimbab-festival",
  storageBucket: "gimbab-festival.firebasestorage.app",
  messagingSenderId: "705464364503",
  appId: "1:705464364503:web:1c6244829faefef948af92",
  measurementId: "G-DPSD0PSXLN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 데이터베이스(Firestore) 불러오기
export const db = getFirestore(app);
