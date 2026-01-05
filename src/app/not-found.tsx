import Link from "next/link";
import Container from "@/app/_components/container";

export default function NotFound() {
  return (
    <main>
      <Container>
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center py-16">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-primary-600 dark:text-primary-400 mb-4">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
              Oops! The page you're looking for seems to have wandered off into
              another level.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Return Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary-600 dark:text-primary-400 bg-transparent border-2 border-primary-600 dark:border-primary-400 hover:bg-primary-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-12 text-gray-500 dark:text-gray-400">
            <p className="mb-2">Looking for something specific?</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/about"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                About
              </Link>
              <span>•</span>
              <Link
                href="/posts"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Posts
              </Link>
              <span>•</span>
              <Link
                href="/gallery"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Gallery
              </Link>
              <span>•</span>
              <Link
                href="/donate"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
