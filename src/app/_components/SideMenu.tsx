import MenuItem from "./MenuItem"

const SideMenu = () => {
  return (
    <aside className="col-start-1 row-start-2 bg-gray-700 grid grid-cols-[minmax(max-content,_auto) grid-rows-[auto_1fr] gap-4 overflow-x-hidden overflow-y-auto text-white p-4]]">
        <h2 className="text-lg text-slate-300 my-5 mx-3">Menu</h2>
        <ul className="grid content-start">
            <MenuItem label={"All"} link={"#"} />
            <MenuItem label={"Incomes"} link={"#"} />
            <MenuItem label={"Expenses"} link={"#"} />
        </ul>
    </aside>
  )
}

export default SideMenu