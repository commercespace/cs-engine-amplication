import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { PickupLocationWhereUniqueInput } from "../pickupLocation/PickupLocationWhereUniqueInput";
import { ServicePointWhereUniqueInput } from "../servicePoint/ServicePointWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PickupSlotWhereInput = {
  date?: DateTimeFilter;
  day?: StringFilter;
  endTime?: StringFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  isBooked?: BooleanFilter;
  pickupLocation?: PickupLocationWhereUniqueInput;
  servicePoint?: ServicePointWhereUniqueInput;
  slotType?: "RE_CURRENT" | "ABSOLUTE";
  startTime?: StringFilter;
  tenantId?: StringNullableFilter;
  validFrom?: DateTimeFilter;
  validTo?: DateTimeFilter;
};
