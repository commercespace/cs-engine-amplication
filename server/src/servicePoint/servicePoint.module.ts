import { Module } from "@nestjs/common";
import { ServicePointModuleBase } from "./base/servicePoint.module.base";
import { ServicePointService } from "./servicePoint.service";
import { ServicePointController } from "./servicePoint.controller";
import { ServicePointResolver } from "./servicePoint.resolver";

@Module({
  imports: [ServicePointModuleBase],
  controllers: [ServicePointController],
  providers: [ServicePointService, ServicePointResolver],
  exports: [ServicePointService],
})
export class ServicePointModule {}
