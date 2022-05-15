/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateServicePointArgs } from "./CreateServicePointArgs";
import { UpdateServicePointArgs } from "./UpdateServicePointArgs";
import { DeleteServicePointArgs } from "./DeleteServicePointArgs";
import { ServicePointFindManyArgs } from "./ServicePointFindManyArgs";
import { ServicePointFindUniqueArgs } from "./ServicePointFindUniqueArgs";
import { ServicePoint } from "./ServicePoint";
import { DeliveryAreaGroupFindManyArgs } from "../../deliveryAreaGroup/base/DeliveryAreaGroupFindManyArgs";
import { DeliveryAreaGroup } from "../../deliveryAreaGroup/base/DeliveryAreaGroup";
import { DeliveryAreaFindManyArgs } from "../../deliveryArea/base/DeliveryAreaFindManyArgs";
import { DeliveryArea } from "../../deliveryArea/base/DeliveryArea";
import { DeliverySlotFindManyArgs } from "../../deliverySlot/base/DeliverySlotFindManyArgs";
import { DeliverySlot } from "../../deliverySlot/base/DeliverySlot";
import { PickupLocationFindManyArgs } from "../../pickupLocation/base/PickupLocationFindManyArgs";
import { PickupLocation } from "../../pickupLocation/base/PickupLocation";
import { PickupSlotFindManyArgs } from "../../pickupSlot/base/PickupSlotFindManyArgs";
import { PickupSlot } from "../../pickupSlot/base/PickupSlot";
import { ProductFindManyArgs } from "../../product/base/ProductFindManyArgs";
import { Product } from "../../product/base/Product";
import { Tenant } from "../../tenant/base/Tenant";
import { ServicePointService } from "../servicePoint.service";

@graphql.Resolver(() => ServicePoint)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ServicePointResolverBase {
  constructor(
    protected readonly service: ServicePointService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ServicePoint",
    action: "read",
    possession: "any",
  })
  async _servicePointsMeta(
    @graphql.Args() args: ServicePointFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ServicePoint])
  @nestAccessControl.UseRoles({
    resource: "ServicePoint",
    action: "read",
    possession: "any",
  })
  async servicePoints(
    @graphql.Args() args: ServicePointFindManyArgs
  ): Promise<ServicePoint[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ServicePoint, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ServicePoint",
    action: "read",
    possession: "own",
  })
  async servicePoint(
    @graphql.Args() args: ServicePointFindUniqueArgs
  ): Promise<ServicePoint | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ServicePoint)
  @nestAccessControl.UseRoles({
    resource: "ServicePoint",
    action: "create",
    possession: "any",
  })
  async createServicePoint(
    @graphql.Args() args: CreateServicePointArgs
  ): Promise<ServicePoint> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        tenant: {
          connect: args.data.tenant,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ServicePoint)
  @nestAccessControl.UseRoles({
    resource: "ServicePoint",
    action: "update",
    possession: "any",
  })
  async updateServicePoint(
    @graphql.Args() args: UpdateServicePointArgs
  ): Promise<ServicePoint | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          tenant: {
            connect: args.data.tenant,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ServicePoint)
  @nestAccessControl.UseRoles({
    resource: "ServicePoint",
    action: "delete",
    possession: "any",
  })
  async deleteServicePoint(
    @graphql.Args() args: DeleteServicePointArgs
  ): Promise<ServicePoint | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [DeliveryAreaGroup])
  @nestAccessControl.UseRoles({
    resource: "DeliveryAreaGroup",
    action: "read",
    possession: "any",
  })
  async deliveryAreaGroups(
    @graphql.Parent() parent: ServicePoint,
    @graphql.Args() args: DeliveryAreaGroupFindManyArgs
  ): Promise<DeliveryAreaGroup[]> {
    const results = await this.service.findDeliveryAreaGroups(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [DeliveryArea])
  @nestAccessControl.UseRoles({
    resource: "DeliveryArea",
    action: "read",
    possession: "any",
  })
  async deliveryAreas(
    @graphql.Parent() parent: ServicePoint,
    @graphql.Args() args: DeliveryAreaFindManyArgs
  ): Promise<DeliveryArea[]> {
    const results = await this.service.findDeliveryAreas(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [DeliverySlot])
  @nestAccessControl.UseRoles({
    resource: "DeliverySlot",
    action: "read",
    possession: "any",
  })
  async deliverySlots(
    @graphql.Parent() parent: ServicePoint,
    @graphql.Args() args: DeliverySlotFindManyArgs
  ): Promise<DeliverySlot[]> {
    const results = await this.service.findDeliverySlots(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [PickupLocation])
  @nestAccessControl.UseRoles({
    resource: "PickupLocation",
    action: "read",
    possession: "any",
  })
  async pickupLocations(
    @graphql.Parent() parent: ServicePoint,
    @graphql.Args() args: PickupLocationFindManyArgs
  ): Promise<PickupLocation[]> {
    const results = await this.service.findPickupLocations(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [PickupSlot])
  @nestAccessControl.UseRoles({
    resource: "PickupSlot",
    action: "read",
    possession: "any",
  })
  async pickupSlots(
    @graphql.Parent() parent: ServicePoint,
    @graphql.Args() args: PickupSlotFindManyArgs
  ): Promise<PickupSlot[]> {
    const results = await this.service.findPickupSlots(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Product])
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  async products(
    @graphql.Parent() parent: ServicePoint,
    @graphql.Args() args: ProductFindManyArgs
  ): Promise<Product[]> {
    const results = await this.service.findProducts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Tenant, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Tenant",
    action: "read",
    possession: "any",
  })
  async tenant(@graphql.Parent() parent: ServicePoint): Promise<Tenant | null> {
    const result = await this.service.getTenant(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
