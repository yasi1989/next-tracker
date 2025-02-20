import { Suspense } from "react";
import TracksContainer from "./_containers/tracks/container";
import Skelton from "./_features/tracks/list/data-table-skelton";

export const experimental_ppr = true

export default function Home() {
  return (
    <div>
      <Suspense fallback={<Skelton />}>
        <TracksContainer />
      </Suspense>
    </div>
  );
}
