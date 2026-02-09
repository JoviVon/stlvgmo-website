# Event Structured Data Implementation Summary

## Overview

Successfully implemented Schema.org Event structured data (JSON-LD) to make the Spring 2026 concert discoverable in Google search results, particularly for "things to do" queries.

## What Was Implemented

### 1. Enhanced Event Data Model

**File**: `src/lib/events-data.ts`

Added SEO-focused fields to the Event interface:

- `image`: Event poster/image URL
- `price`: Ticket price (supports "free" or numeric values)
- `currency`: Currency code (USD)
- `availability`: Ticket availability status (InStock, SoldOut, PreOrder)
- `eventStatus`: Event status (EventScheduled, EventCancelled, EventPostponed, EventRescheduled)
- `startDate`: ISO 8601 formatted start date/time
- `endDate`: ISO 8601 formatted end date/time

### 2. Spring 2026 Concert Data

Updated the Spring concert with complete SEO metadata:

```typescript
{
  id: "spring-2026-concert",
  title: "Spring Concert: From Hollow to Grace",
  date: "Friday May 8, 2026",
  time: "7:30 PM",
  venue: "Webster Grove High School",
  address: "100 Selma Ave",
  city: "Webster Groves",
  state: "MO",
  zip: "63119",
  description: "Join us for an evening of epic video game music...",
  ticketLink: "https://givebutter.com/mY39pq",
  // SEO fields
  image: "/assets/STLVGMO_poster_Spring2026_24Jan.png",
  price: "free",
  currency: "USD",
  availability: "InStock",
  eventStatus: "EventScheduled",
  startDate: "2026-05-08T19:30:00-05:00",
  endDate: "2026-05-08T21:30:00-05:00",
}
```

### 3. Event Schema Generation

**File**: `src/app/_components/structured-data.tsx`

Added dynamic Event schema generation that creates Schema.org MusicEvent markup for each event:

**Key Features**:

- Uses `@type: "MusicEvent"` (more specific than generic Event)
- Includes complete location data with geo coordinates
- Links to organization as both organizer and performer
- Includes ticket offer information (free admission)
- Supports multiple event images
- Filters to only include events with required fields
- Automatically generates schemas for all upcoming events

**Schema Structure**:

```json
{
  "@context": "https://schema.org",
  "@type": "MusicEvent",
  "name": "Spring Concert: From Hollow to Grace",
  "description": "...",
  "startDate": "2026-05-08T19:30:00-05:00",
  "endDate": "2026-05-08T21:30:00-05:00",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "Webster Grove High School",
    "address": { ... },
    "geo": { ... }
  },
  "organizer": { ... },
  "performer": { ... },
  "image": [ ... ],
  "offers": {
    "@type": "Offer",
    "url": "https://givebutter.com/mY39pq",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
}
```

### 4. Global Integration

**File**: `src/app/layout.tsx`

Integrated event schemas into the site's global layout:

- Imported `upcomingEvents` from events-data
- Passed events to `StructuredData` component
- Event schemas now render on every page alongside Organization and Website schemas

## Benefits

### SEO & Discoverability

1. **Google Search Integration**: Events will appear in Google's event search results
2. **Rich Snippets**: Enhanced search results with date, location, and ticket info
3. **Local SEO**: Improved visibility for "things to do in St. Louis" searches
4. **Event Discovery**: Shows up in Google's event aggregation features

### User Experience

1. **Quick Information**: Users see event details directly in search results
2. **Easy Access**: Direct link to ticket purchase from search results
3. **Calendar Integration**: Users can add events to their calendar from search results

### Technical Benefits

1. **Scalable**: Automatically generates schemas for all future events
2. **Maintainable**: Single source of truth in events-data.ts
3. **Standards Compliant**: Uses official Schema.org vocabulary
4. **Flexible**: Supports various event types and configurations

## How It Works

1. **Data Source**: Events are defined in `src/lib/events-data.ts`
2. **Schema Generation**: `StructuredData` component converts event data to JSON-LD
3. **Global Rendering**: Schemas are injected into `<head>` via `layout.tsx`
4. **Google Indexing**: Google crawlers discover and index the structured data
5. **Search Results**: Events appear in Google search with rich snippets

## Testing & Validation

### Next Steps for Testing:

1. **View Source**: Check browser's page source for JSON-LD scripts
2. **Google Rich Results Test**: https://search.google.com/test/rich-results
3. **Schema Validator**: https://validator.schema.org/
4. **Google Search Console**: Monitor event rich results performance

### Expected Output in HTML:

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "MusicEvent",
    ...
  }
</script>
```

## Future Enhancements

### Easy to Add:

1. **More Events**: Simply add new events to `events-data.ts` with SEO fields
2. **Event Updates**: Update event status (cancelled, postponed, etc.)
3. **Pricing Changes**: Modify price if events become paid
4. **Multiple Performers**: Add guest performers to schema

### Potential Additions:

1. **Review Schema**: Add audience reviews and ratings
2. **Video Schema**: Link to promotional videos
3. **FAQ Schema**: Add frequently asked questions
4. **Breadcrumb Schema**: Improve navigation in search results

## Files Modified

1. ✅ `src/lib/events-data.ts` - Enhanced Event interface and data
2. ✅ `src/app/_components/structured-data.tsx` - Added Event schema generation
3. ✅ `src/app/layout.tsx` - Integrated events into global layout
4. ✅ `TODO-event-structured-data.md` - Implementation tracking
5. ✅ `EVENT-STRUCTURED-DATA-SUMMARY.md` - This documentation

## Maintenance

### Adding New Events:

```typescript
{
  id: "new-event-id",
  title: "Event Title",
  date: "Date String",
  time: "Time String",
  venue: "Venue Name",
  address: "Street Address",
  city: "City",
  state: "State",
  zip: "Zip",
  description: "Event description",
  ticketLink: "https://...",
  // SEO fields (optional but recommended)
  image: "/assets/event-poster.png",
  price: "free", // or numeric value
  currency: "USD",
  availability: "InStock",
  eventStatus: "EventScheduled",
  startDate: "2026-MM-DDTHH:MM:SS-05:00",
  endDate: "2026-MM-DDTHH:MM:SS-05:00",
}
```

### Updating Event Status:

- Change `eventStatus` to "EventCancelled", "EventPostponed", or "EventRescheduled"
- Update `availability` to "SoldOut" when tickets are gone
- Modify dates if event is rescheduled

## Resources

- [Schema.org Event Documentation](https://schema.org/Event)
- [Schema.org MusicEvent Documentation](https://schema.org/MusicEvent)
- [Google Event Rich Results Guide](https://developers.google.com/search/docs/appearance/structured-data/event)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

## Success Metrics

Monitor these in Google Search Console:

- Event rich results impressions
- Click-through rate from event listings
- "Things to do" query appearances
- Local search visibility improvements

---

**Implementation Date**: January 2025  
**Status**: ✅ Complete - Ready for Testing
