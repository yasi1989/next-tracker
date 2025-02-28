import { Skeleton } from "@/components/ui/skeleton"

const FormSkelton = () => {
  return (
    <div className="grid grid-cols-[minmax(auto,_480px)] gap-y-6 justify-center mt-16">
      <Skeleton className="bg-slate-200 h-4 w-[200px]" />
      <Skeleton className="bg-slate-200 h-4 w-[200px]" />
      <Skeleton className="bg-slate-200 h-4 w-[200px]" />
      <Skeleton className="bg-slate-200 h-4 w-[200px]" />
      <Skeleton className="bg-slate-200 h-4 w-[200px]" />
    </div>
  )
}

export default FormSkelton