import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PickupLocationResolverBase } from "./base/pickupLocation.resolver.base";
import { PickupLocation } from "./base/PickupLocation";
import { PickupLocationService } from "./pickupLocation.service";

@graphql.Resolver(() => PickupLocation)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PickupLocationResolver extends PickupLocationResolverBase {
  constructor(
    protected readonly service: PickupLocationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
