import { PickupLocation as TPickupLocation } from "../api/pickupLocation/PickupLocation";

export const PICKUPLOCATION_TITLE_FIELD = "name";

export const PickupLocationTitle = (record: TPickupLocation): string => {
  return record.name || record.id;
};
