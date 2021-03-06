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
import { DeliveryAreaService } from "../deliveryArea.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DeliveryAreaCreateInput } from "./DeliveryAreaCreateInput";
import { DeliveryAreaWhereInput } from "./DeliveryAreaWhereInput";
import { DeliveryAreaWhereUniqueInput } from "./DeliveryAreaWhereUniqueInput";
import { DeliveryAreaFindManyArgs } from "./DeliveryAreaFindManyArgs";
import { DeliveryAreaUpdateInput } from "./DeliveryAreaUpdateInput";
import { DeliveryArea } from "./DeliveryArea";
import { DeliverySlotFindManyArgs } from "../../deliverySlot/base/DeliverySlotFindManyArgs";
import { DeliverySlot } from "../../deliverySlot/base/DeliverySlot";
import { DeliverySlotWhereUniqueInput } from "../../deliverySlot/base/DeliverySlotWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class DeliveryAreaControllerBase {
  constructor(
    protected readonly service: DeliveryAreaService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "DeliveryArea",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DeliveryArea })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: DeliveryAreaCreateInput
  ): Promise<DeliveryArea> {
    return await this.service.create({
      data: {
        ...data,

        deliveryAreaGroup: data.deliveryAreaGroup
          ? {
              connect: data.deliveryAreaGroup,
            }
          : undefined,

        servicePoint: data.servicePoint
          ? {
              connect: data.servicePoint,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        deliveryAreaGroup: {
          select: {
            id: true,
          },
        },

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
    resource: "DeliveryArea",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [DeliveryArea] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(DeliveryAreaFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<DeliveryArea[]> {
    const args = plainToClass(DeliveryAreaFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,

        deliveryAreaGroup: {
          select: {
            id: true,
          },
        },

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
    resource: "DeliveryArea",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DeliveryArea })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: DeliveryAreaWhereUniqueInput
  ): Promise<DeliveryArea | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,

        deliveryAreaGroup: {
          select: {
            id: true,
          },
        },

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
    resource: "DeliveryArea",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: DeliveryArea })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: DeliveryAreaWhereUniqueInput,
    @common.Body() data: DeliveryAreaUpdateInput
  ): Promise<DeliveryArea | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          deliveryAreaGroup: data.deliveryAreaGroup
            ? {
                connect: data.deliveryAreaGroup,
              }
            : undefined,

          servicePoint: data.servicePoint
            ? {
                connect: data.servicePoint,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          deliveryAreaGroup: {
            select: {
              id: true,
            },
          },

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
    resource: "DeliveryArea",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: DeliveryArea })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: DeliveryAreaWhereUniqueInput
  ): Promise<DeliveryArea | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,

          deliveryAreaGroup: {
            select: {
              id: true,
            },
          },

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
    resource: "DeliverySlot",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/deliverySlots")
  @ApiNestedQuery(DeliverySlotFindManyArgs)
  async findManyDeliverySlots(
    @common.Req() request: Request,
    @common.Param() params: DeliveryAreaWhereUniqueInput
  ): Promise<DeliverySlot[]> {
    const query = plainToClass(DeliverySlotFindManyArgs, request.query);
    const results = await this.service.findDeliverySlots(params.id, {
      ...query,
      select: {
        createdAt: true,
        cutOffTime: true,
        date: true,
        day: true,

        deliveryArea: {
          select: {
            id: true,
          },
        },

        deliveryPrice: true,
        endTime: true,
        id: true,
        isActive: true,
        isBooked: true,
        orderQuota: true,
        pickingPrice: true,

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
    resource: "DeliveryArea",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/deliverySlots")
  async connectDeliverySlots(
    @common.Param() params: DeliveryAreaWhereUniqueInput,
    @common.Body() body: DeliverySlotWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      deliverySlots: {
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
    resource: "DeliveryArea",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/deliverySlots")
  async updateDeliverySlots(
    @common.Param() params: DeliveryAreaWhereUniqueInput,
    @common.Body() body: DeliverySlotWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      deliverySlots: {
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
    resource: "DeliveryArea",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/deliverySlots")
  async disconnectDeliverySlots(
    @common.Param() params: DeliveryAreaWhereUniqueInput,
    @common.Body() body: DeliverySlotWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      deliverySlots: {
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
