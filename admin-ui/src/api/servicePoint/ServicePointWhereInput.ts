import { StringFilter } from "../../util/StringFilter";
import { DeliveryAreaGroupListRelationFilter } from "../deliveryAreaGroup/DeliveryAreaGroupListRelationFilter";
import { DeliveryAreaListRelationFilter } from "../deliveryArea/DeliveryAreaListRelationFilter";
import { DeliverySlotListRelationFilter } from "../deliverySlot/DeliverySlotListRelationFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { PickupLocationListRelationFilter } from "../pickupLocation/PickupLocationListRelationFilter";
import { PickupSlotListRelationFilter } from "../pickupSlot/PickupSlotListRelationFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ServicePointWhereInput = {
  address?: StringFilter;
  deliveryAreaGroups?: DeliveryAreaGroupListRelationFilter;
  deliveryAreas?: DeliveryAreaListRelationFilter;
  deliverySlots?: DeliverySlotListRelationFilter;
  email?: StringFilter;
  ghanaPostGps?: StringFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  name?: StringFilter;
  phone?: StringFilter;
  pickupLocations?: PickupLocationListRelationFilter;
  pickupSlots?: PickupSlotListRelationFilter;
  products?: ProductListRelationFilter;
  tenant?: TenantWhereUniqueInput;
};
