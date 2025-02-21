import { Suspense } from "react";
import Skelton from "@/app/_features/tracks/form/form-skelton";
import EditTrackContainer from "./_containers/tracks/container";

const EditTrack = async ({ params }: { params: Promise<{ id: string }> }) => {
  return (
    <Suspense fallback={<Skelton />}>
      <EditTrackContainer params={params} />
    </Suspense>
  );
};

export default EditTrack;
