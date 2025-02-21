"use client";
import { Button } from "@/components/ui/button";
import { useTrackForm } from "@/app/_hooks/useTrackForm";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import { transactionTypeItems } from "@/app/_const/const";
import FormDatePicker from "./FormDatePicker";
import { Form } from "@/components/ui/form";
import { Track } from "@prisma/client";

type TrackEditFormProps = {
  track: Track | null;
}

const TrackEditForm = ({track} : TrackEditFormProps) => {
  const { form, handleSubmit, isPending } = useTrackForm({track});

  return (
    <>
      {track ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="grid grid-cols-[minmax(auto,_480px)] gap-y-6 justify-center mt-16">
            <h2 className="text-2xl font-semibold text-center">Edit Track</h2>
            <FormInput form={form} name="description" label="Description" placeFolder="Description" type="text" />
            <FormInput form={form} name="amount" label="Amount" placeFolder="Amount" type="number" />
            <FormSelect form={form} name="transactionType" label="Transaction Type" placeFolder="Transaction Type" selectedItems={transactionTypeItems}/>
            <FormDatePicker form={form} name="date" label="Date" />
            <Button type="submit" disabled={isPending}>Submit</Button>
          </form>
        </Form>
      ) : (
        <p className="p-6">データが見つかりません。</p>
      )}
    </>
  );
};

export default TrackEditForm;
