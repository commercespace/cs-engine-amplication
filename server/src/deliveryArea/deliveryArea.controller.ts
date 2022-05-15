import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DeliveryAreaService } from "./deliveryArea.service";
import { DeliveryAreaControllerBase } from "./base/deliveryArea.controller.base";

@swagger.ApiTags("deliveryAreas")
@common.Controller("deliveryAreas")
export class DeliveryAreaController extends DeliveryAreaControllerBase {
  constructor(
    protected readonly service: DeliveryAreaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
