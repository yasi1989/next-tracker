"use client"
import { Button } from "@/components/ui/button";
import { Track } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns/format";

  export const columns: ColumnDef<Track>[] = [
    {
      accessorKey: "description",
      header: ({ column }) => (
        <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Description
        </Button>
      )
    },
    {
      accessorKey: "amount",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Amount
          </Button>
        )
      }
    },
    {
      accessorKey: "transactionType",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            TransactionType
          </Button>
        )
      },
    },
    {
      accessorKey: "date",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Date
          </Button>
        )
      },
      accessorFn: (row) => format(new Date(row.date), "yyyy-MM-dd"),
    },
  ]