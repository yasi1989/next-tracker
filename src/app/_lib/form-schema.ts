import { z } from "zod";

export const FormSchema = z.object({
    description: z.string({required_error: "Description is required."}),
    amount: z.string({required_error: "Amount is required."}),
    transactionType: z.enum(["income", "expense"], { required_error: "Transaction type is required."}),
    date: z.date({required_error: "Date is required."})
  });