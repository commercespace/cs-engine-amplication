import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PickupSlotResolverBase } from "./base/pickupSlot.resolver.base";
import { PickupSlot } from "./base/PickupSlot";
import { PickupSlotService } from "./pickupSlot.service";

@graphql.Resolver(() => PickupSlot)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PickupSlotResolver extends PickupSlotResolverBase {
  constructor(
    protected readonly service: PickupSlotService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
