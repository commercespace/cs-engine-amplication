import { DeliveryAreaGroupWhereUniqueInput } from "../deliveryAreaGroup/DeliveryAreaGroupWhereUniqueInput";
import { DeliverySlotUpdateManyWithoutDeliveryAreasInput } from "./DeliverySlotUpdateManyWithoutDeliveryAreasInput";
import { ServicePointWhereUniqueInput } from "../servicePoint/ServicePointWhereUniqueInput";

export type DeliveryAreaUpdateInput = {
  deliveryAreaGroup?: DeliveryAreaGroupWhereUniqueInput | null;
  deliveryPrice?: number | null;
  deliverySlots?: DeliverySlotUpdateManyWithoutDeliveryAreasInput;
  description?: string | null;
  geoLocation?: string;
  name?: string;
  servicePoint?: ServicePointWhereUniqueInput | null;
  tenantId?: string | null;
};
