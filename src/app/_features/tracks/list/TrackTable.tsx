import { Track } from "@prisma/client";
import { DataTable } from "./data-table";
import { columns } from "./columns";

type TrackTableProps = {
  trackes: Track[];
}

const TrackTable = ({trackes} : TrackTableProps) => {
  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={trackes} />
    </div>
  )
}

export default TrackTable