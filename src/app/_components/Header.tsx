import Link from "next/link"

const Header = () => {
  return (
    <header className="grid grid-cols-[1fr] grid-flow-col col-span-full items-center p-4 gap-2 border-b">
        <div className="font-bold text-xl"><Link href={"/"}>Next Tracker</Link></div>
    </header>
  )
}

export default Header