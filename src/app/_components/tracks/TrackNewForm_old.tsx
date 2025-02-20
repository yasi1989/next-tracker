// "use client";

// import { Button } from "@/components/ui/button";
// import { Calendar } from "@/components/ui/calendar";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { cn } from "@/lib/utils";
// import { format } from "date-fns/format";
// import { CalendarIcon } from "lucide-react";
// import { z } from "zod";

// const TrackNewForm = () => {
//   const schema = z.object({
//     description: z.string().optional(),  // 任意項目に
//     amount: z.number().optional(),       // 任意項目に
//     transactionType: z.enum(["income", "expense"]),
//     date: z.string().refine(
//       (val) => !val || !isNaN(Date.parse(val)),
//       { message: "Invalid date format" }
//     )
//   });
//   const [form, fields] = useForm({
//     onValidate: ({ formData }) => {
//       // 現在のフォームの状態をログ
//       console.log('Form state before validation:', {
//         date: fields.date.value,
//         formDataDate: formData.get('date')
//       });
  
//       const result = parseWithZod(formData, { schema });
      
//       // バリデーション後の状態をログ
//       console.log('Validation result:', result);
      
//       return result;
//     },
//     constraint: getZodConstraint(schema),
//     shouldValidate: "onInput",
//     shouldRevalidate: "onSubmit",
//   });

//   console.log(fields.date.value)
//   return (
//     <form
//       className="grid grid-cols-[max-content_minmax(auto,_400px)] gap-x-8 gap-y-6 justify-center mt-4"
//       {...getFormProps(form)}
//       action=""
//     >
//       <h1 className="col-span-2 text-center font-bold text-2xl">
//         Create Track
//       </h1>
//       <div className="grid grid-cols-subgrid grid-rows-[auto_18px] gap-y-1 items-center col-span-2">
//         <Label htmlFor="description">Description</Label>
//         <Input
//           placeholder="Enter description"
//           {...getInputProps(fields.description, { type: "text" })}
//           key={fields.description.key}
//         />
//         <div
//           id={fields.description.errorId}
//           className="text-destructive col-start-2 text-sm"
//         >
//           {fields.description.errors}
//         </div>
//       </div>
//       <div className="grid grid-cols-subgrid grid-rows-[auto_18px] gap-y-1 items-center col-span-2">
//         <Label htmlFor="amount">Amount</Label>
//         <Input
//           {...getInputProps(fields.amount, { type: "number" })}
//           placeholder="Enter amount"
//           key={fields.amount.key}
//         />
//         <div
//           id={fields.amount.errorId}
//           className="text-destructive col-start-2 text-sm"
//         >
//           {fields.amount.errors}
//         </div>
//       </div>
//       <div className="grid grid-cols-subgrid grid-rows-[auto_18px] gap-y-1 items-center col-span-2">
//         <Label htmlFor="transactionType">Transaction Type</Label>
//         <Select
//           key={fields.transactionType.key}
//           name={fields.transactionType.name}
//           defaultValue={fields.transactionType.initialValue}
//           onValueChange={(value) => {
//             form.update({
//               name: fields.transactionType.name,
//               value,
//             });
//           }}
//         >
//           <SelectTrigger
//             id={fields.transactionType.id}
//             aria-invalid={!fields.transactionType.valid || undefined}
//             aria-describedby={
//               !fields.transactionType.valid
//                 ? fields.transactionType.errorId
//                 : undefined
//             }
//           >
//             <SelectValue placeholder="Please Select" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="income">income</SelectItem>
//             <SelectItem value="expense">expense</SelectItem>
//           </SelectContent>
//         </Select>
//         <div
//           id={fields.transactionType.errorId}
//           className="text-destructive col-start-2 text-sm"
//         >
//           {fields.transactionType.errors}
//         </div>
//       </div>
//       <div className="grid grid-cols-subgrid grid-rows-[auto_18px] gap-y-1 items-center col-span-2">
//         <Label htmlFor="date">Date</Label>
//         <Popover>
//   <PopoverTrigger asChild>
//     <Button
//       variant={"outline"}
//       className={cn(
//         "w-[280px] justify-start text-left font-normal",
//         !fields.date.value && "text-muted-foreground"
//       )}
//     >
//       <CalendarIcon className="mr-2 h-4 w-4" />
//       {fields.date.value ? format(new Date(fields.date.value), "PPP") : <span>Pick a date</span>}
//     </Button>
//   </PopoverTrigger>
//   <PopoverContent className="w-auto p-0">
//     <input
//       type="hidden"
//       name={fields.date.name}
//       value={fields.date.value || ''}
//     />
//     <Calendar
//       mode="single"
//       selected={fields.date.value ? new Date(fields.date.value) : undefined}
//       onSelect={(date) => {
//         if (!date) return;
        
//         // 1. まず hidden input を更新
//         const dateInput = document.createElement('input');
//         dateInput.type = 'hidden';
//         dateInput.name = fields.date.name;
//         dateInput.value = date.toISOString();
        
//         // 2. フォームに input を追加
//         form.elements.set(fields.date.name, dateInput);
        
//         // 3. フォームの状態を更新
//         form.update({
//           name: fields.date.name,
//           value: date.toISOString(),
//           validated: true
//         });
//       }}
//       initialFocus
//     />
//   </PopoverContent>
// </Popover>
//         <div
//           id={fields.date.errorId}
//           className="text-destructive col-start-2 text-sm"
//         >
//           {fields.date.errors}
//         </div>
//       </div>
//     </form>
//   );
// };

// export default TrackNewForm;
