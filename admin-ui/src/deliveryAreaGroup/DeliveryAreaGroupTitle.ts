import { DeliveryAreaGroup as TDeliveryAreaGroup } from "../api/deliveryAreaGroup/DeliveryAreaGroup";

export const DELIVERYAREAGROUP_TITLE_FIELD = "name";

export const DeliveryAreaGroupTitle = (record: TDeliveryAreaGroup): string => {
  return record.name || record.id;
};
