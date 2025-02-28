import LinkButton from "./LinkButton";

type TrackEditButtonProps = {
  id: string;
};

const TrackEditButton = ({ id }: TrackEditButtonProps) => {
  return (
    <LinkButton label="Edit" size="sm" link={`/edit/${id}`} className="bg-blue-500" />
  );
};

export default TrackEditButton;
