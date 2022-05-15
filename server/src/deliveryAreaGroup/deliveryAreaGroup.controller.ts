import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DeliveryAreaGroupService } from "./deliveryAreaGroup.service";
import { DeliveryAreaGroupControllerBase } from "./base/deliveryAreaGroup.controller.base";

@swagger.ApiTags("deliveryAreaGroups")
@common.Controller("deliveryAreaGroups")
export class DeliveryAreaGroupController extends DeliveryAreaGroupControllerBase {
  constructor(
    protected readonly service: DeliveryAreaGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
