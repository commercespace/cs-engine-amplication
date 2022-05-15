import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { DeliveryAreaGroupResolverBase } from "./base/deliveryAreaGroup.resolver.base";
import { DeliveryAreaGroup } from "./base/DeliveryAreaGroup";
import { DeliveryAreaGroupService } from "./deliveryAreaGroup.service";

@graphql.Resolver(() => DeliveryAreaGroup)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DeliveryAreaGroupResolver extends DeliveryAreaGroupResolverBase {
  constructor(
    protected readonly service: DeliveryAreaGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
