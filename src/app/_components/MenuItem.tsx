import Link from "next/link"

type MenuItemProps = {
    label: string;
    link: string;
}

const MenuItem = ({label, link} : MenuItemProps) => {
  return (
    <li className="grid grid-cols-[minmax(max-content,_1fr) px-2 py-2 hover:bg-gray-500 rounded-md]">
        <Link href={link} className="grid grid-cols-[auto_1fr] items-center gap-4 px-2 py-3 hover:bg-gray-500 rounded-md">
            {label}
        </Link>
    </li>
  )
}

export default MenuItem