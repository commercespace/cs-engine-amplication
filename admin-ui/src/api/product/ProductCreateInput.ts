import { ServicePointWhereUniqueInput } from "../servicePoint/ServicePointWhereUniqueInput";

export type ProductCreateInput = {
  description?: string | null;
  name: string;
  servicePoint: ServicePointWhereUniqueInput;
  tenantId?: string | null;
};
