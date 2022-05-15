import { StringFilter } from "../../util/StringFilter";
import { ServicePointListRelationFilter } from "../servicePoint/ServicePointListRelationFilter";

export type TenantWhereInput = {
  email?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  phone?: StringFilter;
  servicePoints?: ServicePointListRelationFilter;
  tenantType?: "DH_DD" | "DH_SD" | "SH_SD";
};
