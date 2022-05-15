import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DeliveryAreaServiceBase } from "./base/deliveryArea.service.base";

@Injectable()
export class DeliveryAreaService extends DeliveryAreaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
