// entities/admin/types.ts

export type AdminRole = "superAdmin" | "boothAdmin" | "parkingAdmin";

export interface Admin {
  uid: string;
  email: string;
  role: AdminRole;
  assignedBooths: string[];
  createdAt: Date;
}
