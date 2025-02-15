import TrackTable from "@/app/_features/tracks/TrackTable";
import { getTracks } from "@/app/_lib/actions"

const TracksContainer = async () => {
  const trackes = await getTracks();
  return (
    <TrackTable trackes={trackes} />
  )
}

export default TracksContainer