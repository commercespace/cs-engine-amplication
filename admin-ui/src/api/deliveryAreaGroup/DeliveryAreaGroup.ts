import { DeliveryArea } from "../deliveryArea/DeliveryArea";
import { ServicePoint } from "../servicePoint/ServicePoint";

export type DeliveryAreaGroup = {
  createdAt: Date;
  deliveryAreas?: Array<DeliveryArea>;
  id: string;
  name: string;
  servicePoint?: ServicePoint | null;
  tenantId: string | null;
  updatedAt: Date;
};
