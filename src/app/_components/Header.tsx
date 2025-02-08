import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const Header = () => {
  return (
    <header className="grid grid-cols-[auto_1fr] grid-flow-col col-span-full items-center p-4 gap-2 border-b">
        <button className="p-3">
            <FontAwesomeIcon className="w-5 h-5 md:w-6 md:h-6" icon={faBars} />
        </button>
        <div className="font-bold text-xl"><Link href={"/"}>Next Tracker</Link></div>
    </header>
  )
}

export default Header