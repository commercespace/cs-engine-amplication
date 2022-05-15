import { DeliveryAreaGroupWhereUniqueInput } from "../deliveryAreaGroup/DeliveryAreaGroupWhereUniqueInput";
import { DeliverySlotListRelationFilter } from "../deliverySlot/DeliverySlotListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ServicePointWhereUniqueInput } from "../servicePoint/ServicePointWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DeliveryAreaWhereInput = {
  deliveryAreaGroup?: DeliveryAreaGroupWhereUniqueInput;
  deliverySlots?: DeliverySlotListRelationFilter;
  geoLocation?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  servicePoint?: ServicePointWhereUniqueInput;
  tenantId?: StringNullableFilter;
};
