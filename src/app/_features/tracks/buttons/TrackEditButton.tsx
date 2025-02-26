import { Button } from "@/components/ui/button";
import Link from "next/link";

type TrackEditButtonProps = {
  id: string;
};

const TrackEditButton = ({ id }: TrackEditButtonProps) => {
  return (
    <Link href={`/edit/${id}`}>
      <Button className="bg-blue-500" size="sm">Edit</Button>
    </Link>
  );
};

export default TrackEditButton;
