import { StatusLogWhereInput } from "./StatusLogWhereInput";
import { StatusLogOrderByInput } from "./StatusLogOrderByInput";

export type StatusLogFindManyArgs = {
  where?: StatusLogWhereInput;
  orderBy?: Array<StatusLogOrderByInput>;
  skip?: number;
  take?: number;
};
