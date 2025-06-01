import { useForm } from "react-hook-form";
import { useCreateSchoolPolicy } from "../../hooks/schoolPolicy/useCreatePolicy";
import { useUpdatePolicy } from "../../hooks/schoolPolicy/useUpdatePolicy";
import { Link, useLocation, useNavigate } from "react-router-dom";

function PolicyForm() {
  const location = useLocation();
  const navigate = useNavigate();

  const isEditingSession = !!location.state?.policy;
  const editingPolicy = location.state?.policy;

  const { mutate: createPolicy, isPending: isCreating } =
    useCreateSchoolPolicy();
  const { mutate: updatePolicy, isPending: isUpdating } = useUpdatePolicy();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: isEditingSession
      ? {
          titleEn: editingPolicy.title.en,
          titleAr: editingPolicy.title.ar,
          subtitleEn: editingPolicy.subtitle.en,
          subtitleAr: editingPolicy.subtitle.ar,
          descriptionEn: editingPolicy.description.en,
          descriptionAr: editingPolicy.description.ar,
        }
      : {},
  });

  const onSubmit = (data) => {
    const policyData = {
      title: {
        en: data.titleEn,
        ar: data.titleAr,
      },
      subtitle: {
        en: data.subtitleEn,
        ar: data.subtitleAr,
      },
      description: {
        en: data.descriptionEn,
        ar: data.descriptionAr,
      },
    };

    if (isEditingSession) {
      updatePolicy(
        { policyId: editingPolicy.id, policyData },
        {
          onSuccess: () => {
            navigate("/admin/policy");
          },
        }
      );
    } else {
      createPolicy(policyData, {
        onSuccess: () => {
          reset();
          navigate("/admin/policy");
        },
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">
          {isEditingSession ? "Edit Policy" : "Create New Policy"}
        </h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* English Title */}
          <div className="space-y-2">
            <label
              htmlFor="titleEn"
              className="block text-sm font-medium text-gray-700"
            >
              Title (English)
            </label>
            <input
              type="text"
              id="titleEn"
              className="block px-3 py-2 w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              {...register("titleEn", {
                required: "English title is required",
              })}
            />
            {errors.titleEn && (
              <p className="text-sm text-red-600">{errors.titleEn.message}</p>
            )}
          </div>

          {/* Arabic Title */}
          <div className="space-y-2">
            <label
              htmlFor="titleAr"
              className="block text-sm font-medium text-gray-700"
            >
              Title (Arabic)
            </label>
            <input
              type="text"
              id="titleAr"
              dir="rtl"
              className="block px-3 py-2 w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              {...register("titleAr", { required: "Arabic title is required" })}
            />
            {errors.titleAr && (
              <p className="text-sm text-red-600">{errors.titleAr.message}</p>
            )}
          </div>

          {/* English Subtitle */}
          <div className="space-y-2">
            <label
              htmlFor="subtitleEn"
              className="block text-sm font-medium text-gray-700"
            >
              Subtitle (English)
            </label>
            <input
              type="text"
              id="subtitleEn"
              className="block px-3 py-2 w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              {...register("subtitleEn", {
                required: "English subtitle is required",
              })}
            />
            {errors.subtitleEn && (
              <p className="text-sm text-red-600">
                {errors.subtitleEn.message}
              </p>
            )}
          </div>

          {/* Arabic Subtitle */}
          <div className="space-y-2">
            <label
              htmlFor="subtitleAr"
              className="block text-sm font-medium text-gray-700"
            >
              Subtitle (Arabic)
            </label>
            <input
              type="text"
              id="subtitleAr"
              dir="rtl"
              className="block px-3 py-2 w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              {...register("subtitleAr", {
                required: "Arabic subtitle is required",
              })}
            />
            {errors.subtitleAr && (
              <p className="text-sm text-red-600">
                {errors.subtitleAr.message}
              </p>
            )}
          </div>

          {/* English Description */}
          <div className="space-y-2">
            <label
              htmlFor="descriptionEn"
              className="block text-sm font-medium text-gray-700"
            >
              Description (English)
            </label>
            <textarea
              id="descriptionEn"
              rows={4}
              className="block px-3 py-2 w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              {...register("descriptionEn", {
                required: "English description is required",
              })}
            />
            {errors.descriptionEn && (
              <p className="text-sm text-red-600">
                {errors.descriptionEn.message}
              </p>
            )}
          </div>

          {/* Arabic Description */}
          <div className="space-y-2">
            <label
              htmlFor="descriptionAr"
              className="block text-sm font-medium text-gray-700"
            >
              Description (Arabic)
            </label>
            <textarea
              id="descriptionAr"
              rows={4}
              dir="rtl"
              className="block px-3 py-2 w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              {...register("descriptionAr", {
                required: "Arabic description is required",
              })}
            />
            {errors.descriptionAr && (
              <p className="text-sm text-red-600">
                {errors.descriptionAr.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex gap-4 justify-end">
          <Link
            type="button"
            to="/admin/policy"
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={isCreating || isUpdating}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isCreating || isUpdating
              ? "Saving..."
              : isEditingSession
              ? "Update Policy"
              : "Create Policy"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default PolicyForm;
