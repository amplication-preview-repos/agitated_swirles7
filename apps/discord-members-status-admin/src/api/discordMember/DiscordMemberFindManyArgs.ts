import { DiscordMemberWhereInput } from "./DiscordMemberWhereInput";
import { DiscordMemberOrderByInput } from "./DiscordMemberOrderByInput";

export type DiscordMemberFindManyArgs = {
  where?: DiscordMemberWhereInput;
  orderBy?: Array<DiscordMemberOrderByInput>;
  skip?: number;
  take?: number;
};
