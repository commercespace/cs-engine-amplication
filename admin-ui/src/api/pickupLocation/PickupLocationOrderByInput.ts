import { SortOrder } from "../../util/SortOrder";

export type PickupLocationOrderByInput = {
  createdAt?: SortOrder;
  deliveryPrice?: SortOrder;
  description?: SortOrder;
  geoLocation?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  servicePointId?: SortOrder;
  tenantId?: SortOrder;
  updatedAt?: SortOrder;
};
