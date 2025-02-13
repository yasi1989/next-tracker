import { getTrackesByTransactionType } from "@/app/_lib/actions"
import TracksPresantational from "./presantational"

const TracksContainer = async () => {
  const trackes = await getTrackesByTransactionType("expense");
  return (
    <TracksPresantational trackes={trackes} />
  )
}

export default TracksContainer