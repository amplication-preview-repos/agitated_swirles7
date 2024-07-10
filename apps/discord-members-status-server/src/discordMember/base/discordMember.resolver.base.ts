/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { DiscordMember } from "./DiscordMember";
import { DiscordMemberCountArgs } from "./DiscordMemberCountArgs";
import { DiscordMemberFindManyArgs } from "./DiscordMemberFindManyArgs";
import { DiscordMemberFindUniqueArgs } from "./DiscordMemberFindUniqueArgs";
import { DeleteDiscordMemberArgs } from "./DeleteDiscordMemberArgs";
import { DiscordMemberService } from "../discordMember.service";
@graphql.Resolver(() => DiscordMember)
export class DiscordMemberResolverBase {
  constructor(protected readonly service: DiscordMemberService) {}

  async _discordMembersMeta(
    @graphql.Args() args: DiscordMemberCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [DiscordMember])
  async discordMembers(
    @graphql.Args() args: DiscordMemberFindManyArgs
  ): Promise<DiscordMember[]> {
    return this.service.discordMembers(args);
  }

  @graphql.Query(() => DiscordMember, { nullable: true })
  async discordMember(
    @graphql.Args() args: DiscordMemberFindUniqueArgs
  ): Promise<DiscordMember | null> {
    const result = await this.service.discordMember(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DiscordMember)
  async deleteDiscordMember(
    @graphql.Args() args: DeleteDiscordMemberArgs
  ): Promise<DiscordMember | null> {
    try {
      return await this.service.deleteDiscordMember(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
