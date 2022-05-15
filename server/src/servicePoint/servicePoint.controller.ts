import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ServicePointService } from "./servicePoint.service";
import { ServicePointControllerBase } from "./base/servicePoint.controller.base";

@swagger.ApiTags("servicePoints")
@common.Controller("servicePoints")
export class ServicePointController extends ServicePointControllerBase {
  constructor(
    protected readonly service: ServicePointService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
