import { SortOrder } from "../../util/SortOrder";

export type PickupSlotOrderByInput = {
  createdAt?: SortOrder;
  cutOffTime?: SortOrder;
  date?: SortOrder;
  day?: SortOrder;
  deliveryPrice?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isBooked?: SortOrder;
  orderQuota?: SortOrder;
  pickingPrice?: SortOrder;
  pickupLocationId?: SortOrder;
  servicePointId?: SortOrder;
  slotType?: SortOrder;
  startTime?: SortOrder;
  tenantId?: SortOrder;
  updatedAt?: SortOrder;
  validFrom?: SortOrder;
  validTo?: SortOrder;
};
