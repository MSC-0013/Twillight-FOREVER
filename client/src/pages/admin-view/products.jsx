import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductImageUpload from "@/components/admin-view/image-upload";
import AdminProductTile from "@/components/admin-view/product-tile";
import CommonForm from "@/components/common/form";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useToast } from "@/components/ui/use-toast";

import { addProductFormElements } from "@/config";
import {
  addNewProduct,
  deleteProduct,
  editProduct,
  fetchAllProducts,
} from "@/store/admin/products-slice";

const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
  totalStock: "",
  averageReview: 0,
};

// Format numbers as Indian Rupees
const formatRupees = (amount) =>
  amount !== "" && amount !== null
    ? new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
      }).format(amount)
    : "₹0";

function AdminProducts() {
  const dispatch = useDispatch();
  const { toast } = useToast();

  const { productList } = useSelector((state) => state.adminProducts);

  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const [currentEditedId, setCurrentEditedId] = useState(null);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const isFormValid = () =>
    Object.keys(formData)
      .filter((key) => key !== "averageReview")
      .every((key) => formData[key] !== "");

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload =
      currentEditedId !== null
        ? { id: currentEditedId, formData }
        : { ...formData, image: uploadedImageUrl };

    const action =
      currentEditedId !== null ? editProduct(payload) : addNewProduct(payload);

    dispatch(action).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchAllProducts());
        toast({
          title: currentEditedId
            ? "Product updated successfully"
            : "Product added successfully",
        });
        setFormData(initialFormData);
        setOpenCreateDialog(false);
        setCurrentEditedId(null);
        setImageFile(null);
      }
    });
  };

  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId)).then((data) => {
      if (data?.payload?.success) dispatch(fetchAllProducts());
    });
  };

  return (
    <Fragment>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Products Management
        </h1>
        <Button
          onClick={() => setOpenCreateDialog(true)}
          className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-lg shadow-md"
        >
          Add New Product
        </Button>
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {productList && productList.length > 0 ? (
          productList.map((product) => (
            <AdminProductTile
              key={product._id}
              product={{
                ...product,
                price: formatRupees(product.price),
                salePrice: product.salePrice
                  ? formatRupees(product.salePrice)
                  : null,
              }}
              setFormData={setFormData}
              setOpenCreateProductsDialog={setOpenCreateDialog}
              setCurrentEditedId={setCurrentEditedId}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <p className="col-span-full text-center py-20 text-gray-500 border-2 border-dashed rounded-xl">
            No products available. Click "Add New Product" to create one.
          </p>
        )}
      </div>

      {/* Product Form Sheet */}
      <Sheet
        open={openCreateDialog}
        onOpenChange={() => {
          setOpenCreateDialog(false);
          setCurrentEditedId(null);
          setFormData(initialFormData);
          setImageFile(null);
        }}
      >
        <SheetContent side="right" className="max-w-lg p-6 overflow-auto">
          <SheetHeader>
            <SheetTitle className="text-xl font-bold">
              {currentEditedId !== null ? "Edit Product" : "Add New Product"}
            </SheetTitle>
          </SheetHeader>

          {/* Image Upload */}
          <ProductImageUpload
            imageFile={imageFile}
            setImageFile={setImageFile}
            uploadedImageUrl={uploadedImageUrl}
            setUploadedImageUrl={setUploadedImageUrl}
            setImageLoadingState={setImageLoading}
            imageLoadingState={imageLoading}
            isEditMode={currentEditedId !== null}
          />

          {/* Form */}
          <div className="mt-6">
            <CommonForm
              onSubmit={handleSubmit}
              formData={formData}
              setFormData={setFormData}
              formControls={addProductFormElements.map((el) => {
                if (el.name === "price" || el.name === "salePrice") {
                  return {
                    ...el,
                    label: `${el.label} (₹)`,
                    placeholder:
                      el.placeholder?.replace(/\$/, "₹") || "Enter amount in ₹",
                  };
                }
                return el;
              })}
              buttonText={
                currentEditedId !== null ? "Update Product" : "Add Product"
              }
              isBtnDisabled={!isFormValid()}
            />
          </div>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
}

export default AdminProducts;
