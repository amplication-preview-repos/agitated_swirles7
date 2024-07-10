import * as graphql from "@nestjs/graphql";
import { DiscordMemberResolverBase } from "./base/discordMember.resolver.base";
import { DiscordMember } from "./base/DiscordMember";
import { DiscordMemberService } from "./discordMember.service";

@graphql.Resolver(() => DiscordMember)
export class DiscordMemberResolver extends DiscordMemberResolverBase {
  constructor(protected readonly service: DiscordMemberService) {
    super(service);
  }
}
