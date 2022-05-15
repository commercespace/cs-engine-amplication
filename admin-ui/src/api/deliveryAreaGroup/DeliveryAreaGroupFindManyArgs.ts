import { DeliveryAreaGroupWhereInput } from "./DeliveryAreaGroupWhereInput";
import { DeliveryAreaGroupOrderByInput } from "./DeliveryAreaGroupOrderByInput";

export type DeliveryAreaGroupFindManyArgs = {
  where?: DeliveryAreaGroupWhereInput;
  orderBy?: Array<DeliveryAreaGroupOrderByInput>;
  skip?: number;
  take?: number;
};
