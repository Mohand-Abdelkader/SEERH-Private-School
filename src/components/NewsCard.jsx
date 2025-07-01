import { Link } from "react-router-dom";

function NewsCard({ news, index, currentLocale }) {
  return (
    <div
      key={index}
      className="overflow-hidden w-full bg-white rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl"
    >
      <img
        src={news.image}
        alt={news.title[currentLocale]}
        className="object-cover w-full h-48"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-[#0d4c83] mb-2">
          {news.title[currentLocale]}
        </h2>
        <p className="mb-4 text-sm text-gray-600">{news.date}</p>
        <p className="text-gray-700 line-clamp-4">
          {news.description[currentLocale]}
        </p>
        <Link
          to={`/news/${news.title.en}`}
          state={{ news }}
          className="mt-4 text-[#ef7822] hover:text-[#0d4c83] font-medium transition-colors duration-300"
        >
          {currentLocale === "ar" ? "اقرأ المزيد" : "Read More"}
        </Link>
      </div>
    </div>
  );
}

export default NewsCard;
