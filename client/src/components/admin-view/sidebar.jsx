import {
  BadgeCheck,
  ChartNoAxesCombined,
  LayoutDashboard,
  ShoppingBasket,
} from "lucide-react";
import { Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";

const adminSidebarMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    id: "products",
    label: "Products",
    path: "/admin/products",
    icon: ShoppingBasket,
  },
  {
    id: "orders",
    label: "Orders",
    path: "/admin/orders",
    icon: BadgeCheck,
  },
];

function MenuItems({ setOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="mt-6 flex flex-col gap-1">
      {adminSidebarMenuItems.map((menuItem) => {
        const isActive = location.pathname === menuItem.path;
        const Icon = menuItem.icon;

        return (
          <div
            key={menuItem.id}
            onClick={() => {
              navigate(menuItem.path);
              setOpen?.(false);
            }}
            className={`flex items-center gap-3 rounded-xl px-4 py-3 cursor-pointer text-base font-medium transition-colors duration-200
              ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
          >
            <Icon size={22} />
            <span>{menuItem.label}</span>
          </div>
        );
      })}
    </nav>
  );
}

function AdminSideBar({ open, setOpen }) {
  const navigate = useNavigate();

  return (
    <Fragment>
      {/* Mobile Sidebar */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-72 p-0">
          <div className="flex flex-col h-full">
            <SheetHeader className="border-b px-6 py-4">
              <SheetTitle className="flex items-center gap-3">
                <ChartNoAxesCombined size={28} className="text-primary" />
                <h1 className="text-xl font-bold tracking-wide">
                  Admin Panel
                </h1>
              </SheetTitle>
            </SheetHeader>
            <div className="flex-1 overflow-y-auto px-4">
              <MenuItems setOpen={setOpen} />
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-72 flex-col border-r bg-background">
        <div
          onClick={() => navigate("/admin/dashboard")}
          className="flex items-center gap-3 px-6 py-5 cursor-pointer border-b"
        >
          <ChartNoAxesCombined size={28} className="text-primary" />
          <h1 className="text-xl font-bold tracking-wide">Admin Panel</h1>
        </div>
        <div className="flex-1 overflow-y-auto px-4">
          <MenuItems />
        </div>
      </aside>
    </Fragment>
  );
}

export default AdminSideBar;
