import { PickupSlotCreateNestedManyWithoutPickupLocationsInput } from "./PickupSlotCreateNestedManyWithoutPickupLocationsInput";
import { ServicePointWhereUniqueInput } from "../servicePoint/ServicePointWhereUniqueInput";

export type PickupLocationCreateInput = {
  deliveryPrice: number;
  description?: string | null;
  geoLocation: string;
  name: string;
  pickupSlots?: PickupSlotCreateNestedManyWithoutPickupLocationsInput;
  servicePoint: ServicePointWhereUniqueInput;
  tenantId?: string | null;
};
