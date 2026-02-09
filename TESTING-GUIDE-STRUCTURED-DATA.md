# Testing Guide: Event Structured Data

## Quick Verification Steps

### 1. View Page Source (Easiest Method)

1. Open your website: http://localhost:3000
2. Right-click anywhere on the page
3. Select "View Page Source" (or press Ctrl+U / Cmd+U)
4. Search for `"@type": "MusicEvent"` (Ctrl+F / Cmd+F)
5. You should see a JSON-LD script block with your event data

**Expected Output:**

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "MusicEvent",
    "name": "Spring Concert: From Hollow to Grace",
    "description": "Join us for an evening of epic video game music...",
    "startDate": "2026-05-08T19:30:00-05:00",
    "endDate": "2026-05-08T21:30:00-05:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Webster Grove High School",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "100 Selma Ave",
        "addressLocality": "Webster Groves",
        "addressRegion": "MO",
        "postalCode": "63119",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "38.5897",
        "longitude": "-90.3547"
      }
    },
    "organizer": {
      "@type": "PerformingGroup",
      "name": "St. Louis Video Game Music Orchestra",
      "url": "https://stlvgmo.com"
    },
    "performer": {
      "@type": "PerformingGroup",
      "name": "St. Louis Video Game Music Orchestra",
      "url": "https://stlvgmo.com"
    },
    "image": [
      "https://stlvgmo.com/assets/STLVGMO_poster_Spring2026_24Jan.png",
      "https://stlvgmo.com/assets/blog/logos/STLVGMO_wordmark.svg"
    ],
    "offers": {
      "@type": "Offer",
      "url": "https://givebutter.com/mY39pq",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2025-01-..."
    }
  }
</script>
```

### 2. Browser DevTools (Developer Method)

1. Open http://localhost:3000
2. Press F12 (or right-click → Inspect)
3. Go to the "Elements" or "Inspector" tab
4. Press Ctrl+F / Cmd+F to search
5. Search for `MusicEvent`
6. Expand the `<script type="application/ld+json">` tag to view the full JSON

### 3. Google Rich Results Test (Official Validation)

**IMPORTANT**: This is the official Google tool to verify your structured data!

1. Go to: https://search.google.com/test/rich-results
2. Enter your website URL: `https://stlvgmo.com` (when deployed)
   - For local testing, you can copy the page source and paste it
3. Click "Test URL" or "Test Code"
4. Google will analyze and show:
   - ✅ Valid Event markup detected
   - Preview of how it will appear in search results
   - Any errors or warnings

**Expected Result:**

- "Event" detected
- Green checkmark for valid markup
- Preview showing event details

### 4. Schema.org Validator (Technical Validation)

1. Go to: https://validator.schema.org/
2. Paste your page URL or HTML source
3. Click "Run Test"
4. Should show no errors for the Event schema

### 5. Google Search Console (Production Monitoring)

**After deploying to production:**

1. Go to: https://search.google.com/search-console
2. Add your property (stlvgmo.com)
3. Navigate to "Enhancements" → "Events"
4. Monitor:
   - Valid events detected
   - Errors or warnings
   - Impressions and clicks from event listings

## What to Look For

### ✅ Success Indicators:

- JSON-LD script tags present in page source
- `@type: "MusicEvent"` is present
- All required fields populated:
  - name
  - startDate
  - location (with address and geo)
  - organizer/performer
- Offers section shows price: "0" (free)
- Event status is "EventScheduled"
- Images array includes event poster

### ❌ Common Issues to Check:

- Missing JSON-LD script tags → Check if events have `startDate` and `eventStatus`
- Invalid date format → Should be ISO 8601 (YYYY-MM-DDTHH:MM:SS±HH:MM)
- Missing required fields → Ensure all Event interface fields are filled
- Broken image URLs → Verify image paths are correct

## Testing Checklist

- [ ] Page loads without errors (check browser console)
- [ ] View page source shows JSON-LD script tags
- [ ] MusicEvent schema is present
- [ ] All event details are correct (date, time, location)
- [ ] Price shows as "0" (free admission)
- [ ] Ticket link is correct
- [ ] Event poster image URL is valid
- [ ] No JavaScript errors in console
- [ ] Google Rich Results Test passes
- [ ] Schema.org validator shows no errors

## How to Test Different Scenarios

### Test 1: Free Event (Current)

✅ Already configured - Spring 2026 concert is free

### Test 2: Paid Event

Update in `src/lib/events-data.ts`:

```typescript
price: 25, // $25 tickets
currency: "USD",
```

### Test 3: Sold Out Event

Update in `src/lib/events-data.ts`:

```typescript
availability: "SoldOut",
```

### Test 4: Cancelled Event

Update in `src/lib/events-data.ts`:

```typescript
eventStatus: "EventCancelled",
```

## Troubleshooting

### Issue: No JSON-LD scripts in page source

**Solution**: Check that:

1. Events have `startDate` and `eventStatus` fields
2. `upcomingEvents` is imported in `layout.tsx`
3. `StructuredData` component receives events prop

### Issue: Invalid date format error

**Solution**: Ensure dates are in ISO 8601 format:

```typescript
startDate: "2026-05-08T19:30:00-05:00";
```

### Issue: Images not loading

**Solution**:

1. Verify image exists in `/public/assets/`
2. Check image path starts with `/assets/` (not `/public/assets/`)
3. Ensure full URL is constructed: `https://stlvgmo.com${event.image}`

### Issue: Event not showing in Google

**Solution**:

1. Wait 24-48 hours after deployment for Google to crawl
2. Submit sitemap to Google Search Console
3. Use "Request Indexing" in Search Console
4. Verify robots.txt allows crawling

## Next Steps After Testing

1. ✅ Verify locally (view source)
2. ✅ Test with Google Rich Results Test
3. 🚀 Deploy to production
4. 📊 Submit to Google Search Console
5. ⏰ Wait for Google to index (24-48 hours)
6. 📈 Monitor performance in Search Console
7. 🎉 Watch your event appear in "things to do" searches!

## Resources

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- [Google Event Guidelines](https://developers.google.com/search/docs/appearance/structured-data/event)
- [Schema.org Event Docs](https://schema.org/Event)
- [Schema.org MusicEvent Docs](https://schema.org/MusicEvent)

---

**Pro Tip**: Bookmark the Google Rich Results Test tool and test your events every time you add a new one!
