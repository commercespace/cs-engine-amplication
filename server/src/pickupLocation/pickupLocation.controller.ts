import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PickupLocationService } from "./pickupLocation.service";
import { PickupLocationControllerBase } from "./base/pickupLocation.controller.base";

@swagger.ApiTags("pickupLocations")
@common.Controller("pickupLocations")
export class PickupLocationController extends PickupLocationControllerBase {
  constructor(
    protected readonly service: PickupLocationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
