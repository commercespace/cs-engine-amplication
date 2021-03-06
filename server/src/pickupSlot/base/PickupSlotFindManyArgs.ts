/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PickupSlotWhereInput } from "./PickupSlotWhereInput";
import { Type } from "class-transformer";
import { PickupSlotOrderByInput } from "./PickupSlotOrderByInput";

@ArgsType()
class PickupSlotFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PickupSlotWhereInput,
  })
  @Field(() => PickupSlotWhereInput, { nullable: true })
  @Type(() => PickupSlotWhereInput)
  where?: PickupSlotWhereInput;

  @ApiProperty({
    required: false,
    type: [PickupSlotOrderByInput],
  })
  @Field(() => [PickupSlotOrderByInput], { nullable: true })
  @Type(() => PickupSlotOrderByInput)
  orderBy?: Array<PickupSlotOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PickupSlotFindManyArgs };
