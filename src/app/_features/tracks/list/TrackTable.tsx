import { Track } from "@prisma/client";
import { DataTable } from "./DataTable";
import { DataColumns } from "./DataColumns";

type TrackTableProps = {
  trackes: Track[];
}

const TrackTable = ({trackes} : TrackTableProps) => {
  return (
    <div className="container mx-auto">
      <DataTable columns={DataColumns} data={trackes} />
    </div>
  )
}

export default TrackTable