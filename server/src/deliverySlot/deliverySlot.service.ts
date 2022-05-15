import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DeliverySlotServiceBase } from "./base/deliverySlot.service.base";

@Injectable()
export class DeliverySlotService extends DeliverySlotServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
