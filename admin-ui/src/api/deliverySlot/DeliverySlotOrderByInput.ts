import { SortOrder } from "../../util/SortOrder";

export type DeliverySlotOrderByInput = {
  createdAt?: SortOrder;
  cutOffTime?: SortOrder;
  date?: SortOrder;
  day?: SortOrder;
  deliveryAreaId?: SortOrder;
  deliveryPrice?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isBooked?: SortOrder;
  orderQuota?: SortOrder;
  pickingPrice?: SortOrder;
  servicePointId?: SortOrder;
  slotType?: SortOrder;
  startTime?: SortOrder;
  tenantId?: SortOrder;
  updatedAt?: SortOrder;
  validFrom?: SortOrder;
  validTo?: SortOrder;
};
