import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ChevronDown, ChevronUp, BookOpen } from "lucide-react";
import { usePolicy } from "../hooks/schoolPolicy/usePolicy";
import Loader from "../ui/Loader";
import Hero from "../ui/Hero";
function SchoolPolicy() {
  const { i18n } = useTranslation();
  const [openPolicy, setOpenPolicy] = useState(null);
  const { data: policies, isLoading } = usePolicy();

  if (isLoading) return <Loader />;
  // const policies = [
  //   {
  //     id: 1,
  //     title: {
  //       en: "Academic Policy",
  //       ar: "سياسة التعليم",
  //     },
  //     subtitle: {
  //       en: "Empowering Critical Thinking Through Modern Methods",
  //       ar: "تعزيز التفكير النقدي من خلال الأساليب الحديثة",
  //     },
  //     description: {
  //       en: "We follow a blended educational approach that merges the STEAM curriculum with Montessori-inspired methods. Our students develop academic strength through hands-on projects, inquiry-based learning, and real-world applications guided by our diverse team of educators. Progress is tracked through ongoing assessments, class engagement, and final evaluations to support every learner's growth.",
  //       ar: "نتبع نهجًا تعليميًا مدمجًا يجمع بين منهج STEAM وأسلوب مونتيسوري التفاعلي. يطور طلابنا قدراتهم الأكاديمية من خلال المشاريع العملية والتعلم القائم على الاستفسار والتطبيقات الواقعية، تحت إشراف فريقنا المتنوع من المعلمين. يتم تتبع التقدم من خلال التقييمات المستمرة والمشاركة الصفية والتقييمات النهائية.",
  //     },
  //   },
  //   {
  //     id: 2,
  //     title: {
  //       en: "Academic Policy",
  //       ar: "سياسة التعليم",
  //     },
  //     subtitle: {
  //       en: "Empowering Critical Thinking Through Modern Methods",
  //       ar: "تعزيز التفكير النقدي من خلال الأساليب الحديثة",
  //     },
  //     description: {
  //       en: "We follow a blended educational approach that merges the STEAM curriculum with Montessori-inspired methods. Our students develop academic strength through hands-on projects, inquiry-based learning, and real-world applications guided by our diverse team of educators. Progress is tracked through ongoing assessments, class engagement, and final evaluations to support every learner's growth.",
  //       ar: "نتبع نهجًا تعليميًا مدمجًا يجمع بين منهج STEAM وأسلوب مونتيسوري التفاعلي. يطور طلابنا قدراتهم الأكاديمية من خلال المشاريع العملية والتعلم القائم على الاستفسار والتطبيقات الواقعية، تحت إشراف فريقنا المتنوع من المعلمين. يتم تتبع التقدم من خلال التقييمات المستمرة والمشاركة الصفية والتقييمات النهائية.",
  //     },
  //   },
  //   // ... other policies
  // ];

  const togglePolicy = (id) => {
    setOpenPolicy(openPolicy === id ? null : id);
  };

  return (
    <div className="mt-16 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <Hero
        url="https://sudden.org/wp-content/uploads/2021/04/SUDDEN-template-73.png"
        title="School Policies – Seerah Private School"
        paragraph="Welcome to Seerah Private School’s Policies page. As part of our commitment to transparency, safety, and educational excellence, we have outlined key policies that guide our academic environment, ensure student well-being, and promote a respectful, inclusive school culture"
      />

      {/* Policies Section */}
      <div className="container px-4 py-16 mx-auto -mt-12 sm:px-6 lg:px-8">
        <div className="mx-auto space-y-6 max-w-4xl">
          {policies.map((policy) => (
            <div
              key={policy.id}
              className="overflow-hidden bg-white rounded-xl shadow-lg transition-all duration-300 transform hover:shadow-xl"
            >
              <button
                onClick={() => togglePolicy(policy.id)}
                className="flex justify-between items-center px-8 py-6 w-full transition-colors duration-200 hover:bg-gray-50"
              >
                <div className="flex-1 text-left">
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">
                    {policy.title[i18n.language]}
                  </h3>
                  <p className="text-gray-600 text-md">
                    {policy.subtitle[i18n.language]}
                  </p>
                </div>
                <div className="ml-6">
                  {openPolicy === policy.id ? (
                    <ChevronUp className="w-6 h-6 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-blue-600" />
                  )}
                </div>
              </button>

              {openPolicy === policy.id && (
                <div className="px-8 py-6 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
                  <p className="text-lg leading-relaxed text-gray-700">
                    {policy.description[i18n.language]}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SchoolPolicy;
