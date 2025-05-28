import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone, User, MessageSquare } from "lucide-react";
import { useGetMessageById } from "../../hooks/contactMessage/useGetMessageById";
import Loader from "../../ui/Loader";

function MessageItem() {
  const { id } = useParams();
  const { message, isLoading } = useGetMessageById(id);

  if (isLoading) return <Loader />;

  if (!message) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] bg-gray-50 rounded-lg">
        <p className="text-gray-500 text-lg mb-4">Message not found</p>
        <Link
          to="/admin/messages"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
        >
          <ArrowLeft size={20} />
          Back to Messages
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 p-4">
      <div className="flex items-center gap-4 mb-8">
        <Link
          to="/admin/messages"
          className="p-2 hover:bg-blue-50 text-blue-600 rounded-full transition-colors"
        >
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Message Details</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Header Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <User size={20} className="text-blue-600" />
              Contact Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <User size={18} className="text-gray-400 mt-1" />
                <div>
                  <label className="text-sm font-medium text-gray-500">Name</label>
                  <p className="text-gray-900">{message.name}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-gray-400 mt-1" />
                <div>
                  <label className="text-sm font-medium text-gray-500">Email</label>
                  <p className="text-gray-900">{message.email}</p>
                </div>
              </div>
              {message.phone && (
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-gray-400 mt-1" />
                  <div>
                    <label className="text-sm font-medium text-gray-500">Phone</label>
                    <p className="text-gray-900">{message.phone}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <MessageSquare size={20} className="text-blue-600" />
              Message Information
            </h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-500">Subject</label>
                <p className="text-gray-900 mt-1">{message.subject}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Message Content */}
        <div className="p-8 bg-gray-50 border-t border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <MessageSquare size={20} className="text-blue-600" />
            Message
          </h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
              {message.message}
            </p>
          </div>
        </div>

        {/* Privacy Agreement */}
        <div className="p-8 border-t border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Privacy Agreement</h2>
          <div className="bg-blue-50 text-blue-800 p-4 rounded-lg">
            <p className="text-sm">
              User has agreed to the privacy policy and consented to being
              contacted regarding their inquiry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageItem;
