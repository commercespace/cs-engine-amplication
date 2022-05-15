import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PickupLocationServiceBase } from "./base/pickupLocation.service.base";

@Injectable()
export class PickupLocationService extends PickupLocationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
