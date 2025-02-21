"use server";
import { prisma } from "@/lib/prisma";
import { Track } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { TrackState } from "./track-action-type";
import { z } from "zod";
import { FormSchema } from "./form-schema";

export async function getTrack(id: string): Promise<Track | null> {
  const track = await prisma.track.findUnique({
    where: {id},
  });
  return track;
}

export async function getTracks(): Promise<Track[]> {
  const trackes = await prisma.track.findMany({
    orderBy: {
      date: "asc",
    },
  });
  return trackes;
}

export async function getTrackesByTransactionType(
  transactionType: string
): Promise<Track[]> {
  const trackes = await prisma.track.findMany({
    where: {
      transactionType: transactionType,
    },
    orderBy: {
      date: "asc",
    },
  });
  return trackes;
}

export async function deleteTrack(id: string): Promise<TrackState> {
  try {
    await prisma.track.delete({
      where: {
        id: id,
      },
    });
    revalidatePath("/");
    return {
      error: "",
      success: true,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        error: error.message,
        success: false,
      };
    } else {
      return {
        error: "システム異常が発生しました。",
        success: false,
      };
    }
  }
}

export async function addTrack(
  values: z.infer<typeof FormSchema>
): Promise<TrackState> {
  try {
    await prisma.track.create({
      data: {
        description: values.description,
        amount: Number(values.amount),
        transactionType: values.transactionType,
        date: values.date,
      },
    });
    return {
      error: "",
      success: true,
    };
  } catch(error) {
    if (error instanceof z.ZodError) {
      return {
        error: error.errors.map((e) => e.message).join(","),
        success: false,
      }
    }
    if(error instanceof Error) {
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
