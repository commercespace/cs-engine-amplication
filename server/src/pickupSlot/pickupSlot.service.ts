import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PickupSlotServiceBase } from "./base/pickupSlot.service.base";

@Injectable()
export class PickupSlotService extends PickupSlotServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
