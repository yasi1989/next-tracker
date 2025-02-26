import { Suspense } from "react";
import EditTrackContainer from "./_containers/tracks/container";
import FormSkelton from "@/app/_features/tracks/form/FormSkelton";

const EditTrack = async ({ params }: { params: Promise<{ id: string }> }) => {
  return (
    <Suspense fallback={<FormSkelton />}>
      <EditTrackContainer params={params} />
    </Suspense>
  );
};

export default EditTrack;
