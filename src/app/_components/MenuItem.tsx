"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";

type MenuItemProps = {
    label: string;
    link: string;
}

const MenuItem = ({label, link} : MenuItemProps) => {
  const pathname = usePathname();
  return (
    <li className={`grid grid-cols-[minmax(max-content,_1fr) px-2 py-2 hover:bg-gray-600 rounded-md]
    ${pathname === link && "bg-gray-500"}`}>
        <Link href={link} className="grid grid-cols-[auto_1fr] items-center gap-4 px-2 py-3">
            {label}
        </Link>
    </li>
  )
}

export default MenuItem