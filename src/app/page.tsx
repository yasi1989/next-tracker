import { Suspense } from "react";
import TrackerContainer from "./_containers/trackers/container";

export const experimental_ppr = true

export default function Home() {
  return (
    <div className="p-4">
      <Suspense fallback={<div>Loading...</div>}>
        <TrackerContainer />
      </Suspense>
    </div>
  );
}
