import { DeliveryArea as TDeliveryArea } from "../api/deliveryArea/DeliveryArea";

export const DELIVERYAREA_TITLE_FIELD = "name";

export const DeliveryAreaTitle = (record: TDeliveryArea): string => {
  return record.name || record.id;
};
