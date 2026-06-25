import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Trivia Night | STLVGMO",
  description:
    "Join STLVGMO for Trivia Night in November. Find event details and sign up.",
};

export default function TriviaPage() {
  const signupUrl =
    "https://givebutter.com/st-louis-video-game-orchestra-trivia-night";

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 left-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

      <section className="relative z-10 mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="mb-8 inline-block rounded-full border border-primary-400/40 bg-primary-600/20 px-3 py-1 text-sm font-semibold text-primary-200">
          November Special Event
        </div>

        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
          Trivia Night
        </h1>
        <p className="mb-8 max-w-3xl text-lg text-gray-300 md:text-xl">
          An energetic night of trivia, community, and live music with STLVGMO.
          Build your team, bring your game face, and join us for one of our most
          fun events of the season.
        </p>

        <div className="mb-10 flex flex-wrap gap-3">
          <span className="rounded-full border border-gray-600 bg-gray-800/70 px-3 py-1 text-sm text-gray-200">
            📅 November 7th
          </span>
          <span className="rounded-full border border-gray-600 bg-gray-800/70 px-3 py-1 text-sm text-gray-200">
            🕖 7:00–9:30 PM
          </span>
          <span className="rounded-full border border-gray-600 bg-gray-800/70 px-3 py-1 text-sm text-gray-200">
            📍 The Heights Community Center
          </span>
        </div>

        <div className="mb-10 overflow-hidden rounded-2xl border border-gray-700/80 bg-gray-900/60 shadow-2xl shadow-primary-900/20">
          <div className="relative h-[72vh] min-h-[460px] w-full max-h-[920px]">
            <Image
              src="/assets/STLVGMO_trivianight2026_digitalposter.png"
              alt="STLVGMO Trivia Night 2026 digital poster"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="mb-8 rounded-2xl border border-primary-500/40 bg-gradient-to-r from-primary-700/20 via-primary-600/10 to-fuchsia-700/20 p-5 md:p-6">
          <h2 className="mb-2 text-xl font-bold text-white md:text-2xl">
            Pricing
          </h2>
          <p className="text-lg text-primary-100">
            <span className="font-extrabold text-white">$200</span> per table
            (up to 8) or <span className="font-extrabold text-white">$25</span>{" "}
            per person
          </p>
        </div>

        <div className="mb-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-700 bg-gradient-to-b from-gray-800/80 to-gray-900/80 p-6 transition-transform duration-200 hover:-translate-y-1">
            <h2 className="mb-4 text-2xl font-semibold text-white">
              Event Details
            </h2>
            <ul className="space-y-3 text-gray-200">
              <li>
                <span className="font-medium text-gray-100">Date:</span>{" "}
                November 7th
              </li>
              <li>
                <span className="font-medium text-gray-100">Time:</span>{" "}
                7:00-9:30 PM
              </li>
              <li>
                <span className="font-medium text-gray-100">Location:</span> The
                Heights Community Center, 8001 Dale Ave, Richmond Heights, MO
                63117
              </li>
              <li>
                <span className="font-medium text-gray-100">Table Size:</span> 8
              </li>
              <li>
                <span className="font-medium text-gray-100">Pricing:</span> $200
                per table or $25 per person
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-700 bg-gradient-to-b from-gray-800/80 to-gray-900/80 p-6 transition-transform duration-200 hover:-translate-y-1">
            <h2 className="mb-4 text-2xl font-semibold text-white">
              What to Expect
            </h2>
            <ul className="space-y-3 text-gray-200">
              <li>🎁 Silent auction</li>
              <li>🎟️ 50/50 raffle</li>
              <li>🧝 Costume contest</li>
              <li>🍔 Food and drinks available for purchase</li>
              <li>
                🎷 Live music from our very own STLVGMO jazz combo all night
              </li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-primary-500/50 bg-gradient-to-r from-primary-600/20 to-fuchsia-600/20 p-6 md:p-8">
          <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
            Ready to Join?
          </h2>
          <p className="mb-6 max-w-2xl text-gray-100">
            Reserve your spot now and bring your friends for an unforgettable
            night of trivia, music, and fun.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={signupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-primary-500"
            >
              Sign Up for Trivia Night
            </a>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg border border-gray-500 bg-gray-900/70 px-6 py-3 font-semibold text-gray-100 transition-colors duration-200 hover:bg-gray-800"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
