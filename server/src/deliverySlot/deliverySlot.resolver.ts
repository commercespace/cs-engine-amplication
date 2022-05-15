import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { DeliverySlotResolverBase } from "./base/deliverySlot.resolver.base";
import { DeliverySlot } from "./base/DeliverySlot";
import { DeliverySlotService } from "./deliverySlot.service";

@graphql.Resolver(() => DeliverySlot)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DeliverySlotResolver extends DeliverySlotResolverBase {
  constructor(
    protected readonly service: DeliverySlotService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
