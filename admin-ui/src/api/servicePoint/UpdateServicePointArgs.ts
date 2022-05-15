import { ServicePointWhereUniqueInput } from "./ServicePointWhereUniqueInput";
import { ServicePointUpdateInput } from "./ServicePointUpdateInput";

export type UpdateServicePointArgs = {
  where: ServicePointWhereUniqueInput;
  data: ServicePointUpdateInput;
};
