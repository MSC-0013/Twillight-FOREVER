import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";

function AdminProductTile({
  product,
  setFormData,
  setOpenCreateProductsDialog,
  setCurrentEditedId,
  handleDelete,
}) {
  const prepareForEdit = () => {
    setFormData({
      ...product,
      price: product.price?.replace("₹", "").replace(/,/g, ""),
      salePrice: product.salePrice ? product.salePrice.replace("₹", "").replace(/,/g, "") : "",
    });
    setCurrentEditedId(product?._id);
    setOpenCreateProductsDialog(true);
  };

  return (
    <Card className="w-full max-w-sm mx-auto flex flex-col">
      <div className="relative">
        <img
          src={product?.image}
          alt={product?.title}
          className="w-full h-[250px] object-cover rounded-t-lg"
        />
      </div>
      <CardContent className="flex flex-col flex-1 min-h-[120px]">
        <h2 className="text-lg font-bold mb-2 truncate">{product?.title}</h2>
        <div className="flex justify-start items-center gap-2 flex-wrap">
          <span
            className={`${
              product?.salePrice ? "line-through text-gray-400" : "text-primary"
            } font-semibold truncate`}
          >
            {product?.price}
          </span>
          {product?.salePrice ? (
            <span className="text-green-600 font-bold truncate">{product?.salePrice}</span>
          ) : null}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center mt-auto">
        <Button onClick={prepareForEdit}>Edit</Button>
        <Button onClick={() => handleDelete(product?._id)}>Delete</Button>
      </CardFooter>
    </Card>
  );
}

export default AdminProductTile;
