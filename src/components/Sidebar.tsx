import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Car, Navigation } from 'lucide-react';
import clsx from 'clsx';

export default function Sidebar() {
  const links = [
    { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/trips', icon: Navigation, label: 'Trips' },
    { to: '/drivers', icon: Car, label: 'Drivers' },
  ];

  return (
    <aside className="w-64 min-h-screen bg-white border-r">
      <div className="p-4">
        <div className="flex items-center gap-3 mb-8 border-b-2 pb-4 border-gray-200">
          <img
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=50&h=50&fit=crop"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="font-medium">Marria</h3>
            <p className="text-sm text-gray-500">View profile</p>
          </div>
        </div>
        
        <nav className="space-y-2">
          {links.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                clsx(
                  'flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg',
                  isActive
                    ? 'bg-black text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                )
              }
            >
              <Icon className="w-5 h-5" />
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}