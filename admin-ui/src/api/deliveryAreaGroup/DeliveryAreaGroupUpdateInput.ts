import { DeliveryAreaUpdateManyWithoutDeliveryAreaGroupsInput } from "./DeliveryAreaUpdateManyWithoutDeliveryAreaGroupsInput";
import { ServicePointWhereUniqueInput } from "../servicePoint/ServicePointWhereUniqueInput";

export type DeliveryAreaGroupUpdateInput = {
  deliveryAreas?: DeliveryAreaUpdateManyWithoutDeliveryAreaGroupsInput;
  name?: string;
  servicePoint?: ServicePointWhereUniqueInput | null;
  tenantId?: string | null;
};
