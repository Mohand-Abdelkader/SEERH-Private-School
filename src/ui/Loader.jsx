export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center justify-center mt-16  p-8 h-full">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#ef7822] border-t-transparent shadow-lg"></div>
        <h2 className="mt-4 text-lg font-medium text-[#0d4c83]">Loading...</h2>
        <p className="mt-2 text-sm text-gray-500">
          Please wait while we prepare your content
        </p>
      </div>
    </div>
  );
}
