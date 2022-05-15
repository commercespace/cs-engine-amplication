import { ServicePoint } from "../servicePoint/ServicePoint";

export type Tenant = {
  createdAt: Date;
  email: string;
  id: string;
  name: string;
  phone: string;
  servicePoints?: Array<ServicePoint>;
  tenantType?: "DH_DD" | "DH_SD" | "SH_SD";
  updatedAt: Date;
};
