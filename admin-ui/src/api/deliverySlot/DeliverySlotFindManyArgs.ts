import { DeliverySlotWhereInput } from "./DeliverySlotWhereInput";
import { DeliverySlotOrderByInput } from "./DeliverySlotOrderByInput";

export type DeliverySlotFindManyArgs = {
  where?: DeliverySlotWhereInput;
  orderBy?: Array<DeliverySlotOrderByInput>;
  skip?: number;
  take?: number;
};
