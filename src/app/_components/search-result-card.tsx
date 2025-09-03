import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function SearchResultCard({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
      <div className="aspect-video relative overflow-hidden">
        <Link href={`/posts/${slug}`}>
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
          />
        </Link>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 leading-tight">
          <Link 
            href={`/posts/${slug}`} 
            className="hover:text-primary-700 dark:hover:text-primary-400 transition-colors duration-200"
          >
            {title}
          </Link>
        </h3>
        
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          <DateFormatter dateString={date} />
        </div>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 line-clamp-2">
          {excerpt}
        </p>
        
        <div className="flex items-center">
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </div>
  );
}
