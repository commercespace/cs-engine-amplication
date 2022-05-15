import { DeliveryArea } from "../deliveryArea/DeliveryArea";
import { ServicePoint } from "../servicePoint/ServicePoint";

export type DeliverySlot = {
  createdAt: Date;
  cutOffTime: number | null;
  date: Date | null;
  day: string;
  deliveryArea?: DeliveryArea | null;
  deliveryPrice: number | null;
  endTime: string | null;
  id: string;
  isActive: boolean;
  isBooked: boolean;
  orderQuota: number | null;
  pickingPrice: number | null;
  servicePoint?: ServicePoint;
  slotType?: "RE_CURRENT" | "ABSOLUTE" | null;
  startTime: string;
  tenantId: string | null;
  updatedAt: Date;
  validFrom: Date;
  validTo: Date;
};
