import { FormValues } from "@/app/_type/type"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { UseFormReturn } from "react-hook-form"

type FormInputProps = {
    form: UseFormReturn<FormValues>,
    name: "description" | "amount",
    label: string,
    placeFolder: string,
    type: string,
}

const FormInput = ({form, name, label, placeFolder, type}: FormInputProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeFolder} type={type} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default FormInput