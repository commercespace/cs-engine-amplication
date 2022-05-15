import { PickupSlot as TPickupSlot } from "../api/pickupSlot/PickupSlot";

export const PICKUPSLOT_TITLE_FIELD = "day";

export const PickupSlotTitle = (record: TPickupSlot): string => {
  return record.day || record.id;
};
