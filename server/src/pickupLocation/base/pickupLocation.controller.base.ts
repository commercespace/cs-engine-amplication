/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PickupLocationService } from "../pickupLocation.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PickupLocationCreateInput } from "./PickupLocationCreateInput";
import { PickupLocationWhereInput } from "./PickupLocationWhereInput";
import { PickupLocationWhereUniqueInput } from "./PickupLocationWhereUniqueInput";
import { PickupLocationFindManyArgs } from "./PickupLocationFindManyArgs";
import { PickupLocationUpdateInput } from "./PickupLocationUpdateInput";
import { PickupLocation } from "./PickupLocation";
import { PickupSlotFindManyArgs } from "../../pickupSlot/base/PickupSlotFindManyArgs";
import { PickupSlot } from "../../pickupSlot/base/PickupSlot";
import { PickupSlotWhereUniqueInput } from "../../pickupSlot/base/PickupSlotWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PickupLocationControllerBase {
  constructor(
    protected readonly service: PickupLocationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "PickupLocation",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PickupLocation })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: PickupLocationCreateInput
  ): Promise<PickupLocation> {
    return await this.service.create({
      data: {
        ...data,

        servicePoint: {
          connect: data.servicePoint,
        },
      },
      select: {
        createdAt: true,
        deliveryPrice: true,
        description: true,
        geoLocation: true,
        id: true,
        name: true,

        servicePoint: {
          select: {
            id: true,
          },
        },

        tenantId: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "PickupLocation",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [PickupLocation] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(PickupLocationFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<PickupLocation[]> {
    const args = plainToClass(PickupLocationFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        deliveryPrice: true,
        description: true,
        geoLocation: true,
        id: true,
        name: true,

        servicePoint: {
          select: {
            id: true,
          },
        },

        tenantId: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "PickupLocation",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PickupLocation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: PickupLocationWhereUniqueInput
  ): Promise<PickupLocation | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        deliveryPrice: true,
        description: true,
        geoLocation: true,
        id: true,
        name: true,

        servicePoint: {
          select: {
            id: true,
          },
        },

        tenantId: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "PickupLocation",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: PickupLocation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: PickupLocationWhereUniqueInput,
    @common.Body() data: PickupLocationUpdateInput
  ): Promise<PickupLocation | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          servicePoint: {
            connect: data.servicePoint,
          },
        },
        select: {
          createdAt: true,
          deliveryPrice: true,
          description: true,
          geoLocation: true,
          id: true,
          name: true,

          servicePoint: {
            select: {
              id: true,
            },
          },

          tenantId: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "PickupLocation",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: PickupLocation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: PickupLocationWhereUniqueInput
  ): Promise<PickupLocation | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          deliveryPrice: true,
          description: true,
          geoLocation: true,
          id: true,
          name: true,

          servicePoint: {
            select: {
              id: true,
            },
          },

          tenantId: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "PickupSlot",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/pickupSlots")
  @ApiNestedQuery(PickupSlotFindManyArgs)
  async findManyPickupSlots(
    @common.Req() request: Request,
    @common.Param() params: PickupLocationWhereUniqueInput
  ): Promise<PickupSlot[]> {
    const query = plainToClass(PickupSlotFindManyArgs, request.query);
    const results = await this.service.findPickupSlots(params.id, {
      ...query,
      select: {
        createdAt: true,
        cutOffTime: true,
        date: true,
        day: true,
        deliveryPrice: true,
        endTime: true,
        id: true,
        isActive: true,
        isBooked: true,
        orderQuota: true,
        pickingPrice: true,

        pickupLocation: {
          select: {
            id: true,
          },
        },

        servicePoint: {
          select: {
            id: true,
          },
        },

        slotType: true,
        startTime: true,
        tenantId: true,
        updatedAt: true,
        validFrom: true,
        validTo: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "PickupLocation",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/pickupSlots")
  async connectPickupSlots(
    @common.Param() params: PickupLocationWhereUniqueInput,
    @common.Body() body: PickupSlotWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      pickupSlots: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "PickupLocation",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/pickupSlots")
  async updatePickupSlots(
    @common.Param() params: PickupLocationWhereUniqueInput,
    @common.Body() body: PickupSlotWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      pickupSlots: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "PickupLocation",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/pickupSlots")
  async disconnectPickupSlots(
    @common.Param() params: PickupLocationWhereUniqueInput,
    @common.Body() body: PickupSlotWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      pickupSlots: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
