export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0F0F0F] text-white z-[9999]">
      <div className="animate-spin h-16 w-16 border-4 border-gray-300 border-t-[#D8F422] rounded-full"></div>
    </div>
  );
}
