import { ServicePoint } from "../servicePoint/ServicePoint";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string;
  servicePoint?: ServicePoint;
  tenantId: string | null;
  updatedAt: Date;
};
