import { Link } from "react-router-dom";
import { Trash2, Eye } from "lucide-react";
import { useNews } from "../../hooks/news/useNews";
import { useDeleteNews } from "../../hooks/news/useDeleteNews";
import Loader from "../../ui/Loader";

function NewsAdmin() {
  const { news, isLoading } = useNews();
  const { deleteNews, isLoading: isDeleting } = useDeleteNews();

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this news item?")) {
      try {
        await deleteNews(id);
      } catch (error) {
        console.error("Failed to delete news:", error);
      }
    }
  };

  if (isLoading || isDeleting) return <Loader />;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">News Management</h1>
        <div className="flex gap-4 items-center">
          <div className="text-sm text-gray-500">
            Total News Items: {news?.length || 0}
          </div>
          <Link
            to="/admin/news/create"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add News
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {news?.length > 0 ? (
                news.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {item.title.en}
                      </div>
                      <div className="text-sm text-gray-500">
                        {item.title.ar}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {item.description.en.length > 100
                          ? `${item.description.en.substring(0, 100)}...`
                          : item.description.en}
                      </div>
                      <div className="text-sm text-gray-500">
                        {item.description.ar.length > 100
                          ? `${item.description.ar.substring(0, 100)}...`
                          : item.description.ar}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(item.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Link
                          to={`/admin/news/${item.title.en}`}
                          state={{ news: item }}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                          title="View Details"
                        >
                          <Eye size={20} />
                        </Link>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                          title="Delete News"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"
                    colSpan="4"
                  >
                    No news items found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default NewsAdmin;
