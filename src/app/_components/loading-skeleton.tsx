export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-8">
      {/* Hero skeleton */}
      <div className="flex flex-col items-center space-y-4">
        <div className="h-64 w-full max-w-2xl bg-gray-800 rounded-lg skeleton"></div>
        <div className="h-6 w-3/4 bg-gray-800 rounded skeleton"></div>
        <div className="h-6 w-2/3 bg-gray-800 rounded skeleton"></div>
      </div>

      {/* CTA buttons skeleton */}
      <div className="flex justify-center gap-4">
        <div className="h-14 w-40 bg-gray-800 rounded-lg skeleton"></div>
        <div className="h-14 w-48 bg-gray-800 rounded-lg skeleton"></div>
      </div>

      {/* Event card skeleton */}
      <div className="max-w-4xl mx-auto">
        <div className="h-64 bg-gray-800 rounded-lg skeleton"></div>
      </div>

      {/* Gallery skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="h-48 bg-gray-800 rounded-lg skeleton"></div>
        <div className="h-48 bg-gray-800 rounded-lg skeleton"></div>
        <div className="h-48 bg-gray-800 rounded-lg skeleton"></div>
      </div>
    </div>
  );
}

// Inline skeleton for smaller components
export function InlineSkeleton({ className = "" }: { className?: string }) {
  return <div className={`bg-gray-800 rounded skeleton ${className}`}></div>;
}

// Card skeleton
export function CardSkeleton() {
  return (
    <div className="bg-gray-800 rounded-lg p-6 space-y-4 skeleton">
      <div className="h-6 w-3/4 bg-gray-700 rounded"></div>
      <div className="h-4 w-full bg-gray-700 rounded"></div>
      <div className="h-4 w-5/6 bg-gray-700 rounded"></div>
      <div className="h-10 w-32 bg-gray-700 rounded"></div>
    </div>
  );
}
