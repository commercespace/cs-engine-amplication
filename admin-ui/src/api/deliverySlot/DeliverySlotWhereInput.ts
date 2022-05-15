import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DeliveryAreaWhereUniqueInput } from "../deliveryArea/DeliveryAreaWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { ServicePointWhereUniqueInput } from "../servicePoint/ServicePointWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type DeliverySlotWhereInput = {
  cutOffTime?: IntNullableFilter;
  date?: DateTimeNullableFilter;
  day?: StringFilter;
  deliveryArea?: DeliveryAreaWhereUniqueInput;
  endTime?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  isBooked?: BooleanFilter;
  servicePoint?: ServicePointWhereUniqueInput;
  slotType?: "RE_CURRENT" | "ABSOLUTE";
  startTime?: StringFilter;
  tenantId?: StringNullableFilter;
  validFrom?: DateTimeFilter;
  validTo?: DateTimeFilter;
};
