/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { DeliveryAreaGroupWhereUniqueInput } from "../../deliveryAreaGroup/base/DeliveryAreaGroupWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class DeliveryAreaGroupUpdateManyWithoutServicePointsInput {
  @Field(() => [DeliveryAreaGroupWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DeliveryAreaGroupWhereUniqueInput],
  })
  connect?: Array<DeliveryAreaGroupWhereUniqueInput>;

  @Field(() => [DeliveryAreaGroupWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DeliveryAreaGroupWhereUniqueInput],
  })
  disconnect?: Array<DeliveryAreaGroupWhereUniqueInput>;

  @Field(() => [DeliveryAreaGroupWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DeliveryAreaGroupWhereUniqueInput],
  })
  set?: Array<DeliveryAreaGroupWhereUniqueInput>;
}
export { DeliveryAreaGroupUpdateManyWithoutServicePointsInput };
