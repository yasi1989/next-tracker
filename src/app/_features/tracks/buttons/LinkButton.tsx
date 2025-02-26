import { Button } from "@/components/ui/button"
import Link from "next/link"

type LinkButtonProps = {
    variant?: "default" | "link" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined,
    link: string,
    size?: "default" | "sm" | "lg" | "icon" | null | undefined,
    label: string,
}

const LinkButton = ({variant = "default", link, size = "default", label}: LinkButtonProps) => {
  return (
    <Link href={link}>
      <Button variant={variant} size={size}>{label}</Button>
    </Link>
  )
}

export default LinkButton