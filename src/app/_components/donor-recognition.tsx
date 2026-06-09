import type { CSSProperties } from "react";
import { donorTiers, type DonorTier } from "../../lib/donors-data";

interface DonorRecognitionProps {
  compact?: boolean;
  title?: string;
}

const tierDecorations = [
  "from-blue-200/90 via-sky-200/75 to-indigo-200/80 dark:from-blue-900/40 dark:via-sky-800/30 dark:to-indigo-900/35",
  "from-amber-300/90 via-orange-300/75 to-yellow-300/80 dark:from-amber-900/45 dark:via-orange-800/30 dark:to-yellow-900/35",
  "from-slate-200/90 via-zinc-200/75 to-gray-200/80 dark:from-slate-800/50 dark:via-zinc-800/35 dark:to-gray-800/35",
  "from-yellow-300/90 via-amber-300/75 to-orange-300/80 dark:from-yellow-900/45 dark:via-amber-800/30 dark:to-orange-900/35",
  "from-cyan-300/90 via-sky-300/75 to-blue-300/80 dark:from-cyan-900/45 dark:via-sky-800/30 dark:to-blue-900/35",
  "from-emerald-300/90 via-green-300/75 to-lime-300/80 dark:from-emerald-900/45 dark:via-green-800/30 dark:to-lime-900/35",
  "from-indigo-300/90 via-blue-300/75 to-violet-300/80 dark:from-indigo-900/45 dark:via-blue-800/30 dark:to-violet-900/35",
  "from-purple-300/90 via-fuchsia-300/75 to-violet-300/80 dark:from-purple-900/45 dark:via-fuchsia-800/30 dark:to-violet-900/35",
  "from-fuchsia-300/90 via-pink-300/75 to-rose-300/80 dark:from-fuchsia-900/45 dark:via-pink-800/30 dark:to-rose-900/35",
  "from-rose-300/90 via-red-300/75 to-orange-300/80 dark:from-rose-900/45 dark:via-red-800/30 dark:to-orange-900/35",
];

export default function DonorRecognition({
  compact = false,
  title = "Thank You to Our Donors",
}: DonorRecognitionProps) {
  const tiersToShow = compact ? donorTiers.slice(0, 4) : donorTiers;
  const maxTierIndex = Math.max(tiersToShow.length - 1, 1);

  return (
    <section
      className={`relative overflow-hidden rounded-3xl border border-sky-200/60 dark:border-sky-700/40 bg-[radial-gradient(circle_at_20%_20%,rgba(147,197,253,0.20),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(196,181,253,0.20),transparent_35%),radial-gradient(circle_at_70%_70%,rgba(56,189,248,0.16),transparent_35%),linear-gradient(160deg,#020617_0%,#0b1120_40%,#111827_100%)] shadow-[0_18px_50px_rgba(14,165,233,0.20)] w-[calc(100%+1.5rem)] md:w-[calc(100%+3rem)] -mx-3 md:-mx-6 ${
        compact ? "p-6 md:p-8 my-12" : "p-8 md:p-10 my-16"
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
      >
        <div className="absolute left-[8%] top-[12%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.65)]" />
        <div className="absolute left-[24%] top-[30%] h-1 w-1 rounded-full bg-sky-200 shadow-[0_0_10px_2px_rgba(125,211,252,0.6)]" />
        <div className="absolute left-[41%] top-[16%] h-1.5 w-1.5 rounded-full bg-indigo-200 shadow-[0_0_10px_2px_rgba(199,210,254,0.6)]" />
        <div className="absolute left-[60%] top-[26%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.65)]" />
        <div className="absolute left-[77%] top-[14%] h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_10px_2px_rgba(165,243,252,0.6)]" />
        <div className="absolute left-[90%] top-[32%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.65)]" />
        <div className="absolute left-[12%] top-[62%] h-1 w-1 rounded-full bg-blue-200 shadow-[0_0_10px_2px_rgba(191,219,254,0.6)]" />
        <div className="absolute left-[33%] top-[72%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.65)]" />
        <div className="absolute left-[52%] top-[66%] h-1 w-1 rounded-full bg-violet-200 shadow-[0_0_10px_2px_rgba(221,214,254,0.6)]" />
        <div className="absolute left-[72%] top-[76%] h-1.5 w-1.5 rounded-full bg-cyan-100 shadow-[0_0_10px_2px_rgba(207,250,254,0.6)]" />
      </div>
      <div className="mb-6 relative z-10">
        <h2
          className={`font-bold tracking-tight text-white ${
            compact ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl"
          }`}
        >
          {title}
        </h2>
        <p className="text-slate-200 mt-2">
          We’re grateful for every donor who helps us bring video game music to
          life in St. Louis.
        </p>
      </div>

      <div
        className={`grid gap-4 ${compact ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}
      >
        {tiersToShow.map((tier: DonorTier, tierIndex: number) => {
          const intensity = tierIndex / maxTierIndex;
          const isHighTier = intensity >= 0.65;
          const decoration =
            tierDecorations[tierIndex] ??
            tierDecorations[tierDecorations.length - 1];

          const isTopTier = tier.id === "challenger-circle";

          return (
            <div
              key={tier.id}
              className={`rounded-2xl border border-sky-200/25 dark:border-sky-400/20 bg-white/10 dark:bg-slate-900/40 backdrop-blur-sm p-5 overflow-hidden relative ${
                isTopTier
                  ? "md:col-span-2 lg:col-span-3 lg:max-w-3xl lg:mx-auto"
                  : ""
              }`}
            >
              <div
                className={`pointer-events-none absolute inset-0 opacity-70 bg-gradient-to-br ${decoration}`}
                aria-hidden="true"
              />
              {isHighTier && (
                <div
                  className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-gradient-to-br from-white/40 to-transparent dark:from-white/10 dark:to-transparent blur-xl"
                  aria-hidden="true"
                />
              )}

              <div className="mb-3 relative z-10">
                <h3 className="text-lg font-extrabold tracking-tight text-gray-900 dark:text-white">
                  {tier.name}
                </h3>
                <p className={`text-sm font-semibold ${tier.accentClass}`}>
                  {tier.minimum}
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2">
                {tier.donors.map((donor: string, donorIndex: number) => {
                  const driftDuration = (
                    10 -
                    intensity * 4 +
                    (donorIndex % 3) * 0.6
                  ).toFixed(2);
                  const bobDuration = (
                    4.8 -
                    intensity * 1.6 +
                    (donorIndex % 2) * 0.35
                  ).toFixed(2);
                  const pulseDuration = (3.8 - intensity * 1.2).toFixed(2);
                  const driftDistance = `${Math.round(6 + intensity * 16 + (donorIndex % 3) * 2)}px`;
                  const bobDistance = `${Math.round(2 + intensity * 6)}px`;
                  const delay = `${(donorIndex * 0.35 + tierIndex * 0.2).toFixed(2)}s`;
                  const animatedClass = isHighTier
                    ? "donor-chip donor-chip--active"
                    : "donor-chip";

                  return (
                    <span
                      key={`${tier.id}-${donor}`}
                      className={`${animatedClass} inline-flex items-center rounded-full border border-white/70 dark:border-white/20 bg-gradient-to-r from-white/95 via-fuchsia-50/90 to-cyan-50/90 dark:from-gray-900/90 dark:via-fuchsia-900/25 dark:to-cyan-900/25 px-3 py-1 text-sm font-semibold text-gray-800 dark:text-gray-100 backdrop-blur-[1px] shadow-[0_2px_10px_rgba(236,72,153,0.12)]`}
                      style={
                        {
                          "--drift-duration": `${driftDuration}s`,
                          "--bob-duration": `${bobDuration}s`,
                          "--pulse-duration": `${pulseDuration}s`,
                          "--drift-distance": driftDistance,
                          "--bob-distance": bobDistance,
                          "--delay": delay,
                        } as CSSProperties
                      }
                    >
                      {donor}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {compact && donorTiers.length > tiersToShow.length && (
        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          Visit the Donate page to view all donor tiers and recognition.
        </p>
      )}
    </section>
  );
}
