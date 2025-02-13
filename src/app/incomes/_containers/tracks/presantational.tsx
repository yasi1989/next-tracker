import { columns } from "@/app/_components/tracks/columns";
import { DataTable } from "@/app/_components/tracks/data-table";
import { Track } from "@prisma/client";

type TracksPresantationalProps = {
  trackes: Track[];
}

const TracksPresantational = ({trackes} : TracksPresantationalProps) => {
  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={trackes} />
    </div>
  )
}

export default TracksPresantational