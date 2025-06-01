import { Users, GraduationCap, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

import { useAdmissionRequests } from "../../hooks/admissionRequest/useAdmission";
import { useNews } from "../../hooks/news/useNews";
import { usePolicy } from "../../hooks/schoolPolicy/usePolicy";
import Loader from "../../ui/Loader";
import { useContactMessages } from "../../hooks/contactMessage/useMessage";
function AdminDashboard() {
  const { admissionRequests, isLoading: countingAdmission } =
    useAdmissionRequests();
  const { contactMessages, isLoading: countingMessages } = useContactMessages();
  const { news, isLoading: countingNews } = useNews();
  const { data: policy, isLoading: countingPolicy } = usePolicy();
  const isLoading =
    countingAdmission || countingMessages || countingNews || countingPolicy;
  if (isLoading) return <Loader />;
  const stats = [
    {
      label: "Total Applications",
      value: admissionRequests?.length,
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      label: "Contact Messages",
      value: contactMessages?.length,

      icon: Clock,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      label: "News",
      value: news?.length,

      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      label: "Policy",
      value: policy?.length,

      icon: GraduationCap,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ];
  const recentApplications = admissionRequests?.slice(0, 3);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <div className="flex items-baseline mt-1">
                    <p className="text-2xl font-semibold text-gray-900">
                      {stat.value}
                    </p>
                    <span className="ml-2 text-sm font-medium text-green-600">
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className={`${stat.bgColor} p-3 rounded-full`}>
                  <Icon className={`${stat.color} h-6 w-6`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Applications</h2>
          <div className="space-y-4">
            {recentApplications?.length > 0 ? (
              recentApplications.map((application) => (
                <div className="border-b last:border-0" key={application.id}>
                  <Link
                    to={`/admin/admission-requests/${application.id}`}
                    key={application.id}
                    className="block p-4 mb-2 hover:bg-gray-50 rounded-lg transition-all duration-200 border border-gray-100 hover:border-gray-200 hover:shadow-sm"
                  >
                    <div className="flex flex-col gap-1">
                      <h3 className="font-semibold text-gray-900">
                        {application.studentFirstName}{" "}
                        {application.studentLastName}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">
                          {application.email}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No recent applications</p>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link
              to="/admission-requests"
              className="p-4 border rounded-lg hover:bg-gray-200 transition-colors text-left "
            >
              <Users className="h-6 w-6 text-blue-600 mb-2" />
              <p className="font-medium">Review Applications</p>
            </Link>
            <Link
              to="/admin/news/create"
              className="p-4 border rounded-lg hover:bg-gray-200 transition-colors text-left"
            >
              <Clock className="h-6 w-6 text-purple-600 mb-2" />
              <p className="font-medium">Add News </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
