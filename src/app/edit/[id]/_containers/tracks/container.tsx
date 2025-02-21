import TrackEditForm from "@/app/_features/tracks/form/TrackEditForm";
import { getTrack } from "@/app/_lib/actions";

type EditTrackContainerProps = {
  id: string;
};

const EditTrackContainer = async ({ id }: EditTrackContainerProps) => {
  const track = await getTrack(id);
  return <TrackEditForm track={track} />;
};

export default EditTrackContainer;
