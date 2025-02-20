import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { FormSchema } from "../_lib/form-schema";
import { startTransition, useActionState } from "react";
import { addTrack } from "../_lib/actions";
import { initialState } from "../_lib/track-action-type";

export const useTrackForm = () => {

    const [state, formAction, isPending] = useActionState(addTrack, initialState);
    
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
        startTransition(() => {
          const formData = new FormData();
          Object.entries(values).forEach(([Key, value]) => {
            if(value instanceof Date) {
              formData.append(Key, value.toISOString());
            } else {
              formData.append(Key, value);
            }
            formAction(formData);
          })
        })
      }

      return {form, handleSubmit, state, isPending}
}
