import Container from "@/app/_components/container";

export default function Donate() {
  return (
    <main>
      <Container>
        <div className="max-w-4xl mx-auto py-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-8">
            Support STLVGMO
          </h1>

          {/* 501(c)(3) Status Banner */}
          <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-700 rounded-lg">
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Federally Recognized 501(c)(3) Nonprofit
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We are a federally recognized 501(c)(3) nonprofit. Donations
                  are tax-deductible to the extent allowed by law.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Your generous donations help us continue bringing the magic of
              video game music to life in St. Louis. As a federally recognized
              501(c)(3) nonprofit organization, we rely on the support of music
              lovers and gaming enthusiasts like you to make our concerts
              possible.
            </p>

            <h2 className="text-2xl font-bold mb-4">
              Tax-Deductible Donations
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Your contributions to STLVGMO are tax-deductible under sections
              2055, 2106, and 2522 of the Internal Revenue Code. This means:
            </p>
            <ul className="text-lg text-gray-600 dark:text-gray-300 mb-8 space-y-2">
              <li>
                <strong>Estate Tax Deductions (Section 2055):</strong>{" "}
                Charitable bequests to STLVGMO may be deducted from your estate
              </li>
              <li>
                <strong>Gift Tax Deductions (Section 2522):</strong> Gifts to
                STLVGMO may qualify for gift tax deductions
              </li>
              <li>
                <strong>Income Tax Deductions:</strong> Your donations may be
                deductible on your federal income tax return
              </li>
            </ul>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 italic">
              Please consult with your tax advisor to understand how your
              donation may benefit you under current tax laws.
            </p>

            <h2 className="text-2xl font-bold mb-4">How Your Donation Helps</h2>
            <ul className="text-lg text-gray-600 dark:text-gray-300 mb-8 space-y-2">
              <li>
                Purchase and arrange high-quality sheet music for our
                performances
              </li>
              <li>Rent performance venues and cover production costs</li>
              <li>Provide equipment and resources for our musicians</li>
              <li>Support outreach programs and community engagement</li>
              <li>
                Help us grow and bring more amazing video game music to St.
                Louis
              </li>
            </ul>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Every contribution, no matter the size, makes a difference. Thank
              you for supporting the arts and helping us celebrate the
              incredible world of video game music!
            </p>
          </div>

          {/* Donation Button */}
          <div className="flex justify-center mb-12">
            <a
              href="https://givebutter.com/fE3dvv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-12 py-6 text-2xl font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              <svg
                className="w-8 h-8 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Donate Now
            </a>
          </div>

          <div className="mt-12 p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Other Ways to Support
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Can't donate right now? There are other ways you can help:
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li>• Attend our concerts and bring friends</li>
              <li>• Share our events on social media</li>
              <li>• Volunteer your time and talents</li>
              <li>• Spread the word about STLVGMO in your community</li>
            </ul>
          </div>
        </div>
      </Container>
    </main>
  );
}
