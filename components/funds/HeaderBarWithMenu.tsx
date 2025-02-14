import { Menu } from "lucide-react"

const HeaderBarWithMenu = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <h1 className="text-xl font-bold text-blue-600">Wallet App</h1>
      <button className="p-2 rounded-full hover:bg-gray-100">
        <Menu className="w-6 h-6 text-gray-600" />
      </button>
    </header>
  )
}

export default HeaderBarWithMenu

