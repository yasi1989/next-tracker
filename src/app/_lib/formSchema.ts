import { z } from "zod";

const BaseFormSchema = z.object({
    id: z.string(),
    description: z.string().nonempty({message: "Description is required."}),
    amount: z.coerce.number().int({message: "Amount is integer."}).positive({message: "Amount is positive number."}),
    transactionType: z.enum(["income", "expense"], { required_error: "Transaction type is required."}),
    date: z.date({required_error: "Date is required."})
  });

  export const AddFormSchema = BaseFormSchema;
  export const EditFormSchema = BaseFormSchema.extend({
    id: z.string().nonempty({message: "ID is required for editing."}),
  });