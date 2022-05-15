import { ServicePointCreateNestedManyWithoutTenantsInput } from "./ServicePointCreateNestedManyWithoutTenantsInput";

export type TenantCreateInput = {
  email: string;
  name: string;
  phone: string;
  servicePoints?: ServicePointCreateNestedManyWithoutTenantsInput;
  tenantType: "DH_DD" | "DH_SD" | "SH_SD";
};
