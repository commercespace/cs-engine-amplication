import { Module } from "@nestjs/common";
import { PickupLocationModuleBase } from "./base/pickupLocation.module.base";
import { PickupLocationService } from "./pickupLocation.service";
import { PickupLocationController } from "./pickupLocation.controller";
import { PickupLocationResolver } from "./pickupLocation.resolver";

@Module({
  imports: [PickupLocationModuleBase],
  controllers: [PickupLocationController],
  providers: [PickupLocationService, PickupLocationResolver],
  exports: [PickupLocationService],
})
export class PickupLocationModule {}
