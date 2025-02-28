import TrackEditForm from "@/app/_features/tracks/form/TrackEditForm";
import { getTrack } from "@/app/_lib/actions";

const EditTrackContainer = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const track = await getTrack(id);
  return <TrackEditForm track={track} />;
};

export default EditTrackContainer;
