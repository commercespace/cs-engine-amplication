import { PickupLocationWhereUniqueInput } from "../pickupLocation/PickupLocationWhereUniqueInput";
import { ServicePointWhereUniqueInput } from "../servicePoint/ServicePointWhereUniqueInput";

export type PickupSlotUpdateInput = {
  cutOffTime?: number | null;
  date?: Date;
  day?: string;
  deliveryPrice?: number | null;
  endTime?: string;
  isActive?: boolean;
  isBooked?: boolean;
  orderQuota?: number | null;
  pickingPrice?: number | null;
  pickupLocation?: PickupLocationWhereUniqueInput | null;
  servicePoint?: ServicePointWhereUniqueInput;
  slotType?: "RE_CURRENT" | "ABSOLUTE" | null;
  startTime?: string;
  tenantId?: string | null;
  validFrom?: Date;
  validTo?: Date;
};
