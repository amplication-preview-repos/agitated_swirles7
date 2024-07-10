import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DiscordMemberService } from "./discordMember.service";
import { DiscordMemberControllerBase } from "./base/discordMember.controller.base";

@swagger.ApiTags("discordMembers")
@common.Controller("discordMembers")
export class DiscordMemberController extends DiscordMemberControllerBase {
  constructor(protected readonly service: DiscordMemberService) {
    super(service);
  }
}
