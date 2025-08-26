import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { brandOptionsMap, categoryOptionsMap } from "@/config";
import { Badge } from "../ui/badge";

function ShoppingProductTile({ product, handleGetProductDetails, handleAddtoCart }) {
  const renderBadge = () => {
    if (product?.totalStock === 0) {
      return <Badge className="absolute top-2 left-2 bg-red-500">Out Of Stock</Badge>;
    }
    if (product?.totalStock < 10) {
      return <Badge className="absolute top-2 left-2 bg-orange-500">{`Only ${product.totalStock} left`}</Badge>;
    }
    if (product?.salePrice > 0) {
      return <Badge className="absolute top-2 left-2 bg-green-500">Sale</Badge>;
    }
    return null;
  };

  return (
    <Card className="w-full max-w-sm mx-auto transition-transform hover:scale-105 shadow-md hover:shadow-lg cursor-pointer">
      <div onClick={() => handleGetProductDetails(product?._id)}>
        <div className="relative rounded-t-lg overflow-hidden">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[300px] object-cover transition-transform duration-300 hover:scale-110"
          />
          {renderBadge()}
        </div>

        <CardContent className="p-4">
          <h2 className="text-xl font-bold mb-2 truncate">{product?.title}</h2>
          <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
            <span>{categoryOptionsMap[product?.category] || "N/A"}</span>
            <span>{brandOptionsMap[product?.brand] || "N/A"}</span>
          </div>

          <div className="flex justify-between items-center mb-2">
            <span
              className={`${
                product?.salePrice > 0 ? "line-through text-gray-400" : "text-primary"
              } text-lg font-semibold`}
            >
              ₹{product?.price?.toFixed(2)}
            </span>
            {product?.salePrice > 0 && (
              <span className="text-lg font-semibold text-green-600">
                ₹{product?.salePrice?.toFixed(2)}
              </span>
            )}
          </div>
        </CardContent>
      </div>

      <CardFooter>
        {product?.totalStock === 0 ? (
          <Button className="w-full opacity-60 cursor-not-allowed">Out Of Stock</Button>
        ) : (
          <Button onClick={() => handleAddtoCart(product?._id)} className="w-full">
            Add to Cart
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default ShoppingProductTile;
