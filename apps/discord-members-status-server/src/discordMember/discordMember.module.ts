import { Module } from "@nestjs/common";
import { DiscordMemberModuleBase } from "./base/discordMember.module.base";
import { DiscordMemberService } from "./discordMember.service";
import { DiscordMemberController } from "./discordMember.controller";
import { DiscordMemberResolver } from "./discordMember.resolver";

@Module({
  imports: [DiscordMemberModuleBase],
  controllers: [DiscordMemberController],
  providers: [DiscordMemberService, DiscordMemberResolver],
  exports: [DiscordMemberService],
})
export class DiscordMemberModule {}
