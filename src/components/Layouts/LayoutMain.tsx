import { Outlet } from "react-router-dom"
import { Navbar } from "../ui/Narbar/Navbar"

export const LayoutMain = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
