import { Search, Bell, Menu, MoreVertical } from "lucide-react"

interface TopBarProps {
  onMenuClick: () => void
}

export default function TopBar({ onMenuClick }: TopBarProps) {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-2 sm:px-6 sm:py-4">
        <div className="flex items-center gap-4">
          <button onClick={onMenuClick} className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg lg:hidden">
            <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <div className="flex items-center gap-2">
            <span className="text-lg sm:text-xl font-semibold hidden sm:inline-block">TaxiGo</span>
            <span className="text-lg font-semibold sm:hidden">TG</span>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden sm:block relative max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
          </button>

          <div className="flex items-center gap-2 sm:gap-3 border-l pl-2 sm:pl-4">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-sm font-medium">John Doe</span>
              <span className="text-xs text-gray-500">Admin</span>
            </div>
            <div className="relative h-8 w-8 sm:h-10 sm:w-10">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <button className="p-1.5 hover:bg-gray-100 rounded-lg sm:hidden">
              <MoreVertical className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="p-4 sm:hidden border-t">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="search"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </header>
  )
}

