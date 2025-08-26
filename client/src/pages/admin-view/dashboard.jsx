import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiUpload } from "react-icons/fi";

import ProductImageUpload from "@/components/admin-view/image-upload";
import { Button } from "@/components/ui/button";
import { addFeatureImage, getFeatureImages } from "@/store/common-slice";

function AdminDashboard() {
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const dispatch = useDispatch();

  const { featureImageList } = useSelector((state) => state.commonFeature);

  // Fetch existing feature images
  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  const handleUploadFeatureImage = () => {
    if (!uploadedImageUrl) return;
    setImageLoadingState(true);

    dispatch(addFeatureImage(uploadedImageUrl)).then((data) => {
      setImageLoadingState(false);
      if (data?.payload?.success) {
        dispatch(getFeatureImages());
        setImageFile(null);
        setUploadedImageUrl("");
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      {/* Page Header */}
      <div className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-2">
          Admin <span className="text-primary">Dashboard</span>
        </h1>
        <p className="text-gray-500 text-lg">Manage your feature images easily</p>
      </div>

      {/* Upload Section */}
      <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl shadow-lg p-6 mb-10 border border-indigo-200">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FiUpload className="text-primary text-3xl" /> Upload New Feature Image
        </h2>

        <ProductImageUpload
          imageFile={imageFile}
          setImageFile={setImageFile}
          uploadedImageUrl={uploadedImageUrl}
          setUploadedImageUrl={setUploadedImageUrl}
          setImageLoadingState={setImageLoadingState}
          imageLoadingState={imageLoadingState}
          isCustomStyling={true}
        />

        <Button
          onClick={handleUploadFeatureImage}
          className="mt-5 w-full bg-primary hover:bg-primary-dark text-white font-semibold"
          disabled={imageLoadingState || !uploadedImageUrl}
        >
          {imageLoadingState ? "Uploading..." : "Upload Image"}
        </Button>
      </div>

      {/* Feature Images Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-primary text-3xl">★</span> Current Feature Images
        </h2>

        {featureImageList && featureImageList.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {featureImageList.map((featureImgItem, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
              >
                <img
                  src={featureImgItem.image}
                  alt={`Feature ${index + 1}`}
                  className="w-full h-[220px] sm:h-[250px] md:h-[280px] object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                  <p className="text-white font-semibold text-sm truncate">
                    Feature Image #{index + 1}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-10 border-2 border-dashed rounded-xl border-gray-300">
            No feature images uploaded yet.
          </p>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
