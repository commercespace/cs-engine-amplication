import { ServicePointWhereUniqueInput } from "../servicePoint/ServicePointWhereUniqueInput";

export type ProductUpdateInput = {
  description?: string | null;
  name?: string;
  servicePoint?: ServicePointWhereUniqueInput;
  tenantId?: string | null;
};
