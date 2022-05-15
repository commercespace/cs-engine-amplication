import { PickupSlotWhereInput } from "./PickupSlotWhereInput";
import { PickupSlotOrderByInput } from "./PickupSlotOrderByInput";

export type PickupSlotFindManyArgs = {
  where?: PickupSlotWhereInput;
  orderBy?: Array<PickupSlotOrderByInput>;
  skip?: number;
  take?: number;
};
