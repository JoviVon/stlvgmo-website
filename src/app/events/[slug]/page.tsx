import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllEvents, getEventBySlug } from "@/lib/api";
import Container from "@/app/_components/container";
import markdownToHtml from "@/lib/markdownToHtml";
import Link from "next/link";

export default async function Event({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    return notFound();
  }

  const content = await markdownToHtml(event.content || "");

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
        <div className="max-w-4xl mx-auto py-16">
          {/* Back to Calendar */}
          <div className="mb-8">
            <Link 
              href="/calendar" 
              className="inline-flex items-center text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Calendar
            </Link>
          </div>

          {/* Event Header */}
          <div className={`border rounded-lg p-8 mb-8 ${getEventTypeColor(event.type)}`}>
            <div className="flex items-center space-x-3 mb-4">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
                {event.title}
              </h1>
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-white dark:bg-gray-800 bg-opacity-50">
                {event.type}
              </span>
              {event.recurring && event.recurring !== 'none' && (
                <span className="px-3 py-1 text-sm font-medium rounded-full bg-white dark:bg-gray-800 bg-opacity-50">
                  {event.recurring}
                </span>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="mb-2">
                  <strong>Date:</strong> {new Date(event.date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <p className="mb-2">
                  <strong>Time:</strong> {event.time}
                </p>
              </div>
              <div>
                {event.location && (
                  <p className="mb-2">
                    <strong>Location:</strong> {event.location}
                  </p>
                )}
                {event.description && (
                  <p className="mb-2">
                    <strong>Description:</strong> {event.description}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Event Content */}
          {content && (
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          )}
        </div>
      </Container>
    </main>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    return notFound();
  }

  const title = `${event.title} | STLVGMO`;

  return {
    title,
    description: event.description,
  };
}

export async function generateStaticParams() {
  const events = getAllEvents();

  return events.map((event) => ({
    slug: event.slug,
  }));
}
