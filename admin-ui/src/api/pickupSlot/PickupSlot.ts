import { PickupLocation } from "../pickupLocation/PickupLocation";
import { ServicePoint } from "../servicePoint/ServicePoint";

export type PickupSlot = {
  createdAt: Date;
  cutOffTime: number | null;
  date: Date;
  day: string;
  deliveryPrice: number | null;
  endTime: string;
  id: string;
  isActive: boolean;
  isBooked: boolean;
  orderQuota: number | null;
  pickingPrice: number | null;
  pickupLocation?: PickupLocation | null;
  servicePoint?: ServicePoint;
  slotType?: "RE_CURRENT" | "ABSOLUTE" | null;
  startTime: string;
  tenantId: string | null;
  updatedAt: Date;
  validFrom: Date;
  validTo: Date;
};
