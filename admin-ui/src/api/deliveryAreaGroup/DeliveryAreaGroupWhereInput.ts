import { DeliveryAreaListRelationFilter } from "../deliveryArea/DeliveryAreaListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ServicePointWhereUniqueInput } from "../servicePoint/ServicePointWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DeliveryAreaGroupWhereInput = {
  deliveryAreas?: DeliveryAreaListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  servicePoint?: ServicePointWhereUniqueInput;
  tenantId?: StringNullableFilter;
};
