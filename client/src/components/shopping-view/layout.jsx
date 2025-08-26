import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";

function ShoppingLayout() {
  return (
    <div className="flex flex-col bg-white">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-white">
        <ShoppingHeader />
      </header>

      {/* Page Content with padding-top to avoid overlap */}
      <main className="flex flex-col w-full pt-16">
        <Outlet />
      </main>
    </div>
  );
}

export default ShoppingLayout;
