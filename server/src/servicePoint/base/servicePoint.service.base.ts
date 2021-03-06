/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";

import {
  Prisma,
  ServicePoint,
  DeliveryAreaGroup,
  DeliveryArea,
  DeliverySlot,
  PickupLocation,
  PickupSlot,
  Product,
  Tenant,
} from "@prisma/client";

export class ServicePointServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ServicePointFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ServicePointFindManyArgs>
  ): Promise<number> {
    return this.prisma.servicePoint.count(args);
  }

  async findMany<T extends Prisma.ServicePointFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ServicePointFindManyArgs>
  ): Promise<ServicePoint[]> {
    return this.prisma.servicePoint.findMany(args);
  }
  async findOne<T extends Prisma.ServicePointFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ServicePointFindUniqueArgs>
  ): Promise<ServicePoint | null> {
    return this.prisma.servicePoint.findUnique(args);
  }
  async create<T extends Prisma.ServicePointCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ServicePointCreateArgs>
  ): Promise<ServicePoint> {
    return this.prisma.servicePoint.create<T>(args);
  }
  async update<T extends Prisma.ServicePointUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ServicePointUpdateArgs>
  ): Promise<ServicePoint> {
    return this.prisma.servicePoint.update<T>(args);
  }
  async delete<T extends Prisma.ServicePointDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ServicePointDeleteArgs>
  ): Promise<ServicePoint> {
    return this.prisma.servicePoint.delete(args);
  }

  async findDeliveryAreaGroups(
    parentId: string,
    args: Prisma.DeliveryAreaGroupFindManyArgs
  ): Promise<DeliveryAreaGroup[]> {
    return this.prisma.servicePoint
      .findUnique({
        where: { id: parentId },
      })
      .deliveryAreaGroups(args);
  }

  async findDeliveryAreas(
    parentId: string,
    args: Prisma.DeliveryAreaFindManyArgs
  ): Promise<DeliveryArea[]> {
    return this.prisma.servicePoint
      .findUnique({
        where: { id: parentId },
      })
      .deliveryAreas(args);
  }

  async findDeliverySlots(
    parentId: string,
    args: Prisma.DeliverySlotFindManyArgs
  ): Promise<DeliverySlot[]> {
    return this.prisma.servicePoint
      .findUnique({
        where: { id: parentId },
      })
      .deliverySlots(args);
  }

  async findPickupLocations(
    parentId: string,
    args: Prisma.PickupLocationFindManyArgs
  ): Promise<PickupLocation[]> {
    return this.prisma.servicePoint
      .findUnique({
        where: { id: parentId },
      })
      .pickupLocations(args);
  }

  async findPickupSlots(
    parentId: string,
    args: Prisma.PickupSlotFindManyArgs
  ): Promise<PickupSlot[]> {
    return this.prisma.servicePoint
      .findUnique({
        where: { id: parentId },
      })
      .pickupSlots(args);
  }

  async findProducts(
    parentId: string,
    args: Prisma.ProductFindManyArgs
  ): Promise<Product[]> {
    return this.prisma.servicePoint
      .findUnique({
        where: { id: parentId },
      })
      .products(args);
  }

  async getTenant(parentId: string): Promise<Tenant | null> {
    return this.prisma.servicePoint
      .findUnique({
        where: { id: parentId },
      })
      .tenant();
  }
}
