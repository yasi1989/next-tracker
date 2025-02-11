import { prisma } from "@/lib/prisma";
import { Track } from "@prisma/client";

export async function getTrackes(): Promise<Track[]> {
  const trackes = await prisma.track.findMany({
    orderBy: {
      date: "asc",
    },
  });
  return trackes;
}
