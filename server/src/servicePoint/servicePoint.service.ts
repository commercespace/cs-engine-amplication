import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ServicePointServiceBase } from "./base/servicePoint.service.base";

@Injectable()
export class ServicePointService extends ServicePointServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
