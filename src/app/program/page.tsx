import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concert Program | STLVGMO",
  description: "View the STLVGMO concert program.",
};

export default function Program() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* Mobile Download Button */}
      <div className="md:hidden p-4 bg-gray-100 dark:bg-gray-800 text-center border-b border-gray-200 dark:border-gray-700">
        <p className="text-sm mb-3 text-gray-700 dark:text-gray-300">
          For the best mobile experience, download or open the program:
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/assets/STLVGMO_Oct2025_Program_V4.pdf"
            download
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium shadow-sm"
            aria-label="Download concert program PDF"
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
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download PDF
          </a>
          <a
            href="/assets/STLVGMO_Oct2025_Program_V4.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium shadow-sm"
            aria-label="Open concert program in new tab"
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
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Open in Tab
          </a>
        </div>
      </div>

      {/* PDF Viewer Container */}
      <div className="flex-1 w-full p-2 md:p-4">
        <div className="w-full h-[calc(100vh-16rem)] md:h-[calc(100vh-8rem)] bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <object
            data="/assets/STLVGMO_Oct2025_Program_V4.pdf#view=FitH"
            type="application/pdf"
            className="w-full h-full"
            aria-label="STLVGMO Concert Program PDF"
          >
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <svg
                className="w-16 h-16 text-gray-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 max-w-md">
                Unable to display PDF in your browser. Please download or open
                in a new tab.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/assets/STLVGMO_Oct2025_Program_V4.pdf"
                  download
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium shadow-sm"
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
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download PDF
                </a>
                <a
                  href="/assets/STLVGMO_Oct2025_Program_V4.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium shadow-sm"
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
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Open in New Tab
                </a>
              </div>
            </div>
          </object>
        </div>
      </div>
    </main>
  );
}
