import { Module } from "@nestjs/common";
import { PickupSlotModuleBase } from "./base/pickupSlot.module.base";
import { PickupSlotService } from "./pickupSlot.service";
import { PickupSlotController } from "./pickupSlot.controller";
import { PickupSlotResolver } from "./pickupSlot.resolver";

@Module({
  imports: [PickupSlotModuleBase],
  controllers: [PickupSlotController],
  providers: [PickupSlotService, PickupSlotResolver],
  exports: [PickupSlotService],
})
export class PickupSlotModule {}
