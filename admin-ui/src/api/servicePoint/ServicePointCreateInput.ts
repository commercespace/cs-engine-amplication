import { DeliveryAreaGroupCreateNestedManyWithoutServicePointsInput } from "./DeliveryAreaGroupCreateNestedManyWithoutServicePointsInput";
import { DeliveryAreaCreateNestedManyWithoutServicePointsInput } from "./DeliveryAreaCreateNestedManyWithoutServicePointsInput";
import { DeliverySlotCreateNestedManyWithoutServicePointsInput } from "./DeliverySlotCreateNestedManyWithoutServicePointsInput";
import { PickupLocationCreateNestedManyWithoutServicePointsInput } from "./PickupLocationCreateNestedManyWithoutServicePointsInput";
import { PickupSlotCreateNestedManyWithoutServicePointsInput } from "./PickupSlotCreateNestedManyWithoutServicePointsInput";
import { ProductCreateNestedManyWithoutServicePointsInput } from "./ProductCreateNestedManyWithoutServicePointsInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ServicePointCreateInput = {
  address: string;
  deliveryAreaGroups?: DeliveryAreaGroupCreateNestedManyWithoutServicePointsInput;
  deliveryAreas?: DeliveryAreaCreateNestedManyWithoutServicePointsInput;
  deliverySlots?: DeliverySlotCreateNestedManyWithoutServicePointsInput;
  description?: string | null;
  email: string;
  ghanaPostGps: string;
  isActive: boolean;
  name: string;
  phone: string;
  pickupLocations?: PickupLocationCreateNestedManyWithoutServicePointsInput;
  pickupSlots?: PickupSlotCreateNestedManyWithoutServicePointsInput;
  products?: ProductCreateNestedManyWithoutServicePointsInput;
  tenant: TenantWhereUniqueInput;
};
