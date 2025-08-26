import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import accImg from "../../assets/Account.jpeg";
import Address from "@/components/shopping-view/address";
import ShoppingOrders from "@/components/shopping-view/orders";

function ShoppingAccount() {
  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      {/* Hero / Banner Section */}
      <div className="relative h-[280px] w-full">
        <img
          src={accImg}
          alt="Account Banner"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-3xl font-bold drop-shadow-lg">My Account</h1>
          <p className="text-sm opacity-80">Manage your orders & addresses</p>
        </div>
      </div>

      {/* Account Content */}
      <div className="container mx-auto w-full max-w-5xl -mt-12 px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border bg-background p-6 shadow-lg backdrop-blur-md">
          <Tabs defaultValue="orders" className="w-full">
            <TabsList className="grid w-full grid-cols-2 rounded-xl bg-muted p-1">
              <TabsTrigger
                value="orders"
                className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm font-medium"
              >
                Orders
              </TabsTrigger>
              <TabsTrigger
                value="address"
                className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm font-medium"
              >
                Address
              </TabsTrigger>
            </TabsList>

            {/* Orders Section */}
            <TabsContent value="orders" className="mt-6">
              <ShoppingOrders />
            </TabsContent>

            {/* Address Section */}
            <TabsContent value="address" className="mt-6">
              <Address />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default ShoppingAccount;
