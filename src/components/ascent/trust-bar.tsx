export function AscentTrustBar() {
  return (
    <section className="bg-white py-16 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
          Powered by Industry-Leading Technology
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          <div className="text-xl font-bold text-gray-600">NVIDIA GB10</div>
          <div className="text-xl font-bold text-gray-600">Grace Blackwell</div>
          <div className="text-xl font-bold text-gray-600">ConnectX-7</div>
          <div className="text-xl font-bold text-gray-600">DGX Spark</div>
        </div>
      </div>
    </section>
  );
}
