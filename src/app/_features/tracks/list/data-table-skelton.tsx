import { Skeleton } from "@/components/ui/skeleton"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Skelton = () => {
  return (
  <div className="rounded-md border">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead><Skeleton className="bg-slate-200 h-4 w-[50px]" /></TableHead>
          <TableHead><Skeleton className="bg-slate-200 h-4 w-[50px]" /></TableHead>
          <TableHead><Skeleton className="bg-slate-200 h-4 w-[50px]" /></TableHead>
          <TableHead><Skeleton className="bg-slate-200 h-4 w-[50px]" /></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
      {[...Array(1)].map((_, i) => (
          <TableRow key={i}>
            <TableCell><Skeleton className="bg-slate-200 h-4 w-[100px]" /></TableCell>
            <TableCell><Skeleton className="bg-slate-200 h-4 w-[100px]" /></TableCell>
            <TableCell><Skeleton className="bg-slate-200 h-4 w-[100px]" /></TableCell>
            <TableCell><Skeleton className="bg-slate-200 h-4 w-[100px]" /></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
  )
}

export default Skelton