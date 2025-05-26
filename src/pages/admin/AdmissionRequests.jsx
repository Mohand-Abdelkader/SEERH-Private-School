import { Search, Filter, MoreVertical, CheckCircle, XCircle, Clock } from "lucide-react";

function AdmissionRequests() {
  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    approved: "bg-green-100 text-green-800",
    rejected: "bg-red-100 text-red-800",
  };

  const mockData = [
    {
      id: 1,
      studentName: "John Doe",
      grade: "Grade 9",
      parentName: "Robert Doe",
      status: "pending",
      date: "2024-02-20",
    },
    // Add more mock data as needed
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search applications..."
            className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d4c83] focus:border-transparent"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="h-5 w-5" />
            <span>Filter</span>
          </button>
          <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d4c83] focus:border-transparent">
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
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
                  Status
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
              {mockData.length > 0 ? (
                mockData.map((application) => (
                  <tr key={application.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {application.studentName}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {application.grade}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {application.parentName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[application.status]}`}
                      >
                        {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {application.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <button className="p-1 hover:bg-green-100 rounded-full transition-colors">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        </button>
                        <button className="p-1 hover:bg-red-100 rounded-full transition-colors">
                          <XCircle className="h-5 w-5 text-red-600" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                          <MoreVertical className="h-5 w-5 text-gray-400" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"
                    colSpan="6"
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