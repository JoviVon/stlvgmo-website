# How to Add Events to Your Website

Adding new events to your STLVGMO website is super easy! Just follow these simple steps:

## Step 1: Open the Events Data File

Navigate to: `src/lib/events-data.ts`

## Step 2: Copy the Event Template

Find the `upcomingEvents` array and copy this template:

```typescript
{
  id: "unique-event-id",
  title: "Event Title",
  date: "Month Day, Year",
  time: "7:30 PM",
  venue: "Venue Name",
  address: "Street Address",
  city: "City",
  state: "ST",
  zip: "12345",
  description: "Brief description of the event",
  ticketLink: "/program",
},
```

## Step 3: Fill in Your Event Details

Replace the template values with your actual event information:

```typescript
{
  id: "summer-2025-concert",           // Unique ID (no spaces, use dashes)
  title: "Summer Concert 2025",        // Event name
  date: "August 15, 2025",             // Event date
  time: "7:00 PM",                     // Start time
  venue: "The Pageant",                // Venue name
  address: "6161 Delmar Blvd",         // Street address
  city: "St. Louis",                   // City
  state: "MO",                         // State abbreviation
  zip: "63112",                        // ZIP code
  description: "Summer spectacular featuring Nintendo classics!",
  ticketLink: "/program",              // Link to tickets (or external URL)
},
```

## Step 4: Add to the Array

Paste your new event into the `upcomingEvents` array:

```typescript
export const upcomingEvents: Event[] = [
  {
    id: "may-2025-concert",
    title: "Spring Concert 2025",
    // ... existing event
  },
  // ADD YOUR NEW EVENT HERE:
  {
    id: "summer-2025-concert",
    title: "Summer Concert 2025",
    date: "August 15, 2025",
    time: "7:00 PM",
    venue: "The Pageant",
    address: "6161 Delmar Blvd",
    city: "St. Louis",
    state: "MO",
    zip: "63112",
    description: "Summer spectacular featuring Nintendo classics!",
    ticketLink: "/program",
  },
];
```

## Step 5: Save and Done!

That's it! Your new event will automatically appear on the homepage.

## Tips

### Multiple Events

- Events are displayed in a grid layout
- On desktop: 2 events per row
- On mobile: 1 event per row (stacked)
- Add as many events as you need!

### Event Order

- Events appear in the order you add them
- Put the soonest event first for best UX

### Removing Past Events

- Simply delete the event object from the array
- Or comment it out with `//` if you want to keep it for reference

### Ticket Links (Internal or External)

- **Internal links** (pages on your site):
  ```typescript
  ticketLink: "/program",  // Opens in same tab
  ```
- **External links** (ticketing sites, etc.):
  ```typescript
  ticketLink: "https://www.eventbrite.com/your-event",  // Opens in new tab
  ticketLink: "https://www.ticketmaster.com/your-event",
  ticketLink: "https://givebutter.com/your-event",
  ```
- The component automatically detects external links (starting with `http`) and opens them in a new tab!

## Example: Multiple Events

```typescript
export const upcomingEvents: Event[] = [
  {
    id: "may-2025-concert",
    title: "Spring Concert 2025",
    date: "May 8, 2025",
    time: "7:30 PM",
    venue: "Webster Grove High School",
    address: "100 Selma Ave",
    city: "Webster Groves",
    state: "MO",
    zip: "63119",
    description: "Join us for an evening of epic video game music!",
    ticketLink: "/program",
  },
  {
    id: "summer-2025-concert",
    title: "Summer Concert 2025",
    date: "August 15, 2025",
    time: "7:00 PM",
    venue: "The Pageant",
    address: "6161 Delmar Blvd",
    city: "St. Louis",
    state: "MO",
    zip: "63112",
    description: "Summer spectacular featuring Nintendo classics!",
    ticketLink: "/program",
  },
  {
    id: "fall-2025-concert",
    title: "Fall Concert 2025",
    date: "November 20, 2025",
    time: "7:30 PM",
    venue: "Touhill Performing Arts Center",
    address: "6363 Forsyth Blvd",
    city: "St. Louis",
    state: "MO",
    zip: "63105",
    description: "Epic orchestral arrangements from Final Fantasy!",
    ticketLink: "https://www.eventbrite.com/your-event",
  },
];
```

## No Events?

If you remove all events from the array, the entire "Upcoming Events" section will automatically hide from the homepage. Perfect for off-season!

```typescript
export const upcomingEvents: Event[] = [
  // No events - section won't display
];
```

---

**Questions?** The events component is located at `src/app/_components/upcoming-events.tsx` if you need to customize the design.
