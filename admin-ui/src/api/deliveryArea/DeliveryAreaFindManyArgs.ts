import { DeliveryAreaWhereInput } from "./DeliveryAreaWhereInput";
import { DeliveryAreaOrderByInput } from "./DeliveryAreaOrderByInput";

export type DeliveryAreaFindManyArgs = {
  where?: DeliveryAreaWhereInput;
  orderBy?: Array<DeliveryAreaOrderByInput>;
  skip?: number;
  take?: number;
};
