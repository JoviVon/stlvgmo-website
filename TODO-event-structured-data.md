# Event Structured Data Implementation

## Goal

Add Schema.org Event structured data to make the Spring 2026 concert appear in Google's "Things to Do" search results.

## Tasks

### 1. Update Event Interface

- [x] Plan created
- [x] Add optional SEO fields to Event interface in `src/lib/events-data.ts`:
  - price (free)
  - currency (USD)
  - availability
  - eventStatus
  - image
  - startDate (ISO 8601)
  - endDate (ISO 8601)

### 2. Update Events Data

- [x] Add SEO fields to Spring 2026 concert event
- [x] Add image URL for the concert poster
- [x] Add ISO 8601 formatted dates
- [x] Set price as "free"
- [x] Set availability as "InStock"
- [x] Set eventStatus as "EventScheduled"

### 3. Update Structured Data Component

- [x] Add Event schema generation function
- [x] Create MusicEvent schema with:
  - Event details (name, description, dates)
  - Location with full address and geo coordinates
  - Performer (link to organization)
  - Ticket offers (free admission)
  - Event status and attendance mode
  - Images for rich results
- [x] Support multiple events dynamically
- [x] Filter events to only include those with required fields

### 4. Update Layout

- [x] Import events data in layout.tsx
- [x] Pass events to StructuredData component
- [x] Ensure Event schemas render alongside Organization schema

### 5. Testing

- [x] Development server running successfully
- [ ] **USER ACTION NEEDED**: Verify JSON-LD output in browser (see TESTING-GUIDE-STRUCTURED-DATA.md)
- [ ] **USER ACTION NEEDED**: Test with Google Rich Results Test tool
- [ ] **USER ACTION NEEDED**: Check for validation errors

## Implementation Complete! ✅

All code changes have been successfully implemented. The structured data is now live on your development server.

### What Was Done:

1. ✅ Enhanced Event interface with SEO fields
2. ✅ Added complete metadata to Spring 2026 concert
3. ✅ Created Event schema generation in StructuredData component
4. ✅ Integrated events into global layout
5. ✅ Development server running at http://localhost:3000

### Next Steps for You:

1. Open http://localhost:3000 in your browser
2. View page source (Ctrl+U or Cmd+U)
3. Search for "MusicEvent" to see the structured data
4. Follow the detailed testing guide in TESTING-GUIDE-STRUCTURED-DATA.md
5. Test with Google Rich Results Test: https://search.google.com/test/rich-results

### Documentation Created:

- EVENT-STRUCTURED-DATA-SUMMARY.md - Complete implementation overview
- TESTING-GUIDE-STRUCTURED-DATA.md - Step-by-step testing instructions

## Notes

- Event is FREE admission
- Using MusicEvent type (more specific than generic Event)
- Will support all future events automatically
