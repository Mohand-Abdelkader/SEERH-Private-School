import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateNews } from "../../hooks/news/useCreateNews";
import { uploadFileToCloudinary } from "../../utils/helper";
import { ImagePlus } from "lucide-react";

function CreateNews() {
  const [image, setImage] = useState(null);
  const { createNews, isPending } = useCreateNews();
  const [isUploading, setIsUploading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: { en: "", ar: "" },
      description: { en: "", ar: "" },
      date: new Date().toISOString().split("T")[0],
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  const onSubmit = async (data) => {
    try {
      let imageUrl = "";
      if (image) {
        setIsUploading(true);
        imageUrl = await uploadFileToCloudinary(image);
        setIsUploading(false);
      }

      const newsData = {
        ...data,
        image: imageUrl,
      };

      await createNews(newsData, {
        onSuccess: () => {
          reset();
          setImage(null);
        },
      });
    } catch (error) {
      console.error("Error creating news:", error);
    }
  };

  const isLoading = isPending || isUploading;

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-4xl mx-auto overflow-hidden bg-white border border-gray-100 shadow-sm rounded-xl"
      >
        <div className="px-8 py-6 bg-white border-b border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800">Add New News</h2>
          <p className="mt-1 text-sm text-gray-500">
            Create a new news article with bilingual support.
          </p>
        </div>

        <div className="p-8 space-y-8">
          {/* Title Fields */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Title (English)
              </label>
              <input
                type="text"
                {...register("title.en", {
                  required: "English title is required",
                })}
                className="w-full px-4 py-3 transition-all border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter title in English"
              />
              {errors?.title?.en && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.title.en.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                العنوان (العربية)
              </label>
              <input
                type="text"
                {...register("title.ar", {
                  required: "Arabic title is required",
                })}
                className="w-full px-4 py-3 transition-all border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="أدخل العنوان بالعربية"
              />
              {errors?.title?.ar && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.title.ar.message}
                </p>
              )}
            </div>
          </div>

          {/* Description Fields */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Description (English)
              </label>
              <textarea
                {...register("description.en", {
                  required: "English description is required",
                })}
                className="w-full px-4 py-3 transition-all border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows="6"
                placeholder="Enter description in English"
              />
              {errors?.description?.en && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.description.en.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                الوصف (العربية)
              </label>
              <textarea
                {...register("description.ar", {
                  required: "Arabic description is required",
                })}
                className="w-full px-4 py-3 transition-all border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows="6"
                placeholder="أدخل الوصف بالعربية"
              />
              {errors?.description?.ar && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.description.ar.message}
                </p>
              )}
            </div>
          </div>

          {/* Date and Image Upload */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                {...register("date", { required: "Date is required" })}
                className="w-full px-4 py-3 transition-all border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {errors?.date && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.date.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Image
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex items-center justify-center w-full px-4 py-3 space-x-2 transition-colors border border-gray-300 border-dashed rounded-lg bg-gray-50 hover:bg-gray-100">
                  <ImagePlus className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500">
                    {image ? image.name : "Choose an image"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-8 py-6 border-t border-gray-100 bg-gray-50">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-6 py-3 text-sm font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="flex items-center justify-center space-x-2">
                <span className="w-4 h-4 border-2 border-white rounded-full border-t-transparent animate-spin"></span>
                <span>Creating...</span>
              </span>
            ) : (
              "Create News"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateNews;
