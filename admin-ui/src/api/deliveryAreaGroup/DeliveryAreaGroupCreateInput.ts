import { DeliveryAreaCreateNestedManyWithoutDeliveryAreaGroupsInput } from "./DeliveryAreaCreateNestedManyWithoutDeliveryAreaGroupsInput";
import { ServicePointWhereUniqueInput } from "../servicePoint/ServicePointWhereUniqueInput";

export type DeliveryAreaGroupCreateInput = {
  deliveryAreas?: DeliveryAreaCreateNestedManyWithoutDeliveryAreaGroupsInput;
  name: string;
  servicePoint?: ServicePointWhereUniqueInput | null;
  tenantId?: string | null;
};
