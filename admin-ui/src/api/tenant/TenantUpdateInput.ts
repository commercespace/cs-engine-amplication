import { ServicePointUpdateManyWithoutTenantsInput } from "./ServicePointUpdateManyWithoutTenantsInput";

export type TenantUpdateInput = {
  email?: string;
  name?: string;
  phone?: string;
  servicePoints?: ServicePointUpdateManyWithoutTenantsInput;
  tenantType?: "DH_DD" | "DH_SD" | "SH_SD";
};
