import { LogOut, Menu, ShoppingCart, UserCog } from "lucide-react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { shoppingViewHeaderMenuItems } from "@/config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { logoutUser } from "@/store/auth-slice";
import UserCartWrapper from "./cart-wrapper";
import { useEffect, useState } from "react";
import { fetchCartItems } from "@/store/shop/cart-slice";
import { Label } from "../ui/label";

function MenuItems() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  function handleNavigate(getCurrentMenuItem) {
    sessionStorage.removeItem("filters");
    const currentFilter =
      getCurrentMenuItem.id !== "home" &&
      getCurrentMenuItem.id !== "products" &&
      getCurrentMenuItem.id !== "search"
        ? { category: [getCurrentMenuItem.id] }
        : null;

    if (currentFilter) {
      sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    }

    location.pathname.includes("listing") && currentFilter !== null
      ? setSearchParams(new URLSearchParams(`?category=${getCurrentMenuItem.id}`))
      : navigate(getCurrentMenuItem.path);
  }

  return (
    <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
      {shoppingViewHeaderMenuItems
        .filter((item) => !["men", "women", "kids"].includes(item.id))
        .map((menuItem) => (
          <Label
            key={menuItem.id}
            onClick={() => handleNavigate(menuItem)}
            className="text-white text-sm font-medium cursor-pointer hover:text-orange-400 transition-colors"
          >
            {menuItem.label}
          </Label>
        ))}
    </nav>
  );
}

function HeaderRightContent() {
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.shopCart);
  const [openCartSheet, setOpenCartSheet] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
  }

  useEffect(() => {
    if (user?.id) {
      dispatch(fetchCartItems(user.id));
    }
  }, [dispatch, user?.id]);

  return (
    <div className="flex lg:items-center lg:flex-row flex-col gap-4 text-white">
      {/* Cart Button */}
      <Sheet open={openCartSheet} onOpenChange={() => setOpenCartSheet(false)}>
        <Button
          onClick={() => setOpenCartSheet(true)}
          size="icon"
          className="relative border-2 border-white rounded-full bg-gradient-to-r from-green-400 to-green-600 text-white p-3 hover:shadow-lg transition-shadow"
        >
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute top-[-5px] right-[-5px] bg-white text-green-600 font-bold text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cartItems?.items?.length || 0}
          </span>
          <span className="sr-only">User cart</span>
        </Button>
        <UserCartWrapper
          setOpenCartSheet={setOpenCartSheet}
          cartItems={cartItems?.items?.length > 0 ? cartItems.items : []}
        />
      </Sheet>

      {/* Profile Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="rounded-full border-2 border-white bg-gradient-to-r from-orange-400 to-orange-600 p-1 hover:shadow-lg transition-shadow">
            <AvatarFallback className="bg-white text-orange-500 font-extrabold">
              {user?.userName ? user.userName[0].toUpperCase() : "U"}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" className="w-56 bg-black text-white">
          <DropdownMenuLabel className="text-white">
            Logged in as {user?.userName || "Guest"}
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="border-gray-700" />
          <DropdownMenuItem onClick={() => navigate("/shop/account")}>
            <UserCog className="mr-2 h-4 w-4" />
            Account
          </DropdownMenuItem>
          <DropdownMenuSeparator className="border-gray-700" />
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function ShoppingHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-800 bg-black">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link to="/shop/home" className="flex items-center gap-2">
          <img
            src="/eCommerce App Logo Design.jpeg"
            alt="FOREVER Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="font-extrabold text-lg bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
            FOREVER
          </span>
        </Link>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden border-white text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle header menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full max-w-xs bg-black text-white">
            <MenuItems />
            <HeaderRightContent />
          </SheetContent>
        </Sheet>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center lg:gap-6 text-white">
          <MenuItems />
        </div>

        {/* Right Header Content */}
        <div className="hidden lg:flex lg:items-center lg:gap-4 text-white">
          <HeaderRightContent />
        </div>
      </div>
    </header>
  );
}

export default ShoppingHeader;
