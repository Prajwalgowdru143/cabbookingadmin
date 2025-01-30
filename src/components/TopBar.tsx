import { Search, Bell, MoreVertical } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="bg-white border-b">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center flex-1 gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <span className="sr-only">Menu</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          
        </div>

        <div className="flex items-center gap-4">
        <div className="flex-1 max-w-lg">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="search"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Bell className="w-5 h-5" />
          </button>
          <div className="relative h-9 w-9 rounded-full">
                <img
                  src="https://github.com/shadcn.png"
                  alt="Avatar"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}