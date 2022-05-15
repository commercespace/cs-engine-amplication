import { DeliveryAreaWhereUniqueInput } from "../deliveryArea/DeliveryAreaWhereUniqueInput";
import { ServicePointWhereUniqueInput } from "../servicePoint/ServicePointWhereUniqueInput";

export type DeliverySlotCreateInput = {
  cutOffTime?: number | null;
  date?: Date | null;
  day: string;
  deliveryArea?: DeliveryAreaWhereUniqueInput | null;
  deliveryPrice?: number | null;
  endTime?: string | null;
  isActive: boolean;
  isBooked: boolean;
  orderQuota?: number | null;
  pickingPrice?: number | null;
  servicePoint: ServicePointWhereUniqueInput;
  slotType?: "RE_CURRENT" | "ABSOLUTE" | null;
  startTime: string;
  tenantId?: string | null;
  validFrom: Date;
  validTo: Date;
};
