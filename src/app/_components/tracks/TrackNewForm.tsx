"use client"

import { useForm } from "@conform-to/react"
import { parseWithZod, getZodConstraint } from "@conform-to/zod"
import { z } from "zod";

const TrackNewForm = () => {
  const schema = z.object({
    description: z.string({required_error: "必須です。"}),
    amount: z.number({required_error: "必須です。"}).int({message: "整数を入力してください。"}).positive({message: "正の数を入力してください。"}),
    transactionType: z.enum(["income", "expense"], { required_error: "選択してください。", message: "無効な選択です。"}),

  })
  const [form, fields] = useForm({
      onValidate: ({formData}) => parseWithZod(formData, { schema }),
      constraint: getZodConstraint(schema),
      shouldValidate: "onBlur",
      shouldRevalidate: "onInput",
  });
  return (
    <form className="grid grid-cols-[max-content_minmax(auto_480px)] gap-x-8 gap-y-6 justify-center content-center mt-4" action="">
        <h1 className="col-span-2 text-center font-bold text-2xl">Create Track</h1>
        <div className="grid grid-cols- grid-rows-[auto_18px] gap-y-1">

        </div>
    </form>
  )
}

export default TrackNewForm