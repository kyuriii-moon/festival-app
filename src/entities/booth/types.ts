// entities/booth/types.ts

export type StockStatus = "plenty" | "low" | "soldout";
export type BoothCategory = "음식" | "음료" | "체험" | "판매";

export interface BoothItem {
  id: string;
  name: string;
  stock: number;
  maxStock: number;
  unit: string;
  price: number;
  status: StockStatus;
}

export interface Booth {
  id: string; // Firestore 문서 ID
  name: string;
  category: BoothCategory;
  location: string;
  operatorName: string;
  isOpen: boolean;
  imageUrl?: string;
  items: BoothItem[];
  updatedAt: Date;
}
