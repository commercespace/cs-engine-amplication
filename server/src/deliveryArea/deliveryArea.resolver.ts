import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { DeliveryAreaResolverBase } from "./base/deliveryArea.resolver.base";
import { DeliveryArea } from "./base/DeliveryArea";
import { DeliveryAreaService } from "./deliveryArea.service";

@graphql.Resolver(() => DeliveryArea)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DeliveryAreaResolver extends DeliveryAreaResolverBase {
  constructor(
    protected readonly service: DeliveryAreaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
