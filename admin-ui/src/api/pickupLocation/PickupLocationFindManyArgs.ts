import { PickupLocationWhereInput } from "./PickupLocationWhereInput";
import { PickupLocationOrderByInput } from "./PickupLocationOrderByInput";

export type PickupLocationFindManyArgs = {
  where?: PickupLocationWhereInput;
  orderBy?: Array<PickupLocationOrderByInput>;
  skip?: number;
  take?: number;
};
