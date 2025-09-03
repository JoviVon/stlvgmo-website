import Container from "@/app/_components/container";
import { ORGANIZATION } from "@/lib/constants";
import { getAllEvents } from "@/lib/api";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Calendar | STLVGMO",
  description: "Stay up to date with all STLVGMO rehearsals, concerts, and events.",
};

export default function Calendar() {
  const allEvents = getAllEvents();

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'rehearsal':
        return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-700';
      case 'concert':
        return 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 border-purple-200 dark:border-purple-700';
      case 'audition':
        return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border-green-200 dark:border-green-700';
      case 'meeting':
        return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 border-yellow-200 dark:border-yellow-700';
      default:
        return 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-700';
    }
  };

  return (
    <main>
      <Container>
        <div className="max-w-6xl mx-auto py-16">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
              Calendar
            </h1>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Stay up to date with all STLVGMO rehearsals, concerts, and events.
            </p>
          </div>

          {/* Regular Rehearsal Info */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">
              Regular Rehearsals
            </h2>
            <div className="text-blue-800 dark:text-blue-200">
              <p className="mb-2">
                <strong>When:</strong> {ORGANIZATION.rehearsal.day} {ORGANIZATION.rehearsal.time}
              </p>
              <p className="mb-2">
                <strong>Where:</strong> {ORGANIZATION.rehearsal.location}
              </p>
              <p>
                <strong>Address:</strong> {ORGANIZATION.rehearsal.address}
              </p>
            </div>
          </div>

          {/* Events List */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
            {allEvents.length === 0 ? (
              <p className="text-gray-600 dark:text-gray-400 text-center py-8">
                No events scheduled at this time.
              </p>
            ) : (
              allEvents.map((event) => (
                <div
                  key={event.slug}
                  className={`border rounded-lg p-6 ${getEventTypeColor(event.type)}`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Link href={`/events/${event.slug}`}>
                          <h3 className="text-xl font-semibold hover:underline cursor-pointer">
                            {event.title}
                          </h3>
                        </Link>
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-white dark:bg-gray-800 bg-opacity-50">
                          {event.type}
                        </span>
                        {event.recurring && event.recurring !== 'none' && (
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-white dark:bg-gray-800 bg-opacity-50">
                            {event.recurring}
                          </span>
                        )}
                      </div>
                      <div className="space-y-1 text-sm mb-3">
                        <p>
                          <strong>Date:</strong> {new Date(event.date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                        <p><strong>Time:</strong> {event.time}</p>
                        {event.location && <p><strong>Location:</strong> {event.location}</p>}
                      </div>
                      {event.description && (
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {event.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Instructions for adding events */}
          <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Adding Events</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              To add new events, create a markdown file in the <code>_events</code> directory with the event details in the frontmatter. 
              Events will automatically appear on this calendar page.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
