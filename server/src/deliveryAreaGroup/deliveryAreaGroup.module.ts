import { Module } from "@nestjs/common";
import { DeliveryAreaGroupModuleBase } from "./base/deliveryAreaGroup.module.base";
import { DeliveryAreaGroupService } from "./deliveryAreaGroup.service";
import { DeliveryAreaGroupController } from "./deliveryAreaGroup.controller";
import { DeliveryAreaGroupResolver } from "./deliveryAreaGroup.resolver";

@Module({
  imports: [DeliveryAreaGroupModuleBase],
  controllers: [DeliveryAreaGroupController],
  providers: [DeliveryAreaGroupService, DeliveryAreaGroupResolver],
  exports: [DeliveryAreaGroupService],
})
export class DeliveryAreaGroupModule {}
