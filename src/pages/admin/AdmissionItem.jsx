import { useParams } from "react-router-dom";
import { useGetAdmissionById } from "../../hooks/admissionRequest/useGetAdmissionById";
import Loader from "../../ui/Loader";

function AdmissionItem() {
    const { id } = useParams();
    const { admission, isLoading } = useGetAdmissionById(id);

    if (isLoading) return <Loader />;

    return (
        <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-blue-50 px-6 py-4 border-b border-blue-100">
                    <h1 className="text-2xl font-bold text-blue-900">Admission Request Details</h1>
                </div>
                
                <div className="p-6 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Student Information Card */}
                        <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                            <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                                <span className="bg-blue-100 text-blue-800 p-2 rounded-lg mr-3">Student</span>
                                Information
                            </h2>
                            <div className="space-y-4">
                                <div className="border-b border-gray-100 pb-4">
                                    <p className="text-sm font-medium text-gray-600">Full Name</p>
                                    <p className="text-base font-semibold text-gray-900 mt-1">
                                        {admission.studentFirstName} {admission.studentLastName}
                                    </p>
                                </div>
                                <div className="border-b border-gray-100 pb-4">
                                    <p className="text-sm font-medium text-gray-600">Date of Birth</p>
                                    <p className="text-base text-gray-900 mt-1">
                                        {new Date(admission.dateOfBirth).toLocaleDateString()}
                                    </p>
                                </div>
                                <div className="border-b border-gray-100 pb-4">
                                    <p className="text-sm font-medium text-gray-600">Nationality</p>
                                    <p className="text-base text-gray-900 mt-1">
                                        {admission.nationality}
                                    </p>
                                </div>
                                <div className="border-b border-gray-100 pb-4">
                                    <p className="text-sm font-medium text-gray-600">Number of Siblings</p>
                                    <p className="text-base text-gray-900 mt-1">
                                        {admission.numberOfSiblings}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Grade Applying For</p>
                                    <p className="text-base text-gray-900 mt-1">Grade {admission.gradeApplying}</p>
                                </div>
                            </div>
                        </div>

                        {/* Parent Information Card */}
                        <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                            <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                                <span className="bg-green-100 text-green-800 p-2 rounded-lg mr-3">Parent</span>
                                Information
                            </h2>
                            <div className="space-y-4">
                                <div className="border-b border-gray-100 pb-4">
                                    <p className="text-sm font-medium text-gray-600">Full Name</p>
                                    <p className="text-base font-semibold text-gray-900 mt-1">
                                        {admission.parentFirstName} {admission.parentLastName}
                                    </p>
                                </div>
                                <div className="border-b border-gray-100 pb-4">
                                    <p className="text-sm font-medium text-gray-600">Contact Details</p>
                                    <p className="text-base text-gray-900 mt-1">{admission.email}</p>
                                    <p className="text-base text-gray-900">{admission.phone}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Address</p>
                                    <p className="text-base text-gray-900 mt-1">{admission.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Information Card */}
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                        <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                            <span className="bg-purple-100 text-purple-800 p-2 rounded-lg mr-3">Additional</span>
                            Information
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="border-b border-gray-100 pb-4 md:border-b-0 md:border-r md:pr-6">
                                <p className="text-sm font-medium text-gray-600">Previous School</p>
                                <p className="text-base text-gray-900 mt-1">{admission.previousSchool}</p>
                            </div>
                            <div className="pb-4">
                                <p className="text-sm font-medium text-gray-600">Special Requirements</p>
                                <p className="text-base text-gray-900 mt-1">{admission.specialRequirements || 'None'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdmissionItem;
