import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  servicePointId?: SortOrder;
  tenantId?: SortOrder;
  updatedAt?: SortOrder;
};
