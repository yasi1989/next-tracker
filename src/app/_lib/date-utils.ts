import { format } from "date-fns";
export const formatDate = (date: Date | string, dateFormat: string = "yyyy-MM-dd") => {
    const parseDate = typeof date === "string" ? new Date(date) : date;
    return format(parseDate, dateFormat);
  };