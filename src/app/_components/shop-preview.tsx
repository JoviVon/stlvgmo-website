export default function ShopPreview() {
  return (
    <section className="py-16 animate-fade-in">
      {/* Retro-style divider */}
      <div className="mb-12 flex items-center justify-center gap-2">
        <div className="w-2 h-2 bg-stlvgmo-blue-600 transform rotate-45"></div>
        <div className="w-2 h-2 bg-stlvgmo-orange-500 transform rotate-45"></div>
        <div className="w-2 h-2 bg-stlvgmo-blue-600 transform rotate-45"></div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight mb-4">
          Official Merchandise
        </h2>
        <p className="text-xl text-gray-300">
          Support STLVGMO by shopping our official merchandise collection.
        </p>
      </div>

      <div className="relative bg-gradient-to-br from-stlvgmo-blue-900 to-stlvgmo-blue-700 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <div className="relative z-10 p-8 md:p-12">
          <div className="max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Visit Our Shop
            </h3>
            <p className="text-lg text-gray-100 mb-6">
              Browse our collection of t-shirts, hoodies, posters, and more.
              Every purchase helps support our mission to bring video game music
              to life.
            </p>
            <a
              href="https://shop.stlvgmo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-stlvgmo-orange-600 to-stlvgmo-orange-500 text-white font-semibold rounded-lg hover:from-stlvgmo-orange-700 hover:to-stlvgmo-orange-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Shop Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white opacity-5 rounded-full -mr-24 -mb-24"></div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="text-center p-6">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-stlvgmo-orange-600 rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h4 className="font-semibold text-lg mb-2">Quality Products</h4>
          <p className="text-gray-400">
            Premium merchandise with unique designs
          </p>
        </div>

        <div className="text-center p-6">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-stlvgmo-blue-600 rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h4 className="font-semibold text-lg mb-2">Support the Orchestra</h4>
          <p className="text-gray-400">Proceeds help fund our performances</p>
        </div>

        <div className="text-center p-6">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-stlvgmo-orange-600 rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h4 className="font-semibold text-lg mb-2">Easy Shopping</h4>
          <p className="text-gray-400">Secure checkout and fast shipping</p>
        </div>
      </div>
    </section>
  );
}
