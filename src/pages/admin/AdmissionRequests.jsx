import { Link } from "react-router-dom";
import { Trash2, Eye } from "lucide-react";
import { useAdmissionRequests } from "../../hooks/admissionRequest/useAdmission";
import { useDeleteAdmission } from "../../hooks/admissionRequest/useDeleteAdmission";
import Loader from "../../ui/Loader";

function AdmissionRequests() {
  const { admissionRequests, isLoading } = useAdmissionRequests();
  const { deleteAdmission, isLoading: isDeleting } = useDeleteAdmission();

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this admission request?')) {
      try {
        await deleteAdmission(id);
      } catch (error) {
        console.error('Failed to delete admission request:', error);
      }
    }
  };

  if (isLoading || isDeleting) return <Loader />;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Admission Requests</h1>
        <div className="text-sm text-gray-500">
          Total Requests: {admissionRequests?.length || 0}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Grade
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Parent Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {admissionRequests?.length > 0 ? (
                admissionRequests.map((request) => (
                  <tr key={request.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {request.studentFirstName} {request.studentLastName}
                      </div>
                      <div className="text-sm text-gray-500">
                        {new Date(request.dateOfBirth).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Grade {request.gradeApplying}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {request.parentFirstName} {request.parentLastName}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {request.email}
                      </div>
                      <div className="text-sm text-gray-500">
                        {request.phone}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Link
                          to={`/admin/admission-requests/${request.id}`}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                          title="View Details"
                        >
                          <Eye size={20} />
                        </Link>
                        <button
                          onClick={() => handleDelete(request.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                          title="Delete Request"
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
                    colSpan="5"
                  >
                    No admission requests found
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

export default AdmissionRequests;
