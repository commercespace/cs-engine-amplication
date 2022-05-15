import { ServicePoint as TServicePoint } from "../api/servicePoint/ServicePoint";

export const SERVICEPOINT_TITLE_FIELD = "name";

export const ServicePointTitle = (record: TServicePoint): string => {
  return record.name || record.id;
};
