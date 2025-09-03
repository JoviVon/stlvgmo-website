export type Event = {
  slug: string;
  title: string;
  date: string;
  time: string;
  type: 'rehearsal' | 'concert' | 'audition' | 'meeting' | 'other';
  location: string;
  description: string;
  recurring?: 'none' | 'weekly' | 'monthly';
  content: string;
};
