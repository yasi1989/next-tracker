"use server"
import { prisma } from "@/lib/prisma";
import { Track } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { TrackState } from "./track-action-type";

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

export async function deleteTrack(id: string): Promise<TrackState> {
  try {
    await prisma.track.delete({
      where: {
        id: id,
      }
    });
    revalidatePath("/");
    return {
      error: "",
      success: true,
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        error: error.message,
        success: false,
      }
    } else {
      return {
        error: "システム異常が発生しました。",
        success: false,
      }
    }
  }
}

export async function addTrack(prevState: TrackState, formData: FormData): Promise<TrackState> {
  console.log(formData.get("description") as string);
  console.log(formData.get("amount") as string);
  console.log(formData.get("transactionType") as string);
  console.log(formData.get("date") as string);
  return {
    error: "システム異常が発生しました。",
    success: false,
  }
}