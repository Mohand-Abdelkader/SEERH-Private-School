import { useForm } from "react-hook-form";
import { Button } from "../ui/Button";
import { useTranslation } from "react-i18next";

function ContactForm() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t("contact_form.name")}
        </label>
        <input
          {...register("name", { required: "Name is required" })}
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0d4c83] focus:border-transparent"
        />
        {errors?.name?.message && (
          <span className="mt-1 text-sm text-red-600 dark:text-red-400">
            ❌ {errors.name.message}
          </span>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t("contact_form.email")}
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
          {t("contact_form.phone")}
        </label>
        <input
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9+]/,
              message: "Please enter a valid phone number",
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

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t("contact_form.subject")}
        </label>
        <input
          {...register("subject", { required: "Subject is required" })}
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0d4c83] focus:border-transparent"
        />
        {errors?.subject?.message && (
          <span className="mt-1 text-sm text-red-600 dark:text-red-400">
            ❌ {errors.subject.message}
          </span>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t("contact_form.message")}
        </label>
        <textarea
          {...register("message", {
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters",
            },
          })}
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0d4c83] focus:border-transparent"
        ></textarea>
        {errors?.message?.message && (
          <span className="mt-1 text-sm text-red-600 dark:text-red-400">
            ❌ {errors.message.message}
          </span>
        )}
      </div>

      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            {...register("privacy", {
              required: "You must agree to the privacy policy",
            })}
            type="checkbox"
            className="h-4 w-4 text-[#0d4c83] focus:ring-[#0d4c83] border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 mr-3 text-sm">
          <label className="text-gray-700">{t("contact_form.privacy")}</label>
          {errors?.privacy?.message && (
            <span className="mt-1 text-sm text-red-600 dark:text-red-400 block">
              ❌ {errors.privacy.message}
            </span>
          )}
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-[#0d4c83] hover:bg-[#0d4c83]/90 text-white"
      >
        {t("contact_form.send")}
      </Button>
    </form>
  );
}

export default ContactForm;
