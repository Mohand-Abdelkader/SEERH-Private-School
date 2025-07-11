import { useTranslation } from "react-i18next";
import { Calendar, ArrowLeft } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

function NewsItem() {
  const location = useLocation();
  const { news } = location.state;
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <div className="min-h-screen bg-gray-50 mt-16">
      <main className="py-8 px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          {/* News Image */}
          {news?.image && (
            <div className="relative h-[500px] w-full overflow-hidden">
              <img
                src={news.image}
                alt={isArabic ? news.title.ar : news.title.en}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-8 lg:p-12">
            {/* Date */}
            <div className="inline-flex items-center gap-2 text-gray-500 mb-6 px-4 py-2 bg-gray-50 rounded-full">
              <Calendar size={18} />
              <time dateTime={news.date}>
                {new Date(news.date).toLocaleDateString(
                  isArabic ? "ar-SA" : "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </time>
            </div>

            {/* Title */}
            <div className="space-y-3 mb-8">
              <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                {isArabic ? news.title.ar : news.title.en}
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-6 prose max-w-none">
              <div className="text-xl text-gray-800 leading-relaxed">
                {isArabic ? news.description.ar : news.description.en}
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}

export default NewsItem;
