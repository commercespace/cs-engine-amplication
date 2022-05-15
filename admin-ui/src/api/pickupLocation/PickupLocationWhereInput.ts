import { StringFilter } from "../../util/StringFilter";
import { PickupSlotListRelationFilter } from "../pickupSlot/PickupSlotListRelationFilter";
import { ServicePointWhereUniqueInput } from "../servicePoint/ServicePointWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PickupLocationWhereInput = {
  geoLocation?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  pickupSlots?: PickupSlotListRelationFilter;
  servicePoint?: ServicePointWhereUniqueInput;
  tenantId?: StringNullableFilter;
};
