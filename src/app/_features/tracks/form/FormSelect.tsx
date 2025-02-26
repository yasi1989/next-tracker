import { FormValues } from "@/app/_features/_type/type";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";

type FormSelectProps = {
  form: UseFormReturn<FormValues>;
  name: "transactionType";
  label: string;
  placeFolder: string;
  selectedItems: string[];
};

const FormSelect = ({
  form,
  name,
  label,
  placeFolder,
  selectedItems,
}: FormSelectProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeFolder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {selectedItems.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormSelect;
