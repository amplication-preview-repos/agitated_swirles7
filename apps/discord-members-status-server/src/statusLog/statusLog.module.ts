import { Module } from "@nestjs/common";
import { StatusLogModuleBase } from "./base/statusLog.module.base";
import { StatusLogService } from "./statusLog.service";
import { StatusLogController } from "./statusLog.controller";
import { StatusLogResolver } from "./statusLog.resolver";

@Module({
  imports: [StatusLogModuleBase],
  controllers: [StatusLogController],
  providers: [StatusLogService, StatusLogResolver],
  exports: [StatusLogService],
})
export class StatusLogModule {}
