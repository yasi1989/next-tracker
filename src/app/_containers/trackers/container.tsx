import { getTrackes } from "@/app/_lib/actions"
import TrackerPresatational from "./presantational"

const TrackerContainer = async () => {
  const trackes = await getTrackes();
  return (
    <TrackerPresatational trackes={trackes} />
  )
}

export default TrackerContainer