import { getTracks } from "@/app/_lib/actions"
import TracksPresantational from "./presantational"

const TracksContainer = async () => {
  const trackes = await getTracks();
  return (
    <TracksPresantational trackes={trackes} />
  )
}

export default TracksContainer