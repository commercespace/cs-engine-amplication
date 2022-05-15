import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ServicePointResolverBase } from "./base/servicePoint.resolver.base";
import { ServicePoint } from "./base/ServicePoint";
import { ServicePointService } from "./servicePoint.service";

@graphql.Resolver(() => ServicePoint)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ServicePointResolver extends ServicePointResolverBase {
  constructor(
    protected readonly service: ServicePointService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
