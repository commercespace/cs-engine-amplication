import { Module } from "@nestjs/common";
import { DeliverySlotModuleBase } from "./base/deliverySlot.module.base";
import { DeliverySlotService } from "./deliverySlot.service";
import { DeliverySlotController } from "./deliverySlot.controller";
import { DeliverySlotResolver } from "./deliverySlot.resolver";

@Module({
  imports: [DeliverySlotModuleBase],
  controllers: [DeliverySlotController],
  providers: [DeliverySlotService, DeliverySlotResolver],
  exports: [DeliverySlotService],
})
export class DeliverySlotModule {}
