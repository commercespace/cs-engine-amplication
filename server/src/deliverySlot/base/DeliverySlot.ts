/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsDate,
  IsInt,
  IsOptional,
  IsString,
  ValidateNested,
  IsNumber,
  IsBoolean,
  IsEnum,
} from "class-validator";

import { Type } from "class-transformer";
import { DeliveryArea } from "../../deliveryArea/base/DeliveryArea";
import { ServicePoint } from "../../servicePoint/base/ServicePoint";
import { EnumDeliverySlotSlotType } from "./EnumDeliverySlotSlotType";
@ObjectType()
class DeliverySlot {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  cutOffTime!: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date!: Date | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  day!: string;

  @ApiProperty({
    required: false,
    type: () => DeliveryArea,
  })
  @ValidateNested()
  @Type(() => DeliveryArea)
  @IsOptional()
  deliveryArea?: DeliveryArea | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  deliveryPrice!: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  endTime!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isActive!: boolean;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isBooked!: boolean;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  orderQuota!: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  pickingPrice!: number | null;

  @ApiProperty({
    required: true,
    type: () => ServicePoint,
  })
  @ValidateNested()
  @Type(() => ServicePoint)
  servicePoint?: ServicePoint;

  @ApiProperty({
    required: false,
    enum: EnumDeliverySlotSlotType,
  })
  @IsEnum(EnumDeliverySlotSlotType)
  @IsOptional()
  @Field(() => EnumDeliverySlotSlotType, {
    nullable: true,
  })
  slotType?: "RE_CURRENT" | "ABSOLUTE" | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  startTime!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  tenantId!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  validFrom!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  validTo!: Date;
}
export { DeliverySlot };
