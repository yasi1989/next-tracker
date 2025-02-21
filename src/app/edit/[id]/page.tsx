import { Suspense } from "react";
import Skelton from "@/app/_features/tracks/form/form-skelton";
import EditTrackContainer from "./_containers/tracks/container";

type EditTrackParams = {
  params: Promise<{ id: string }>;
};

const EditTrack = async ({ params }: EditTrackParams) => {
  const { id } = await params;
  return (
    <Suspense fallback={<Skelton />}>
      <EditTrackContainer id={id} />
    </Suspense>
  );
};

export default EditTrack;
