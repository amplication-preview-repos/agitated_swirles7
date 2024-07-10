import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StatusLogServiceBase } from "./base/statusLog.service.base";

@Injectable()
export class StatusLogService extends StatusLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
