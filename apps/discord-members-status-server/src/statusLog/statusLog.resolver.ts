import * as graphql from "@nestjs/graphql";
import { StatusLogResolverBase } from "./base/statusLog.resolver.base";
import { StatusLog } from "./base/StatusLog";
import { StatusLogService } from "./statusLog.service";

@graphql.Resolver(() => StatusLog)
export class StatusLogResolver extends StatusLogResolverBase {
  constructor(protected readonly service: StatusLogService) {
    super(service);
  }
}
