import { Suspense } from "react";
import Skelton from "./_features/tracks/data-table-skelton";
import TracksContainer from "./_containers/tracks/container";

export const experimental_ppr = true

export default function Home() {
  return (
    <div className="p-4">
      <Suspense fallback={<Skelton />}>
        <TracksContainer />
      </Suspense>
    </div>
  );
}
