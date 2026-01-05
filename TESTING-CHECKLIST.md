# Testing Checklist for Website Improvements

## 🧪 Manual Testing Guide

The development server is running at: **http://localhost:3000**

Please test the following improvements:

---

## ✅ High Priority Tests

### 1. SEO & Metadata

**What to test:**

- [ ] View page source (Ctrl+U) and verify meta tags are present
- [ ] Check for `<meta name="description">` with proper content
- [ ] Verify Open Graph tags (`og:title`, `og:description`, `og:image`)
- [ ] Check for Twitter Card tags
- [ ] Look for JSON-LD structured data scripts in `<head>`

**How to verify:**

1. Open http://localhost:3000
2. Right-click → "View Page Source"
3. Search for "description" - should see full description
4. Search for "og:" - should see Open Graph tags
5. Search for "application/ld+json" - should see structured data

**Expected Results:**

- Meta description: "St. Louis Video Game Music Orchestra brings epic video game soundtracks to life..."
- Open Graph tags present with proper title, description, and image
- Structured data for Organization and WebSite

---

### 2. Accessibility Features

**What to test:**

- [ ] Skip-to-content link appears on Tab key press
- [ ] All images have descriptive alt text
- [ ] ARIA labels on interactive elements
- [ ] Keyboard navigation works throughout site
- [ ] Screen reader compatibility

**How to verify:**

1. **Skip Link Test:**

   - Open http://localhost:3000
   - Press Tab key once
   - Should see "Skip to main content" link appear at top
   - Press Enter - should jump to main content

2. **Alt Text Test:**

   - Right-click on logo image → Inspect
   - Verify alt attribute: "St. Louis Video Game Music Orchestra - STLVGMO Logo"

3. **ARIA Labels Test:**

   - Inspect header navigation
   - Verify `role="banner"` on header
   - Verify `aria-label="Main navigation"` on nav
   - Verify `aria-label` on search inputs and buttons

4. **Keyboard Navigation:**
   - Use Tab key to navigate through all links and buttons
   - Verify focus indicators are visible
   - Test mobile menu with keyboard (Tab + Enter)

**Expected Results:**

- Skip link visible on focus
- All images have meaningful alt text
- All interactive elements accessible via keyboard
- Clear focus indicators on all focusable elements

---

### 3. Mobile Experience

**What to test:**

- [ ] Logo size appropriate on mobile
- [ ] PDF viewer mobile experience improved
- [ ] Touch targets are adequate size (44x44px minimum)
- [ ] Mobile menu works properly

**How to verify:**

1. **Logo Size Test:**

   - Open http://localhost:3000
   - Open DevTools (F12)
   - Toggle device toolbar (Ctrl+Shift+M)
   - Select "iPhone 12 Pro" or similar
   - Verify logo is reasonable size (not huge)
   - Should be smaller on mobile, larger on desktop

2. **PDF Viewer Test:**

   - Navigate to http://localhost:3000/program
   - On mobile view, should see two buttons:
     - "Download PDF" (blue/primary color)
     - "Open in Tab" (gray)
   - Both should have icons
   - Buttons should be touch-friendly

3. **Mobile Menu Test:**
   - On mobile view, click hamburger menu
   - Menu should open smoothly
   - All links should be visible
   - Search bar should be present
   - Click link - menu should close

**Expected Results:**

- Logo: h-32 on mobile, h-48 on tablet, h-64 on desktop
- Program page has improved mobile UI with clear options
- All buttons are easily tappable
- Mobile menu functions correctly

---

### 4. Custom 404 Page

**What to test:**

- [ ] 404 page displays correctly
- [ ] Navigation links work
- [ ] Design matches site theme

**How to verify:**

1. Navigate to http://localhost:3000/nonexistent-page
2. Should see custom 404 page with:
   - Large "404" heading
   - "Page Not Found" message
   - Gaming-themed message
   - "Return Home" button
   - "Contact Us" button
   - Quick links at bottom

**Expected Results:**

- Custom 404 page displays (not default Next.js 404)
- All buttons and links work
- Page matches dark theme
- Helpful navigation options provided

---

## 🔍 SEO Validation Tests

### Test with Online Tools:

1. **Open Graph Preview:**

   - Visit: https://www.opengraph.xyz/
   - Enter: http://localhost:3000 (or your deployed URL)
   - Verify preview looks correct

2. **Structured Data Test:**

   - Visit: https://validator.schema.org/
   - Enter your page URL
   - Verify Organization and WebSite schemas are valid

3. **Meta Tags Checker:**
   - Visit: https://metatags.io/
   - Enter your page URL
   - Verify all meta tags are present

---

## 📱 Responsive Design Tests

### Breakpoints to Test:

- [ ] Mobile (375px) - iPhone SE
- [ ] Mobile (390px) - iPhone 12/13/14
- [ ] Tablet (768px) - iPad
- [ ] Desktop (1024px) - Laptop
- [ ] Large Desktop (1440px+) - Desktop

**Pages to Test:**

- [ ] Homepage (/)
- [ ] About (/about)
- [ ] Posts (/posts)
- [ ] Gallery (/gallery)
- [ ] Program (/program)
- [ ] Contact (/contact)
- [ ] Donate (/donate)
- [ ] 404 (/nonexistent)

---

## ♿ Accessibility Testing Tools

### Automated Testing:

1. **Lighthouse Audit:**

   - Open DevTools (F12)
   - Go to "Lighthouse" tab
   - Select "Accessibility" category
   - Run audit
   - **Target Score: 95+**

2. **WAVE Browser Extension:**

   - Install: https://wave.webaim.org/extension/
   - Run on each page
   - Check for errors and warnings
   - **Target: 0 errors**

3. **axe DevTools:**
   - Install: https://www.deque.com/axe/devtools/
   - Run automated scan
   - Fix any issues found

### Manual Accessibility Tests:

1. **Keyboard Navigation:**

   - Navigate entire site using only keyboard
   - Tab through all interactive elements
   - Verify focus is always visible
   - Test Escape key on modals

2. **Screen Reader Test:**
   - Windows: Enable Narrator (Win+Ctrl+Enter)
   - Mac: Enable VoiceOver (Cmd+F5)
   - Navigate through homepage
   - Verify all content is announced properly

---

## 🎨 Visual Regression Tests

### Things to Verify:

- [ ] Dark theme still works correctly
- [ ] Colors match brand guidelines
- [ ] Spacing is consistent
- [ ] Typography is readable
- [ ] Images load properly
- [ ] Icons display correctly
- [ ] Hover states work
- [ ] Active states work
- [ ] Focus states are visible

---

## 🚀 Performance Tests

### Metrics to Check:

1. **Page Load Speed:**

   - Open DevTools → Network tab
   - Reload page
   - Check "Load" time
   - **Target: < 3 seconds**

2. **Lighthouse Performance:**

   - Run Lighthouse audit
   - Check Performance score
   - **Target: 90+**

3. **Core Web Vitals:**
   - LCP (Largest Contentful Paint): < 2.5s
   - FID (First Input Delay): < 100ms
   - CLS (Cumulative Layout Shift): < 0.1

---

## 📋 Functional Tests

### Homepage:

- [ ] Logo links to homepage
- [ ] Navigation menu works
- [ ] Search functionality works
- [ ] Gallery carousel auto-cycles
- [ ] Recent posts display
- [ ] All links work

### Navigation:

- [ ] All menu items clickable
- [ ] Mobile menu opens/closes
- [ ] Search bar functional
- [ ] External links open in new tab
- [ ] Active page highlighted (if implemented)

### Forms:

- [ ] Contact form validation works
- [ ] Error messages display
- [ ] Success message shows
- [ ] Email sends successfully
- [ ] Form clears after submission

### Gallery:

- [ ] Images load properly
- [ ] Carousel navigation works
- [ ] Modal opens on click
- [ ] Modal navigation works
- [ ] Keyboard navigation in modal
- [ ] Escape closes modal

---

## 🔐 Security Tests

### Basic Security Checks:

- [ ] No console errors
- [ ] No exposed API keys in source
- [ ] External links have `rel="noopener noreferrer"`
- [ ] Forms have CSRF protection (if applicable)
- [ ] No mixed content warnings (HTTP/HTTPS)

---

## 📊 Test Results Template

```
Date: ___________
Tester: ___________

HIGH PRIORITY TESTS:
✅ SEO & Metadata: PASS / FAIL
✅ Accessibility: PASS / FAIL
✅ Mobile Experience: PASS / FAIL
✅ Custom 404 Page: PASS / FAIL

SCORES:
- Lighthouse Accessibility: ___/100
- Lighthouse Performance: ___/100
- Lighthouse SEO: ___/100
- WAVE Errors: ___

ISSUES FOUND:
1. ___________
2. ___________
3. ___________

NOTES:
___________
```

---

## 🎯 Quick Test (5 minutes)

If you're short on time, test these critical items:

1. ✅ Homepage loads without errors
2. ✅ Press Tab - skip link appears
3. ✅ View source - meta description present
4. ✅ Mobile view - logo is reasonable size
5. ✅ Visit /nonexistent - custom 404 shows
6. ✅ Navigate to /program - mobile buttons present
7. ✅ Run Lighthouse - accessibility score 90+
8. ✅ Test mobile menu - opens and closes

---

## 📝 Notes

- Test in multiple browsers (Chrome, Firefox, Safari, Edge)
- Test on actual mobile devices if possible
- Clear cache between tests
- Test with slow network (DevTools → Network → Slow 3G)
- Test with JavaScript disabled (rare but good to check)

---

**Ready to Test?** Open http://localhost:3000 and start checking items off the list!
