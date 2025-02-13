import { prisma } from "@/lib/prisma";
import { Track } from "@prisma/client";

export async function getTracks(): Promise<Track[]> {
  const trackes = await prisma.track.findMany({
    orderBy: {
      date: "asc",
    },
  });
  return trackes;
}

export async function getTrackesByTransactionType(transactionType: string): Promise<Track[]> {
  const trackes = await prisma.track.findMany({
    where: {
      transactionType: transactionType,
    },
    orderBy: {
      date: "asc",
    }
  });
  return trackes;
}