import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DiscordMemberServiceBase } from "./base/discordMember.service.base";

@Injectable()
export class DiscordMemberService extends DiscordMemberServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
