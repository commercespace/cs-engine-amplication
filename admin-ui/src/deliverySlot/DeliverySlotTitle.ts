import { DeliverySlot as TDeliverySlot } from "../api/deliverySlot/DeliverySlot";

export const DELIVERYSLOT_TITLE_FIELD = "day";

export const DeliverySlotTitle = (record: TDeliverySlot): string => {
  return record.day || record.id;
};
