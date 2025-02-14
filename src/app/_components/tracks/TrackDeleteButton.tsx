import { deleteTrack } from "@/app/_lib/actions";
import { initialState, TrackState } from "@/app/_lib/trackActionType";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";

type TrackDeleteButton = {
  id: string;
};

const TrackDeleteButton = ({ id }: TrackDeleteButton) => {
  const deleteTrackBind = deleteTrack.bind(null, id);
  const [state, formAction, pending] = useActionState<TrackState>(
    deleteTrackBind,
    initialState
  );
  return (
    <>
      <form action={formAction}>
        <Button variant="destructive" disabled={pending}>
          Delete
        </Button>
      </form>
      {state.success && <p className="text-red-600 mt-2">{state.error}</p>}
    </>
  );
};

export default TrackDeleteButton;
