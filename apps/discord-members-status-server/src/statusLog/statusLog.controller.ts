import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StatusLogService } from "./statusLog.service";
import { StatusLogControllerBase } from "./base/statusLog.controller.base";

@swagger.ApiTags("statusLogs")
@common.Controller("statusLogs")
export class StatusLogController extends StatusLogControllerBase {
  constructor(protected readonly service: StatusLogService) {
    super(service);
  }
}
