import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { addTrack, editTrack } from "../../_lib/actions";
import { useTransition } from "react";
import { toast } from "sonner";
import { Track } from "@prisma/client";
import { AddFormSchema, EditFormSchema } from "@/app/_lib/formSchema";

type UseFormProps = {
  type: "add" | "edit";
  track?: Track | null;
}

const trackActions = {
  add: addTrack,
  edit: editTrack,
}

export const useTrackForm = ({ type, track} : UseFormProps) => {
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof AddFormSchema | typeof EditFormSchema>>({
        resolver: zodResolver(type === "add" ? AddFormSchema : EditFormSchema),
        defaultValues: track ? {
          id: type === "edit" ? track.id : "",
          description: track.description,
          amount: track.amount,
          transactionType: track.transactionType as "income" | "expense",
          date: track.date,
        } : {
          id: "",
          description: "",
          amount: 0,
          transactionType: undefined,
          date: undefined,
        },
      })
    
      const handleSubmit = (values: z.infer<typeof AddFormSchema | typeof EditFormSchema>) => {
        startTransition(async () => {
          try {
            const {success, error} = await trackActions[type](values);
            if (success) {
              toast.success("正常に処理されました");
            } else {
              toast.error(`エラーが発生しました：${error}`);
            }
          } catch (error) {
            if(error instanceof Error) {
              toast.error(`予期せぬエラーが発生しました：${error.message}`);
            } else {
              toast.error("システムエラーが発生しました");
            }
          }
        })
      }

      return {form, handleSubmit, isPending}
}
