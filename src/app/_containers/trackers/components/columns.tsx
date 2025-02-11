import { Track } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns/format";

  export const columns: ColumnDef<Track>[] = [
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      accessorKey: "amount",
      header: "Amount",
    },
    {
      accessorKey: "transactionType",
      header: "TransactionType",
    },
    {
      accessorKey: "date",
      header: "Date",
      accessorFn: (row) => format(new Date(row.date), "yyyy-MM-dd"),
    },
  ]