// features/booth/api/boothApi.ts
import { db } from '@/shared/lib/firebase';
import {
  collection,
  doc,
  getDocs,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import type { Booth } from '@/entities/booth/types';

// ✅ 전체 부스 목록 가져오기
export const getBooths = async (): Promise<Booth[]> => {
  // 1. Firestore에서 booths 컬렉션 전체 요청
  const snapshot = await getDocs(collection(db, 'booths'));

  // 2. snapshot은 문서 여러 개의 묶음
  //    .docs로 배열로 변환, map으로 하나씩 꺼내기
  return snapshot.docs.map((doc) => ({
    id: doc.id,           // Firebase 자동생성 ID
    ...doc.data(),        // name, category, items 등 나머지 데이터
  })) as Booth[];
};

// ✅ 부스 1개 가져오기 (상세 페이지용)
export const getBooth = async (boothId: string): Promise<Booth | null> => {
  const snapshot = await getDoc(doc(db, 'booths', boothId));

  // 문서가 없으면 null 반환
  if (!snapshot.exists()) return null;

  return {
    id: snapshot.id,
    ...snapshot.data(),
  } as Booth;
};

// ✅ 재고 수정 (운영자용)
export const updateBoothItems = async (
  boothId: string,
  items: Booth['items']  // 수정된 items 배열
): Promise<void> => {
  const boothRef = doc(db, 'booths', boothId);

  await updateDoc(boothRef, {
    items: items,
    updatedAt: new Date(),
  });
};