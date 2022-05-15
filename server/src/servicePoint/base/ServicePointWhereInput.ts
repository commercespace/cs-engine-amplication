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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { DeliveryAreaGroupListRelationFilter } from "../../deliveryAreaGroup/base/DeliveryAreaGroupListRelationFilter";
import { DeliveryAreaListRelationFilter } from "../../deliveryArea/base/DeliveryAreaListRelationFilter";
import { DeliverySlotListRelationFilter } from "../../deliverySlot/base/DeliverySlotListRelationFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { PickupLocationListRelationFilter } from "../../pickupLocation/base/PickupLocationListRelationFilter";
import { PickupSlotListRelationFilter } from "../../pickupSlot/base/PickupSlotListRelationFilter";
import { ProductListRelationFilter } from "../../product/base/ProductListRelationFilter";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";
@InputType()
class ServicePointWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  address?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => DeliveryAreaGroupListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DeliveryAreaGroupListRelationFilter)
  @IsOptional()
  @Field(() => DeliveryAreaGroupListRelationFilter, {
    nullable: true,
  })
  deliveryAreaGroups?: DeliveryAreaGroupListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => DeliveryAreaListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DeliveryAreaListRelationFilter)
  @IsOptional()
  @Field(() => DeliveryAreaListRelationFilter, {
    nullable: true,
  })
  deliveryAreas?: DeliveryAreaListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => DeliverySlotListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DeliverySlotListRelationFilter)
  @IsOptional()
  @Field(() => DeliverySlotListRelationFilter, {
    nullable: true,
  })
  deliverySlots?: DeliverySlotListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  email?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  ghanaPostGps?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  isActive?: BooleanFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  phone?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => PickupLocationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PickupLocationListRelationFilter)
  @IsOptional()
  @Field(() => PickupLocationListRelationFilter, {
    nullable: true,
  })
  pickupLocations?: PickupLocationListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => PickupSlotListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PickupSlotListRelationFilter)
  @IsOptional()
  @Field(() => PickupSlotListRelationFilter, {
    nullable: true,
  })
  pickupSlots?: PickupSlotListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ProductListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProductListRelationFilter)
  @IsOptional()
  @Field(() => ProductListRelationFilter, {
    nullable: true,
  })
  products?: ProductListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => TenantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TenantWhereUniqueInput)
  @IsOptional()
  @Field(() => TenantWhereUniqueInput, {
    nullable: true,
  })
  tenant?: TenantWhereUniqueInput;
}
export { ServicePointWhereInput };
