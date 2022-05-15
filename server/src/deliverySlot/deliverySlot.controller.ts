import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DeliverySlotService } from "./deliverySlot.service";
import { DeliverySlotControllerBase } from "./base/deliverySlot.controller.base";

@swagger.ApiTags("deliverySlots")
@common.Controller("deliverySlots")
export class DeliverySlotController extends DeliverySlotControllerBase {
  constructor(
    protected readonly service: DeliverySlotService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
