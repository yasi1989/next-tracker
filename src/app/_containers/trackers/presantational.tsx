"use client";

import { Track } from "@prisma/client";
import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";

type TrackerPresatationalProps = {
  trackes: Track[];
}

const TrackerPresatational = ({trackes} : TrackerPresatationalProps) => {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={trackes} />
    </div>
  )
}

export default TrackerPresatational