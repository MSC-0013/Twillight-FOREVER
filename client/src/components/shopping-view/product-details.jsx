import { StarIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { useToast } from "../ui/use-toast";
import { setProductDetails } from "@/store/shop/products-slice";
import { Label } from "../ui/label";
import StarRatingComponent from "../common/star-rating";
import { useEffect, useState } from "react";
import { addReview, getReviews } from "@/store/shop/review-slice";
import { useNavigate } from "react-router-dom";

function ProductDetailsDialog({ open, setOpen, productDetails }) {
  const [reviewMsg, setReviewMsg] = useState("");
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.shopCart);
  const { reviews } = useSelector((state) => state.shopReview);
  const { toast } = useToast();

  const averageReview =
    reviews && reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.reviewValue, 0) / reviews.length
      : 0;

  function handleRatingChange(value) {
    setRating(value);
  }

  function handleAddToCart(productId, stock) {
    const existingItem = cartItems.items?.find((i) => i.productId === productId);
    if (existingItem && existingItem.quantity + 1 > stock) {
      toast({ title: `Only ${existingItem.quantity} quantity can be added`, variant: "destructive" });
      return;
    }
    dispatch(addToCart({ userId: user?.id, productId, quantity: 1 })).then((res) => {
      if (res?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({ title: "Product added to cart" });
      }
    });
  }

  function handleBuyNow() {
    if (!user) {
      toast({ title: "Please login to continue", variant: "destructive" });
      return;
    }
    // Optionally, add product to cart before navigating
    dispatch(addToCart({ userId: user?.id, productId: productDetails._id, quantity: 1 })).then(() => {
      navigate("/checkout");
    });
  }

  function handleAddReview() {
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
  }

  function handleClose() {
    setOpen(false);
    dispatch(setProductDetails());
    setRating(0);
    setReviewMsg("");
  }

  useEffect(() => {
    if (productDetails) dispatch(getReviews(productDetails?._id));
  }, [productDetails]);

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="w-full h-full max-w-7xl p-6 sm:p-12 grid sm:grid-cols-3 gap-8 overflow-auto">
        {/* Product Image */}
        <div className="flex items-center justify-center overflow-hidden rounded-lg bg-gray-100 col-span-1">
          <img
            src={productDetails?.image}
            alt={productDetails?.title}
            className="object-contain w-full h-full"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between col-span-2 gap-6">
          <div>
            <h1 className="text-4xl font-extrabold mb-2">{productDetails?.title}</h1>
            <p className="text-gray-500 text-lg mb-4">{productDetails?.description}</p>

            {/* Info Tiles */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
                <p className="text-sm text-gray-400">Price</p>
                <p className="font-bold text-lg text-primary">${productDetails?.price}</p>
              </div>
              {productDetails?.salePrice && (
                <div className="bg-yellow-50 p-3 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-400">Sale Price</p>
                  <p className="font-bold text-lg text-orange-500">${productDetails.salePrice}</p>
                </div>
              )}
              <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
                <p className="text-sm text-gray-400">Stock</p>
                <p className="font-bold text-lg">{productDetails?.totalStock}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
                <p className="text-sm text-gray-400">Category</p>
                <p className="font-bold text-lg">{productDetails?.category || "N/A"}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
                <p className="text-sm text-gray-400">SKU</p>
                <p className="font-bold text-lg">{productDetails?.sku || "N/A"}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
                <p className="text-sm text-gray-400">Brand</p>
                <p className="font-bold text-lg">{productDetails?.brand || "N/A"}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-5">
              <StarRatingComponent rating={averageReview} />
              <span className="text-gray-400">({averageReview.toFixed(2)})</span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-6">
              {productDetails?.totalStock === 0 ? (
                <Button disabled className="flex-1 opacity-60 cursor-not-allowed">
                  Out of Stock
                </Button>
              ) : (
                <>
                  <Button
                    className="flex-1"
                    onClick={() => handleAddToCart(productDetails?._id, productDetails?.totalStock)}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                    onClick={handleBuyNow}
                  >
                    Buy Now
                  </Button>
                </>
              )}
            </div>

            <Separator className="my-4" />

            {/* Reviews */}
            <div className="flex flex-col gap-4 max-h-[300px] overflow-y-auto">
              <h2 className="text-xl font-bold mb-2">Reviews</h2>
              {reviews?.length > 0 ? (
                reviews.map((r) => (
                  <div key={r._id} className="flex gap-3 items-start">
                    <Avatar className="w-10 h-10 border">
                      <AvatarFallback>{r.userName[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold">{r.userName}</h3>
                        <StarRatingComponent rating={r.reviewValue} />
                      </div>
                      <p className="text-gray-400">{r.reviewMessage}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">No Reviews</p>
              )}
            </div>

            {/* Add Review */}
            {user && (
              <div className="mt-6 flex flex-col gap-2">
                <Label>Write a Review</Label>
                <StarRatingComponent rating={rating} handleRatingChange={handleRatingChange} />
                <Input
                  value={reviewMsg}
                  onChange={(e) => setReviewMsg(e.target.value)}
                  placeholder="Write your review..."
                />
                <Button disabled={!reviewMsg.trim()} onClick={handleAddReview}>
                  Submit
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
