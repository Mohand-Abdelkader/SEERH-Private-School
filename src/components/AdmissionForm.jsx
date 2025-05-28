import { useForm } from "react-hook-form";
import { Button } from "../ui/Button";
import { useCreateAdmission } from "../hooks/admissionRequest/useCreateAdmission";
import { useTranslation } from "react-i18next";

function AdmissionForm() {
  const { createAdmission, isPending } = useCreateAdmission();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await createAdmission(data, {
        onSuccess: () => {
          console.log("Admission submitted successfully");
          reset(); // Reset form after successful submission
        },
      });
    } catch (error) {
      console.error("Failed to submit admission:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Student Information */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-[#0d4c83] mb-6">
          {t("admission.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("admission.student.first_name")}
            </label>
            <input
              {...register("studentFirstName", {
                required: "First name is required",
                minLength: {
                  value: 2,
                  message: "First name must be at least 2 characters",
                },
              })}
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0d4c83] focus:border-transparent"
            />
            {errors?.studentFirstName?.message && (
              <span className="mt-1 text-sm text-red-600 dark:text-red-400">
                ❌ {errors.studentFirstName.message}
              </span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("admission.student.last_name")}
            </label>
            <input
              {...register("studentLastName", {
                required: "Last name is required",
                minLength: {
                  value: 2,
                  message: "Last name must be at least 2 characters",
                },
              })}
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0d4c83] focus:border-transparent"
            />
            {errors?.studentLastName?.message && (
              <span className="mt-1 text-sm text-red-600 dark:text-red-400">
                ❌ {errors.studentLastName.message}
              </span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("admission.student.dob")}
            </label>
            <input
              {...register("dateOfBirth", {
                required: "Date of birth is required",
              })}
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0d4c83] focus:border-transparent"
            />
            {errors?.dateOfBirth?.message && (
              <span className="mt-1 text-sm text-red-600 dark:text-red-400">
                ❌ {errors.dateOfBirth.message}
              </span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("admission.student.grade")}
            </label>
            <select
              {...register("gradeApplying", {
                required: "Please select a grade",
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0d4c83] focus:border-transparent"
            >
              <option value="">Select Grade</option>
              {[...Array(12)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  Grade {i + 1}
                </option>
              ))}
            </select>
            {errors?.gradeApplying?.message && (
              <span className="mt-1 text-sm text-red-600 dark:text-red-400">
                ❌ {errors.gradeApplying.message}
              </span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("admission.student.nationality")}
            </label>
            <input
              {...register("nationality", {
                required: "Nationality is required",
              })}
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0d4c83] focus:border-transparent"
            />
            {errors?.nationality?.message && (
              <span className="mt-1 text-sm text-red-600 dark:text-red-400">
                ❌ {errors.nationality.message}
              </span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("admission.student.siblings")}
            </label>
            <input
              {...register("numberOfSiblings", {
                required: "Number of siblings is required",
                min: { value: 0, message: "Cannot be negative" },
                valueAsNumber: true,
              })}
              type="number"
              min="0"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0d4c83] focus:border-transparent"
            />
            {errors?.numberOfSiblings?.message && (
              <span className="mt-1 text-sm text-red-600 dark:text-red-400">
                ❌ {errors.numberOfSiblings.message}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Parent/Guardian Information */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-[#0d4c83] mb-6">
          {t("admission.parent.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("admission.parent.first_name")}
            </label>
            <input
              {...register("parentFirstName", {
                required: "Parent's first name is required",
              })}
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0d4c83] focus:border-transparent"
            />
            {errors?.parentFirstName?.message && (
              <span className="mt-1 text-sm text-red-600 dark:text-red-400">
                ❌ {errors.parentFirstName.message}
              </span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("admission.parent.last_name")}
            </label>
            <input
              {...register("parentLastName", {
                required: "Parent's last name is required",
              })}
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0d4c83] focus:border-transparent"
            />
            {errors?.parentLastName?.message && (
              <span className="mt-1 text-sm text-red-600 dark:text-red-400">
                ❌ {errors.parentLastName.message}
              </span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("admission.parent.email")}
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0d4c83] focus:border-transparent"
            />
            {errors?.email?.message && (
              <span className="mt-1 text-sm text-red-600 dark:text-red-400">
                ❌ {errors.email.message}
              </span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("admission.parent.phone")}
            </label>
            <input
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9+]/,
                  message: "Please enter a valid 10-digit phone number",
                },
              })}
              type="tel"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0d4c83] focus:border-transparent"
            />
            {errors?.phone?.message && (
              <span className="mt-1 text-sm text-red-600 dark:text-red-400">
                ❌ {errors.phone.message}
              </span>
            )}
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("admission.parent.address")}
            </label>
            <input
              {...register("address", {
                required: "Address is required",
              })}
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0d4c83] focus:border-transparent"
            />
            {errors?.address?.message && (
              <span className="mt-1 text-sm text-red-600 dark:text-red-400">
                ❌ {errors.address.message}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-[#0d4c83] mb-6">
          {t("admission.additional.title")}
        </h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("admission.additional.previous_school")}
            </label>
            <input
              {...register("previousSchool", {
                required:
                  "Previous school is required. Type 'None' if no previous school",
              })}
              type="text"
              placeholder={t(
                "admission.additional.previous_school_placeholder"
              )}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0d4c83] focus:border-transparent"
            />
            {errors?.previousSchool?.message && (
              <span className="mt-1 text-sm text-red-600 dark:text-red-400">
                ❌ {errors.previousSchool.message}
              </span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("admission.additional.special_requirements")}
            </label>
            <textarea
              {...register("specialRequirements")}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0d4c83] focus:border-transparent"
            ></textarea>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <Button
          type="submit"
          disabled={isPending}
          className="bg-[#0d4c83] hover:bg-[#0d4c83]/90 text-white px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? t("admission.submitting") : t("admission.submit")}
        </Button>
      </div>
    </form>
  );
}

export default AdmissionForm;
