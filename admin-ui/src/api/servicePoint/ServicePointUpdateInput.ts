import { DeliveryAreaGroupUpdateManyWithoutServicePointsInput } from "./DeliveryAreaGroupUpdateManyWithoutServicePointsInput";
import { DeliveryAreaUpdateManyWithoutServicePointsInput } from "./DeliveryAreaUpdateManyWithoutServicePointsInput";
import { DeliverySlotUpdateManyWithoutServicePointsInput } from "./DeliverySlotUpdateManyWithoutServicePointsInput";
import { PickupLocationUpdateManyWithoutServicePointsInput } from "./PickupLocationUpdateManyWithoutServicePointsInput";
import { PickupSlotUpdateManyWithoutServicePointsInput } from "./PickupSlotUpdateManyWithoutServicePointsInput";
import { ProductUpdateManyWithoutServicePointsInput } from "./ProductUpdateManyWithoutServicePointsInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ServicePointUpdateInput = {
  address?: string;
  deliveryAreaGroups?: DeliveryAreaGroupUpdateManyWithoutServicePointsInput;
  deliveryAreas?: DeliveryAreaUpdateManyWithoutServicePointsInput;
  deliverySlots?: DeliverySlotUpdateManyWithoutServicePointsInput;
  description?: string | null;
  email?: string;
  ghanaPostGps?: string;
  isActive?: boolean;
  name?: string;
  phone?: string;
  pickupLocations?: PickupLocationUpdateManyWithoutServicePointsInput;
  pickupSlots?: PickupSlotUpdateManyWithoutServicePointsInput;
  products?: ProductUpdateManyWithoutServicePointsInput;
  tenant?: TenantWhereUniqueInput;
};
