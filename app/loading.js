export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-ink text-white z-[9999]">
      <div className="animate-spin h-16 w-16 border-4 border-gray-300 border-t-brand-lime rounded-full"></div>
    </div>
  );
}
