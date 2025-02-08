import Link from "next/link"

const SideMenu = () => {
  return (
    <aside className="col-start-1 row-start-2 bg-gray-700 grid grid-cols-[minmax(max-content,_auto) grid-rows-[auto_1fr] gap-4 overflow-x-hidden overflow-y-auto text-white p-4]]">
        <h2 className="text-lg text-slate-300 my-5 mx-3">Menu</h2>
        <ul className="grid content-start">
            <li className="grid grid-cols-[minmax(max-content,_1fr) px-2 py-2 hover:bg-gray-500 rounded-md]">
                <Link href="#" className="grid grid-cols-[auto_1fr] items-center gap-4 px-2 py-3 hover:bg-gray-500 rounded-md">
                    All
                </Link>
            </li>
            <li className="grid grid-cols-[minmax(max-content,_1fr) px-2 py-2 hover:bg-gray-500 rounded-md]">
                <Link href="#" className="grid grid-cols-[auto_1fr] items-center gap-4 px-2 py-3 hover:bg-gray-500 rounded-md">
                    Incomes
                </Link>
            </li>
            <li className="grid grid-cols-[minmax(max-content,_1fr) px-2 py-2 hover:bg-gray-500 rounded-md]">
                <Link href="#" className="grid grid-cols-[auto_1fr] items-center gap-4 px-2 py-3 hover:bg-gray-500 rounded-md">
                    Expenses
                </Link>
            </li>
        </ul>
    </aside>
  )
}

export default SideMenu