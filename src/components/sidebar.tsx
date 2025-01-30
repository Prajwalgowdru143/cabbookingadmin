import { NavLink } from "react-router-dom"
import { LayoutDashboard, Navigation, Car, X } from "lucide-react"
import clsx from "clsx"

interface SidebarProps {
  onClose?: () => void
}

export default function Sidebar({ onClose }: SidebarProps) {
  const links = [
    { to: "/", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/trips", icon: Navigation, label: "Trips" },
    { to: "/drivers", icon: Car, label: "Drivers" },
  ]

  return (
    <aside className="flex flex-col h-full bg-white">
      <div className="flex items-center justify-between p-4 border-b lg:hidden">
        <span className="text-lg sm:text-xl font-semibold">TaxiGo</span>
        <button onClick={onClose} className="p-1.5 hover:bg-gray-100 rounded-lg">
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />
          <div>
            <h3 className="font-medium">John Doe</h3>
            <p className="text-sm text-gray-500">View profile</p>
          </div>
        </div>

        <nav className="space-y-1">
          {links.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                clsx(
                  "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                  isActive ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100",
                )
              }
            >
              <Icon className="h-5 w-5" />
              {label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t">
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-medium mb-2">Need Help?</h4>
          <p className="text-sm text-gray-500 mb-3">Contact our support team</p>
          <button className="w-full px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </aside>
  )
}

