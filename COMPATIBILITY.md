# Browser Compatibility & Responsive Design Guidelines

## Supported Devices & Breakpoints
- **Mobile:** 320px - 480px (Vertical Stack, Touch Optimized)
- **Tablet:** 481px - 1024px (Hybrid Layout, Touch/Mouse)
- **Desktop:** 1025px+ (Horizontal Layout, Mouse Hover Effects)

## Browser Support Strategy

### Google Chrome (Blink Engine)
- **Status:** Fully Supported
- **Notes:** Best performance for CSS filters (`backdrop-blur`, `grayscale`).
- **Optimization:** Use `will-change` property sparingly for heavy animations.

### Mozilla Firefox (Gecko Engine)
- **Status:** Fully Supported
- **Potential Issues:**
  - Custom scrollbars (`::-webkit-scrollbar`) are not supported standardly. We rely on Firefox's `scrollbar-width` and `scrollbar-color` properties if needed, or accept native scrollbars.
  - `backdrop-blur` performance can be lower on older hardware.
- **Solution:** Ensure fallback solid backgrounds or sufficiently opaque backgrounds if `backdrop-filter` fails or is slow.

### Safari (WebKit - iOS & macOS)
- **Status:** Supported with considerations
- **Key Issues:**
  - **100vh Bug on iOS:** Mobile Safari address bar shifts layout.
    - *Fix:* Use `min-h-screen` or `dvh` (dynamic viewport height) units where possible, or JavaScript window resize listener.
  - **Flexbox Gap:** Older Safari versions (<14.1) have partial support for generic flex gap.
    - *Fix:* Use transparent borders or margins if supporting very old versions, though current tailwind setup assumes modern support.
  - **3D Transforms:** `perspective` and `backface-visibility` quirks.
    - *Fix:* Ensure `transform-style: preserve-3d` is applied explicitly on parents.
  - **Image Aspect Ratio:** `aspect-ratio` property is modern.
    - *Fallback:* Use padding-bottom hack if support for Safari < 15 is strictly required (not currently implemented as we target modern web).

### Microsoft Edge
- **Status:** Fully Supported (Chromium based)

## Changes Implemented for Responsiveness

1.  **Navigation:**
    - Switched to a slide-down Hamburger menu for screens smaller than `1024px` (`lg` breakpoint).
    - Adjusted padding to `px-6` on mobile.

2.  **Typography & Layout:**
    - Implemented fluid typography: `text-4xl` mobile -> `text-9xl` desktop for Hero.
    - Reduced section vertical padding (`py-16` instead of `py-24` on mobile).
    - Switched Flex directions from `row` to `col` on mobile for Narrative and Footer sections.
    - Used `grid-cols-1` for mobile grids, scaling up to 2 and 4.

3.  **Components:**
    - **Reviews:** Changed fixed `min-w-[350px]` to `min-w-[85vw]` on mobile to prevent layout breakage on small screens (320px).
    - **Delivery Map:** Repositioned the status card overlay to the bottom for mobile to avoid obscuring the map view.
    - **Search Bar:** Made full width on mobile.

## Performance & Accessibility

- **Images:** Ensure `alt` text is present (Validated).
- **Reduced Motion:** Animations use standard Framer Motion props. For strict accessibility, consider respecting `prefers-reduced-motion` media query to disable heavy parallax/scroll effects.
- **Touch Targets:** Buttons and interactive elements sized >44px on mobile.
