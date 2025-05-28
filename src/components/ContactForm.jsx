import { useForm } from "react-hook-form";
import { useCreateContactMessage } from "../hooks/contactMessage/useCreateMessage";

function ContactForm() {
  const { createContactMessage, isPending } = useCreateContactMessage();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await createContactMessage(data, {
        onSuccess: () => {
          console.log("Message sent successfully");
          reset(); // Reset form after successful submission
        },
      });
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[#040706] mb-1"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            {...register("name", {
              required: "Full name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
            placeholder="John Doe"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0d4c83] focus:border-transparent transition-colors"
          />
          {errors?.name?.message && (
            <span className="mt-1 text-sm text-red-600 dark:text-red-400">
              ❌ {errors.name.message}
            </span>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#040706] mb-1"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            placeholder="john@example.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0d4c83] focus:border-transparent transition-colors"
          />
          {errors?.email?.message && (
            <span className="mt-1 text-sm text-red-600 dark:text-red-400">
              ❌ {errors.email.message}
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-[#040706] mb-1"
          >
            Phone Number
          </label>
          <input
            id="phone"
            {...register("phone", {
              pattern: {
                value: /^[\d\s-+()]*$/,
                message: "Invalid phone number format",
              },
            })}
            placeholder="(123) 456-7890"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0d4c83] focus:border-transparent transition-colors"
          />
          {errors?.phone?.message && (
            <span className="mt-1 text-sm text-red-600 dark:text-red-400">
              ❌ {errors.phone.message}
            </span>
          )}
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-[#040706] mb-1"
          >
            Subject <span className="text-red-500">*</span>
          </label>
          <select
            id="subject"
            {...register("subject", {
              required: "Please select a subject",
            })}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0d4c83] focus:border-transparent transition-colors"
          >
            <option value="">Select a subject</option>
            <option value="admission">Admission Inquiry</option>
            <option value="program">Program Information</option>
            <option value="visit">Schedule a Visit</option>
            <option value="other">Other</option>
          </select>
          {errors?.subject?.message && (
            <span className="mt-1 text-sm text-red-600 dark:text-red-400">
              ❌ {errors.subject.message}
            </span>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[#040706] mb-1"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          {...register("message", {
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters",
            },
          })}
          placeholder="How can we help you?"
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0d4c83] focus:border-transparent transition-colors"
        />
        {errors?.message?.message && (
          <span className="mt-1 text-sm text-red-600 dark:text-red-400">
            ❌ {errors.message.message}
          </span>
        )}
      </div>

      <div className="flex items-center">
        <input
          id="privacy"
          {...register("privacy", {
            required: "You must accept the privacy policy",
          })}
          type="checkbox"
          className="h-4 w-4 text-[#0d4c83] focus:ring-[#0d4c83] border-gray-300 rounded"
        />
        <label htmlFor="privacy" className="ml-2 block text-sm text-[#606060]">
          I agree to the{" "}
          <a href="#" className="text-[#0d4c83] hover:underline">
            privacy policy
          </a>{" "}
          and consent to being contacted regarding my inquiry.
        </label>
        {errors?.privacy?.message && (
          <span className="mt-1 text-sm text-red-600 dark:text-red-400">
            ❌ {errors.privacy.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-[#ef7822] hover:bg-[#ef7822]/90 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? "Sending..." : "Send Message"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </button>
    </form>
  );
}

export default ContactForm;
