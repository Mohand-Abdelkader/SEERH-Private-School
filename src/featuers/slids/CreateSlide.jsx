import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateSlide } from "../../hooks/slides/useCreateSlide";
import { uploadFileToCloudinary } from "../../utils/helper";
import { ImagePlus } from "lucide-react";

function CreateSlide() {
  const [image, setImage] = useState(null);
  const { mutate: createSlide, isLoading: isPending } = useCreateSlide();
  const [isUploading, setIsUploading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: { en: "", ar: "" },
      subtitle: { en: "", ar: "" },
      alt: "",
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  const onSubmit = async (data) => {
    try {
      let url = "";
      if (image) {
        setIsUploading(true);
        url = await uploadFileToCloudinary(image);
        setIsUploading(false);
      }

      const slideData = {
        ...data,
        url,
      };

      await createSlide(slideData, {
        onSuccess: () => {
          reset();
          setImage(null);
        },
      });
    } catch (error) {
      console.error("Error creating slide:", error);
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
          <h2 className="text-2xl font-semibold text-gray-800">
            Add New Slide
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Create a new slide with bilingual support.
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

          {/* Subtitle Fields */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Subtitle (English)
              </label>
              <input
                type="text"
                {...register("subtitle.en", {
                  required: "English subtitle is required",
                })}
                className="w-full px-4 py-3 transition-all border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter subtitle in English"
              />
              {errors?.subtitle?.en && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.subtitle.en.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                العنوان الفرعي (العربية)
              </label>
              <input
                type="text"
                {...register("subtitle.ar", {
                  required: "Arabic subtitle is required",
                })}
                className="w-full px-4 py-3 transition-all border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="أدخل العنوان الفرعي بالعربية"
              />
              {errors?.subtitle?.ar && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.subtitle.ar.message}
                </p>
              )}
            </div>
          </div>

          {/* Alt Text and Image Upload */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Alt Text
              </label>
              <input
                type="text"
                {...register("alt", { required: "Alt text is required" })}
                className="w-full px-4 py-3 transition-all border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter image alt text"
              />
              {errors?.alt && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.alt.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Slide Image
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
                <span className="w-4 h-4 border-2 border-white rounded-full animate-spin border-t-transparent"></span>
                <span>Creating...</span>
              </span>
            ) : (
              "Create Slide"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateSlide;
