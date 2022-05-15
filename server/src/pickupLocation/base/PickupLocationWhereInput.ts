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
import { PickupSlotListRelationFilter } from "../../pickupSlot/base/PickupSlotListRelationFilter";
import { ServicePointWhereUniqueInput } from "../../servicePoint/base/ServicePointWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
@InputType()
class PickupLocationWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  geoLocation?: StringFilter;

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
    type: () => ServicePointWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ServicePointWhereUniqueInput)
  @IsOptional()
  @Field(() => ServicePointWhereUniqueInput, {
    nullable: true,
  })
  servicePoint?: ServicePointWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  tenantId?: StringNullableFilter;
}
export { PickupLocationWhereInput };
