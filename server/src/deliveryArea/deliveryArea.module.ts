import { Module } from "@nestjs/common";
import { DeliveryAreaModuleBase } from "./base/deliveryArea.module.base";
import { DeliveryAreaService } from "./deliveryArea.service";
import { DeliveryAreaController } from "./deliveryArea.controller";
import { DeliveryAreaResolver } from "./deliveryArea.resolver";

@Module({
  imports: [DeliveryAreaModuleBase],
  controllers: [DeliveryAreaController],
  providers: [DeliveryAreaService, DeliveryAreaResolver],
  exports: [DeliveryAreaService],
})
export class DeliveryAreaModule {}
