import TrackTable from "@/app/_features/tracks/TrackTable";
import { getTrackesByTransactionType } from "@/app/_lib/actions"

const TracksContainer = async () => {
  const trackes = await getTrackesByTransactionType("income");
  return (
    <TrackTable trackes={trackes} />
  )
}

export default TracksContainer