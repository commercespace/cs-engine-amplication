import { PickupSlotUpdateManyWithoutPickupLocationsInput } from "./PickupSlotUpdateManyWithoutPickupLocationsInput";
import { ServicePointWhereUniqueInput } from "../servicePoint/ServicePointWhereUniqueInput";

export type PickupLocationUpdateInput = {
  deliveryPrice?: number;
  description?: string | null;
  geoLocation?: string;
  name?: string;
  pickupSlots?: PickupSlotUpdateManyWithoutPickupLocationsInput;
  servicePoint?: ServicePointWhereUniqueInput;
  tenantId?: string | null;
};
