/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DeliveryAreaGroupWhereUniqueInput } from "../../deliveryAreaGroup/base/DeliveryAreaGroupWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsNumber,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { DeliverySlotUpdateManyWithoutDeliveryAreasInput } from "./DeliverySlotUpdateManyWithoutDeliveryAreasInput";
import { ServicePointWhereUniqueInput } from "../../servicePoint/base/ServicePointWhereUniqueInput";
@InputType()
class DeliveryAreaUpdateInput {
  @ApiProperty({
    required: false,
    type: () => DeliveryAreaGroupWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DeliveryAreaGroupWhereUniqueInput)
  @IsOptional()
  @Field(() => DeliveryAreaGroupWhereUniqueInput, {
    nullable: true,
  })
  deliveryAreaGroup?: DeliveryAreaGroupWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  deliveryPrice?: number | null;

  @ApiProperty({
    required: false,
    type: () => DeliverySlotUpdateManyWithoutDeliveryAreasInput,
  })
  @ValidateNested()
  @Type(() => DeliverySlotUpdateManyWithoutDeliveryAreasInput)
  @IsOptional()
  @Field(() => DeliverySlotUpdateManyWithoutDeliveryAreasInput, {
    nullable: true,
  })
  deliverySlots?: DeliverySlotUpdateManyWithoutDeliveryAreasInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  geoLocation?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: () => ServicePointWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ServicePointWhereUniqueInput)
  @IsOptional()
  @Field(() => ServicePointWhereUniqueInput, {
    nullable: true,
  })
  servicePoint?: ServicePointWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  tenantId?: string | null;
}
export { DeliveryAreaUpdateInput };
