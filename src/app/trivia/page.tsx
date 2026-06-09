import Link from "next/link";

export const metadata = {
  title: "Trivia Night | STLVGMO",
  description:
    "Join STLVGMO for Trivia Night in November. Find event details and sign up.",
};

export default function TriviaPage() {
  const signupUrl = "https://example.com/trivia-signup";

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 text-gray-100">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="inline-block px-3 py-1 rounded-full bg-primary-600/20 text-primary-300 text-sm font-semibold mb-6">
          November Special Event
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Trivia Night
        </h1>
        <p className="text-lg text-gray-300 mb-10">
          We’re hosting a community Trivia Night this November. Use this page to
          share all event details and direct guests to signup.
        </p>

        <div className="grid gap-6 md:grid-cols-2 mb-10">
          <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-5">
            <h2 className="text-xl font-semibold mb-3">Event Details</h2>
            <ul className="space-y-2 text-gray-300">
              <li>
                <span className="font-medium text-gray-100">Date:</span>{" "}
                November 7th
              </li>
              <li>
                <span className="font-medium text-gray-100">Time:</span> 7:00 PM
              </li>
              <li>
                <span className="font-medium text-gray-100">Location:</span> The
                Heights Community Center, 8001 Dale Ave, Richmond Heights, MO
                63117
              </li>
              <li>
                <span className="font-medium text-gray-100">Team Size:</span>{" "}
                Add team info
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-5">
            <h2 className="text-xl font-semibold mb-3">What to Expect</h2>
            <p className="text-gray-300">
              Add your trivia categories, prizes, and participation info here so
              attendees know exactly what to expect.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-primary-500/40 bg-primary-500/10 p-6">
          <h2 className="text-2xl font-semibold mb-3">Ready to Join?</h2>
          <p className="text-gray-200 mb-5">
            Reserve your spot using the signup link below.
          </p>
          <a
            href={signupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-500 text-white font-semibold transition-colors duration-200"
          >
            Sign Up for Trivia Night
          </a>
          <p className="text-sm text-gray-400 mt-4">
            Replace the placeholder signup URL in{" "}
            <code>src/app/trivia/page.tsx</code> with your real signup link.
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/"
            className="text-primary-300 hover:text-primary-200 underline underline-offset-4"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
