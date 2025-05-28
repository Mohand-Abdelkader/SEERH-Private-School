import { Outlet, Link, useLocation } from "react-router-dom";
import { Menu, LogOut, Home, Users, Bell, Settings , MessageCircle} from "lucide-react";
import { useState } from "react";

function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: "/admin", label: "Dashboard", icon: Home },
    {
      path: "/admin/admission-requests",
      label: "Admission Requests",
      icon: Users,
    },
    { path: "/admin/messages", label: "Messages", icon: MessageCircle },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-[#0d4c83] text-white transition-all duration-300 ease-in-out flex flex-col`}
      >
        <div className="p-4 flex justify-between items-center border-b border-[#ffffff1a]">
          <h2
            className={`${
              isSidebarOpen ? "block" : "hidden"
            } font-bold text-xl`}
          >
            Admin Panel
          </h2>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-[#0a3d6a] rounded-lg transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>

        <nav className="mt-6 flex-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3 ${
                  isActive(item.path) ? "bg-[#0a3d6a]" : "hover:bg-[#0a3d6a]"
                } transition-colors`}
              >
                <Icon size={20} className="min-w-[20px]" />
                {isSidebarOpen && <span className="ml-3">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-[#ffffff1a] p-4">
          <button className="flex items-center gap-2 text-white hover:text-red-400 transition-colors w-full">
            <LogOut size={20} className="min-w-[20px]" />
            {isSidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">
            {navItems.find((item) => isActive(item.path))?.label || "Admin"}
          </h1>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Settings size={20} />
            </button>
          </div>
        </div>
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AdminLayout;
