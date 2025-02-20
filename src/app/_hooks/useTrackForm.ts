import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { FormSchema } from "../_lib/form-schema";
import { addTrack } from "../_lib/actions";
import { useTransition } from "react";
import { toast } from "sonner";

export const useTrackForm = () => {
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          description: "",
          amount: "0",
          transactionType: undefined,
          date: undefined,
        }
      })
    
      const handleSubmit = (values: z.infer<typeof FormSchema>) => {
        startTransition(async () => {
          try {
            const {success, error} = await addTrack(values);
            if (success) {
              toast.success("正常に処理されました");
              form.reset();
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
