import { DiscordMember as TDiscordMember } from "../api/discordMember/DiscordMember";

export const DISCORDMEMBER_TITLE_FIELD = "id";

export const DiscordMemberTitle = (record: TDiscordMember): string => {
  return record.id?.toString() || String(record.id);
};
