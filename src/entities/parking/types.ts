// entities/parking/types.ts

export type CongestionLevel = "free" | "normal" | "busy";

export interface ParkingLot {
  id: string; // Firestore 문서 ID
  name: string;
  total: number;
  occupied: number;
  isOpen: boolean;
  location: string;
  updatedAt: Date;
  // 계산 프로퍼티 (Firestore엔 저장 안 함)
  available?: number;
  congestion?: CongestionLevel;
}
