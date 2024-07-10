import { StatusLog as TStatusLog } from "../api/statusLog/StatusLog";

export const STATUSLOG_TITLE_FIELD = "id";

export const StatusLogTitle = (record: TStatusLog): string => {
  return record.id?.toString() || String(record.id);
};
