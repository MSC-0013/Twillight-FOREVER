import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { useToast } from "../ui/use-toast";

import StarRatingComponent from "../common/star-rating";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { setProductDetails } from "@/store/shop/products-slice";
import { addReview, getReviews } from "@/store/shop/review-slice";

function ProductDetailsDialog({ open, setOpen, productDetails }) {
  const [reviewMsg, setReviewMsg] = useState("");
  const [rating, setRating] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  const { user } = useSelector((s) => s.auth);
  const { cartItems } = useSelector((s) => s.shopCart);
  const { reviews } = useSelector((s) => s.shopReview);

  const averageReview =
    reviews?.length > 0
      ? reviews.reduce((sum, r) => sum + r.reviewValue, 0) / reviews.length
      : 0;

  const handleRatingChange = (value) => setRating(value);

  const handleAddToCart = (productId, stock) => {
    const existingItem = cartItems.items?.find((i) => i.productId === productId);
    if (existingItem && existingItem.quantity + 1 > stock) {
      toast({
        title: `Only ${stock - existingItem.quantity} more can be added`,
        variant: "destructive",
      });
      return;
    }
    dispatch(addToCart({ userId: user?.id, productId, quantity: 1 })).then((res) => {
      if (res?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({ title: "Product added to cart" });
      }
    });
  };

  const handleBuyNow = () => {
    if (!user) {
      toast({ title: "Please login to continue", variant: "destructive" });
      return;
    }

    const buyNowItem = {
      productId: productDetails._id,
      title: productDetails.title,
      image: productDetails.image,
      price:
        productDetails?.salePrice > 0
          ? productDetails.salePrice
          : productDetails.price,
      quantity: 1,
    };

    navigate("/shop/checkout", { state: { buyNow: [buyNowItem] } });
  };

  const handleAddReview = () => {
    if (!reviewMsg.trim()) return;
    dispatch(
      addReview({
        productId: productDetails?._id,
        userId: user?.id,
        userName: user?.userName,
        reviewMessage: reviewMsg,
        reviewValue: rating,
      })
    ).then((res) => {
      if (res.payload.success) {
        setRating(0);
        setReviewMsg("");
        dispatch(getReviews(productDetails?._id));
        toast({ title: "Review added successfully!" });
      }
    });
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(setProductDetails());
    setRating(0);
    setReviewMsg("");
  };

  useEffect(() => {
    if (productDetails) dispatch(getReviews(productDetails?._id));
  }, [productDetails, dispatch]);

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="w-screen h-screen max-w-full p-6 sm:p-12 rounded-none shadow-none bg-white overflow-y-auto">
        <DialogTitle className="sr-only">{productDetails?.title || "Product Details"}</DialogTitle>
        <DialogDescription className="sr-only">
          Detailed information, pricing, stock, and reviews for {productDetails?.title}.
        </DialogDescription>

        {/* Top Navigation */}
        <div className="flex justify-between items-center mb-10">
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-gray-600 hover:text-black"
            onClick={handleClose}
          >
            <ArrowLeft size={18} /> Back
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Product Image */}
          <div className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-10 shadow-xl hover:scale-105 transform transition duration-300">
            <img
              src={productDetails?.image}
              alt={productDetails?.title}
              className="object-contain max-h-[550px] w-full"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-8">
            {/* Title & Description */}
            <div>
              <h1 className="text-5xl font-extrabold text-gray-900 mb-3">
                {productDetails?.title || "Untitled"}
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed">
                {productDetails?.description || "No description available."}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 text-3xl font-bold">
              {productDetails?.salePrice ? (
                <>
                  <span className="text-green-600 text-4xl font-extrabold">
                    ₹{productDetails.salePrice}
                  </span>
                  <span className="text-gray-400 line-through text-2xl">
                    ₹{productDetails.price}
                  </span>
                </>
              ) : (
                <span className="text-gray-900">₹{productDetails?.price ?? 0}</span>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <StarRatingComponent rating={averageReview} />
              <span className="text-gray-500 text-sm">
                {averageReview.toFixed(1)} / 5 • {reviews?.length || 0} reviews
              </span>
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-3 text-sm text-gray-700">
              <span className="bg-gray-100 px-4 py-1.5 rounded-full shadow-sm">Stock: {productDetails?.totalStock ?? 0}</span>
              <span className="bg-gray-100 px-4 py-1.5 rounded-full shadow-sm">Brand: {productDetails?.brand ?? "N/A"}</span>
              <span className="bg-gray-100 px-4 py-1.5 rounded-full shadow-sm">Category: {productDetails?.category ?? "N/A"}</span>
              <span className="bg-gray-100 px-4 py-1.5 rounded-full shadow-sm">SKU: {productDetails?.sku ?? "N/A"}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {productDetails?.totalStock === 0 ? (
                <Button disabled className="flex-1 text-lg py-5 bg-gray-200 text-gray-500">
                  Out of Stock
                </Button>
              ) : (
                <>
                  <Button
                    className="flex-1 text-lg py-5 bg-blue-600 text-white shadow-lg hover:bg-blue-700"
                    onClick={() =>
                      handleAddToCart(productDetails._id, productDetails.totalStock)
                    }
                  >
                    🛒 Add to Cart
                  </Button>
                  <Button
                    className="flex-1 text-lg py-5 bg-green-600 text-white shadow-lg hover:bg-green-700"
                    onClick={handleBuyNow}
                  >
                    ⚡ Buy Now
                  </Button>
                </>
              )}
            </div>

            <Separator className="my-6" />

            {/* Reviews */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">Customer Reviews</h2>
              <div className="max-h-[350px] overflow-y-auto space-y-4 pr-2">
                {reviews?.length ? (
                  reviews.map((r) => (
                    <div
                      key={r._id}
                      className="p-4 bg-white rounded-xl flex gap-4 border border-gray-200 shadow-sm hover:shadow-md transition"
                    >
                      <Avatar className="w-12 h-12 border border-gray-300">
                        <AvatarFallback>{r.userName[0]?.toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-800">{r.userName}</h3>
                          <StarRatingComponent rating={r.reviewValue} />
                        </div>
                        <p className="text-gray-600">{r.reviewMessage}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400">No reviews yet</p>
                )}
              </div>
            </div>

            {/* Add Review */}
            {user && (
              <div className="mt-6 p-6 border rounded-xl space-y-4 bg-gray-50 shadow-sm">
                <Label className="font-medium text-gray-800">Write a Review</Label>
                <StarRatingComponent
                  rating={rating}
                  handleRatingChange={handleRatingChange}
                />
                <Input
                  value={reviewMsg}
                  onChange={(e) => setReviewMsg(e.target.value)}
                  placeholder="Share your thoughts..."
                  className="bg-white border-gray-300"
                />
                <Button disabled={!reviewMsg.trim()} onClick={handleAddReview} className="bg-blue-600 text-white py-3 hover:bg-blue-700 shadow-md">
                  Submit Review
                </Button>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProductDetailsDialog;
