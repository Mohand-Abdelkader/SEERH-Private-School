import { useTranslation } from "react-i18next";
import NewsCard from "../components/NewsCard";
import { useNews } from "../hooks/news/useNews";
import Loader from "../ui/Loader";
function NewsPage() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const { news, isLoading } = useNews();
  if (isLoading) return <Loader />;
  return (
    <div className="container px-4 py-8 mx-auto mt-16">
      <h1 className="text-4xl font-bold text-[#0d4c83] mb-8 text-center">
        {currentLocale === "ar" ? "أخبار المدرسة" : "School News"}
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {news.map((news, index) => (
          <NewsCard
            index={index}
            news={news}
            currentLocale={currentLocale}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default NewsPage;
