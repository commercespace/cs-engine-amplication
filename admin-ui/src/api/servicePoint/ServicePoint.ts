import { DeliveryAreaGroup } from "../deliveryAreaGroup/DeliveryAreaGroup";
import { DeliveryArea } from "../deliveryArea/DeliveryArea";
import { DeliverySlot } from "../deliverySlot/DeliverySlot";
import { PickupLocation } from "../pickupLocation/PickupLocation";
import { PickupSlot } from "../pickupSlot/PickupSlot";
import { Product } from "../product/Product";
import { Tenant } from "../tenant/Tenant";

export type ServicePoint = {
  address: string;
  createdAt: Date;
  deliveryAreaGroups?: Array<DeliveryAreaGroup>;
  deliveryAreas?: Array<DeliveryArea>;
  deliverySlots?: Array<DeliverySlot>;
  description: string | null;
  email: string;
  ghanaPostGps: string;
  id: string;
  isActive: boolean;
  name: string;
  phone: string;
  pickupLocations?: Array<PickupLocation>;
  pickupSlots?: Array<PickupSlot>;
  products?: Array<Product>;
  tenant?: Tenant;
  updatedAt: Date;
};
