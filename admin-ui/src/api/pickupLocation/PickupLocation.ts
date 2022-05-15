import { PickupSlot } from "../pickupSlot/PickupSlot";
import { ServicePoint } from "../servicePoint/ServicePoint";

export type PickupLocation = {
  createdAt: Date;
  deliveryPrice: number;
  description: string | null;
  geoLocation: string;
  id: string;
  name: string;
  pickupSlots?: Array<PickupSlot>;
  servicePoint?: ServicePoint;
  tenantId: string | null;
  updatedAt: Date;
};
