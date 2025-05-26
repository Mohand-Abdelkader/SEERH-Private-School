import { Users, GraduationCap, Clock, CheckCircle } from "lucide-react";

function AdminDashboard() {
  const stats = [
    {
      label: "Total Applications",
      value: "24",
      change: "+4",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      label: "Pending Review",
      value: "12",
      change: "+2",
      icon: Clock,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      label: "Approved",
      value: "8",
      change: "+1",
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      label: "Total Students",
      value: "156",
      change: "+3",
      icon: GraduationCap,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ];

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
            {/* Add recent applications list here */}
            <p className="text-gray-500">No recent applications</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 border rounded-lg hover:bg-gray-50 transition-colors text-left">
              <Users className="h-6 w-6 text-blue-600 mb-2" />
              <p className="font-medium">Review Applications</p>
            </button>
            <button className="p-4 border rounded-lg hover:bg-gray-50 transition-colors text-left">
              <GraduationCap className="h-6 w-6 text-purple-600 mb-2" />
              <p className="font-medium">Student Directory</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;