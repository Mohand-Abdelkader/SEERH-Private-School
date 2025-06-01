import { Link } from "react-router-dom";
import { Trash2, Eye } from "lucide-react";
import { useSlides } from "../../hooks/slides/useSlides";
import { useDeleteSlide } from "../../hooks/slides/useDeleteSlide";
import Loader from "../../ui/Loader";

function SildsAdmin() {
  const { data: slides, isLoading } = useSlides();
  const { mutate: deleteSlide, isLoading: isDeleting } = useDeleteSlide();

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this slide?")) {
      try {
        await deleteSlide(id);
      } catch (error) {
        console.error("Failed to delete slide:", error);
      }
    }
  };

  if (isLoading || isDeleting) return <Loader />;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Slides Management</h1>
        <div className="flex gap-4 items-center">
          <div className="text-sm text-gray-500">
            Total Slides: {slides?.length || 0}
          </div>
          <Link
            to="/admin/slides/create"
            className="px-4 py-2 text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700"
          >
            Add Slide
          </Link>
        </div>
      </div>

      <div className="overflow-hidden bg-white rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Image
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Title
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Subtitle
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {slides?.length > 0 ? (
                slides.map((slide) => (
                  <tr key={slide.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <img
                        src={slide.url}
                        alt={slide.alt}
                        className="object-cover w-24 h-16 rounded-lg"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {slide.title.en}
                      </div>
                      <div className="text-sm text-gray-500">
                        {slide.title.ar}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {slide.subtitle.en}
                      </div>
                      <div className="text-sm text-gray-500">
                        {slide.subtitle.ar}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                      <div className="flex gap-2 items-center">
                        <button
                          onClick={() => handleDelete(slide.id)}
                          className="p-2 text-red-600 rounded-full transition-colors hover:bg-red-50"
                          title="Delete Slide"
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
                    className="px-6 py-4 text-sm text-center text-gray-500 whitespace-nowrap"
                    colSpan="4"
                  >
                    No slides found
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

export default SildsAdmin;
