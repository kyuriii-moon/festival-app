// features/parking/api/parkingApi.ts
import { db } from "@/shared/lib/firebase";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import type { ParkingLot } from "@/entities";

// 전체 주차장 목록 가져오기
export const getParkingLots = async (): Promise<ParkingLot[]> => {
  const snapshot = await getDocs(collection(db, "parking"));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as ParkingLot[];
};

// 주차 현황 수정 (운영자용)
export const updateParkingOccupied = async (
  lotId: string,
  occupied: number,
): Promise<void> => {
  const lotRef = doc(db, "parking", lotId);

  await updateDoc(lotRef, {
    occupied: occupied,
    updatedAt: new Date(),
  });
};
