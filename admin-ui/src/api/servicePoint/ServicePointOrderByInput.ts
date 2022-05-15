import { SortOrder } from "../../util/SortOrder";

export type ServicePointOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  email?: SortOrder;
  ghanaPostGps?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  tenantId?: SortOrder;
  updatedAt?: SortOrder;
};
