import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DeliveryAreaGroupServiceBase } from "./base/deliveryAreaGroup.service.base";

@Injectable()
export class DeliveryAreaGroupService extends DeliveryAreaGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
