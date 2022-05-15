import { DeliveryAreaGroupWhereUniqueInput } from "../deliveryAreaGroup/DeliveryAreaGroupWhereUniqueInput";
import { DeliverySlotCreateNestedManyWithoutDeliveryAreasInput } from "./DeliverySlotCreateNestedManyWithoutDeliveryAreasInput";
import { ServicePointWhereUniqueInput } from "../servicePoint/ServicePointWhereUniqueInput";

export type DeliveryAreaCreateInput = {
  deliveryAreaGroup?: DeliveryAreaGroupWhereUniqueInput | null;
  deliveryPrice?: number | null;
  deliverySlots?: DeliverySlotCreateNestedManyWithoutDeliveryAreasInput;
  description?: string | null;
  geoLocation: string;
  name: string;
  servicePoint?: ServicePointWhereUniqueInput | null;
  tenantId?: string | null;
};
