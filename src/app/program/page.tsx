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
          For the best mobile experience, download the program:
        </p>
        <a
          href="/assets/STLVGMO_Oct2025_Program_V4.pdf"
          download
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm"
        >
          📄 Download Program (PDF)
        </a>
      </div>

      {/* PDF Viewer Container */}
      <div className="flex-1 w-full p-2 md:p-4">
        <div className="w-full h-[calc(100vh-12rem)] md:h-[calc(100vh-8rem)] bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <object
            data="/assets/STLVGMO_Oct2025_Program_V4.pdf"
            type="application/pdf"
            className="w-full h-full"
            aria-label="STLVGMO Concert Program PDF"
          >
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                Unable to display PDF in browser.
              </p>
              <a
                href="/assets/STLVGMO_Oct2025_Program_V4.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Open PDF in New Tab
              </a>
            </div>
          </object>
        </div>
      </div>
    </main>
  );
}
