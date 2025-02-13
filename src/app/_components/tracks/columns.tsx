"use client"
import { Button } from "@/components/ui/button";
import { Track } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns/format";
import { ArrowUpDown } from "lucide-react";

  export const columns: ColumnDef<Track>[] = [
    {
      accessorKey: "description",
      header: ({ column }) => (
        <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Description
          <ArrowUpDown />
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
            <ArrowUpDown />
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
            <ArrowUpDown />
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
            <ArrowUpDown />
          </Button>
        )
      },
      accessorFn: (row) => format(new Date(row.date), "yyyy-MM-dd"),
    },
  ]