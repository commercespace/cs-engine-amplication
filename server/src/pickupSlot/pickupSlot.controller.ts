import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PickupSlotService } from "./pickupSlot.service";
import { PickupSlotControllerBase } from "./base/pickupSlot.controller.base";

@swagger.ApiTags("pickupSlots")
@common.Controller("pickupSlots")
export class PickupSlotController extends PickupSlotControllerBase {
  constructor(
    protected readonly service: PickupSlotService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
