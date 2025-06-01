import { Link } from "react-router-dom";
import { Trash2, PencilLine } from "lucide-react";
import { usePolicy } from "../../hooks/schoolPolicy/usePolicy";
import { useDeletePolicy } from "../../hooks/schoolPolicy/useDeletePolicy";
import Loader from "../../ui/Loader";

function PolicyAdmin() {
  const { data: policies, isLoading } = usePolicy();
  const { mutate: deletePolicy, isPending: isDeleting } = useDeletePolicy();

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this policy?")) {
      try {
        await deletePolicy(id);
      } catch (error) {
        console.error("Failed to delete policy:", error);
      }
    }
  };

  if (isLoading || isDeleting) return <Loader />;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Policies Management
        </h1>
        <div className="flex gap-4 items-center">
          <div className="text-sm text-gray-500">
            Total Policies: {policies?.length || 0}
          </div>
          <Link
            to="/admin/policy/create"
            className="px-4 py-2 text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700"
          >
            Add Policy
          </Link>
        </div>
      </div>

      <div className="overflow-hidden bg-white rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Title
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Subtitle
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Description
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {policies?.length > 0 ? (
                policies.map((policy) => (
                  <tr key={policy.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {`${policy.title.en.slice(0, 100)}....`}
                      </div>
                      <div className="text-sm text-gray-500">
                        {`${policy.title.ar.slice(0, 100)}....`}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {`${policy.subtitle.en.slice(0, 100)}....`}
                      </div>
                      <div className="text-sm text-gray-500">
                        {`${policy.subtitle.ar.slice(0, 100)}....`}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 line-clamp-2">
                        {`${policy.description.en.slice(0, 100)}....`}
                      </div>
                      <div className="text-sm text-gray-500 line-clamp-2">
                        {`${policy.description.ar.slice(0, 100)}....`}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                      <div className="flex gap-2 items-center">
                        <Link
                          to={`/admin/policy/edit/${policy.title.en}`}
                          state={{ policy }}
                          className="p-2 text-blue-600 rounded-full transition-colors hover:bg-blue-50"
                          title="Edit Policy"
                        >
                          <PencilLine size={20} />
                        </Link>
                        <button
                          onClick={() => handleDelete(policy.id)}
                          className="p-2 text-red-600 rounded-full transition-colors hover:bg-red-50"
                          title="Delete Policy"
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
                    No policies found
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

export default PolicyAdmin;
