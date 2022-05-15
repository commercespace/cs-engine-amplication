import { ServicePointWhereInput } from "./ServicePointWhereInput";
import { ServicePointOrderByInput } from "./ServicePointOrderByInput";

export type ServicePointFindManyArgs = {
  where?: ServicePointWhereInput;
  orderBy?: Array<ServicePointOrderByInput>;
  skip?: number;
  take?: number;
};
