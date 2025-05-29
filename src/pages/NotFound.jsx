import { Link } from "react-router-dom";
import { Construction, Home } from "lucide-react";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa] px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <Construction className="h-24 w-24 mx-auto text-[#ef7822]" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#0d4c83] mb-4">
          Oops! You caught us here
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          This page is still under construction. Our team is working hard to
          bring you something amazing.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#0d4c83] text-white px-6 py-3 rounded-lg hover:bg-[#0d4c83]/90 transition-colors"
        >
          <Home className="h-5 w-5" />
          Return to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
