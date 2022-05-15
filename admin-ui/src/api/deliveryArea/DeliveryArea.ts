import { DeliveryAreaGroup } from "../deliveryAreaGroup/DeliveryAreaGroup";
import { DeliverySlot } from "../deliverySlot/DeliverySlot";
import { ServicePoint } from "../servicePoint/ServicePoint";

export type DeliveryArea = {
  createdAt: Date;
  deliveryAreaGroup?: DeliveryAreaGroup | null;
  deliveryPrice: number | null;
  deliverySlots?: Array<DeliverySlot>;
  description: string | null;
  geoLocation: string;
  id: string;
  name: string;
  servicePoint?: ServicePoint | null;
  tenantId: string | null;
  updatedAt: Date;
};
