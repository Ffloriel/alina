export const principleCards = [
  {
    name: 'Clear',
    summary: 'Every element serves a purpose. Interfaces should be immediately understandable, with no extra decoration competing with the job to be done.',
    doList: [
      'Use plain language, obvious hierarchy, and consistent patterns.',
      'Validate layout, color, and language choices with research and real usage.',
      'Favor the simplest solution that fully meets the need.',
    ],
    dontList: [
      'Hide actions behind ambiguous icons.',
      'Add ornamentation that does not improve meaning or flow.',
      'Introduce complexity “just in case.”',
    ],
  },
  {
    name: 'Human',
    summary: 'Design begins with empathy. Accessibility, emotional context, and respectful language are baseline requirements, not finishing touches.',
    doList: [
      'Design for the widest possible audience, including people with disabilities.',
      'Use warm, respectful, and honest language.',
      'Account for the reader’s attention, context, and emotional state.',
    ],
    dontList: [
      'Assume context or cultural familiarity.',
      'Rely on dark patterns or manipulative urgency.',
      'Treat accessibility as a later hardening pass.',
    ],
  },
  {
    name: 'Purposeful',
    summary: 'Every component, interaction, and content block earns its place by solving a real problem and creating usable space around the answer.',
    doList: [
      'Ship only what solves a real problem.',
      'Prefer familiar patterns over novelty.',
      'Use whitespace to make choices and content easier to parse.',
      'On non-marketing pages, keep only sections that directly help complete the task.',
    ],
    dontList: [
      'Over-engineer components or states.',
      'Add “complete-looking” features that are not useful.',
      'Crowd pages with too many parallel priorities.',
      'Turn utility pages into selling pitches with filler hero copy or support sections.',
    ],
  },
] as const

export const principleTable = [
  ['Clear', 'Use plain language, obvious hierarchy, and consistent patterns.', 'Add decorative elements, hide actions behind ambiguous icons, or use jargon.'],
  ['Human', 'Design for all abilities, respect attention, and write with empathy.', 'Assume context, ignore edge cases, or use dark patterns.'],
  ['Purposeful', 'Include only what is necessary, give content room, and keep non-marketing pages task-first.', 'Over-engineer, add filler sections, or turn utility screens into pitches.'],
] as const

export const accentScale = [
  ['brand-50', '--color-brand-50', '#f5f8e8', 'Tinted surfaces and contextual help backgrounds'],
  ['brand-100', '--color-brand-100', '#eef2da', 'Selected and current-item surfaces'],
  ['brand-200', '--color-brand-200', '#dbe4b4', 'Selected surfaces in dark mode and badge fills'],
  ['brand-300', '--color-brand-300', '#c4d38c', 'Selected rings and accent text in dark mode'],
  ['brand-400', '--color-brand-400', '#b9c86f', 'Primary brand fill for buttons and checked controls'],
  ['brand-500', '--color-brand-500', '#9cab56', 'Borders on brand fills'],
  ['brand-600', '--color-brand-600', '#8b9a48', 'Progress fills and drag-over borders'],
  ['brand-700', '--color-brand-700', '#5a6a2e', 'Icons on brand surfaces'],
  ['brand-800', '--color-brand-800', '#4f5f24', 'Secondary text on brand surfaces'],
  ['brand-900', '--color-brand-900', '#334019', 'Primary text on brand surfaces'],
  ['brand-950', '--color-brand-950', '#1b2110', 'Brand surfaces in dark mode and checked indicators'],
] as const

export const neutralScale = [
  ['white', '--color-white', '#ffffff', 'Page background in light mode'],
  ['zinc-50', '--color-zinc-50', '#fafafa', 'Alternate sections and subtle surfaces'],
  ['zinc-100', '--color-zinc-100', '#f4f4f5', 'Cards and hover surfaces'],
  ['zinc-200', '--color-zinc-200', '#e4e4e7', 'Default borders and dividers'],
  ['zinc-300', '--color-zinc-300', '#d4d4d8', 'Decorative borders and disabled accents'],
  ['zinc-400', '--color-zinc-400', '#9f9fa9', 'Secondary text in dark mode'],
  ['zinc-500', '--color-zinc-500', '#71717b', 'Secondary text, placeholders, and icons'],
  ['zinc-600', '--color-zinc-600', '#52525c', 'Body text'],
  ['zinc-700', '--color-zinc-700', '#3f3f46', 'Primary body emphasis'],
  ['zinc-800', '--color-zinc-800', '#27272a', 'Default borders in dark mode'],
  ['zinc-900', '--color-zinc-900', '#18181b', 'Dark buttons and dark-mode surfaces'],
  ['zinc-950', '--color-zinc-950', '#09090b', 'Primary text and high-emphasis surfaces'],
] as const

export const semanticColors = [
  ['Positive', 'positive-500 (emerald)', '#00bc7d', 'Success states, confirmations, checkmarks'],
  ['Negative', 'negative-500 (red)', '#fb2c36', 'Errors, invalid fields, destructive feedback'],
  ['Notice', 'notice-500 (amber)', '#fe9a00', 'Caution and attention states'],
  ['Informative', 'informative-500 (blue)', '#2b7fff', 'Informational banners and highlights'],
] as const

export const tierColors = [
  ['Budget', 'bg-emerald-50 text-emerald-700', 'bg-emerald-950 text-emerald-300'],
  ['Smart value', 'bg-blue-50 text-blue-700', 'bg-blue-950 text-blue-300'],
  ['Premium', 'bg-purple-50 text-purple-700', 'bg-purple-950 text-purple-300'],
] as const

export const typeScale = [
  ['text-xs', '12px / 0.75rem', 'Captions, labels, metadata'],
  ['text-sm', '14px / 0.875rem', 'Secondary text and compact body'],
  ['text-base', '16px / 1rem', 'Default body copy'],
  ['text-lg', '18px / 1.125rem', 'Card titles and sub-headings'],
  ['text-xl', '20px / 1.25rem', 'Section titles and prominent prices'],
  ['text-2xl', '24px / 1.5rem', 'Page sub-headings'],
  ['text-3xl', '30px / 1.875rem', 'Page headings'],
  ['text-4xl', '36px / 2.25rem', 'Desktop page headings'],
  ['text-5xl', '48px / 3rem', 'Hero headings on mobile'],
  ['text-7xl', '72px / 4.5rem', 'Hero headings on tablet'],
  ['text-8xl', '96px / 6rem', 'Hero headings on desktop'],
] as const

export const fontWeights = [
  ['font-extralight', '200', 'Hero headings and large numerals'],
  ['font-light', '300', 'Default body weight'],
  ['font-normal', '400', 'General text and inputs'],
  ['font-medium', '500', 'Active nav items and tier labels'],
  ['font-semibold', '600', 'Card titles and section headings'],
  ['font-bold', '700', 'Reserved for extreme emphasis only'],
] as const

export const trackingScale = [
  ['tracking-tight', '-0.025em', 'Hero headings'],
  ['tracking-normal', '0', 'Body text'],
  ['tracking-wide', '0.025em', 'Sub-labels and copyright'],
  ['tracking-[0.1em]', '0.1em', 'Buttons and preference options'],
  ['tracking-[0.15em]', '0.15em', 'Navigation items and section labels'],
  ['tracking-[0.2em]', '0.2em', 'Section headings'],
  ['tracking-[0.3em]', '0.3em', 'Brand wordmark'],
] as const

export const spacingScale = [
  ['p-2 / gap-2', '8px', 'Small internal spacing'],
  ['p-4 / gap-4', '16px', 'Default gaps and small card padding'],
  ['p-6 / gap-6', '24px', 'Default card padding and header/footer padding'],
  ['p-8 / gap-8', '32px', 'Section internal spacing'],
  ['p-12 / gap-12', '48px', 'Large card padding'],
  ['py-20', '80px', 'Content subsections'],
  ['py-24', '96px', 'Secondary sections'],
  ['py-32', '128px', 'Hero and major section spacing'],
] as const

export const breakpoints = [
  ['Default', '0px', 'Mobile phones'],
  ['sm', '640px', 'Large phones and small tablets'],
  ['md', '768px', 'Tablets'],
  ['lg', '1024px', 'Small laptops'],
  ['xl', '1280px', 'Desktops'],
  ['2xl', '1536px', 'Large desktops'],
] as const

export const semanticTokens = [
  ['--color-background', 'white', '#050505', 'Page background. Utility: bg-background'],
  ['--color-foreground', 'zinc-950', 'zinc-50', 'Default text. Utility: text-foreground'],
  ['--color-border', 'zinc-200', 'zinc-800', 'Border color of any element that does not set its own'],
  ['--color-focus', 'blue-500', 'blue-500', 'Focus rings. Utilities: outline-focus, ring-focus'],
  ['--color-brand-50 to 950', 'Olive scale', 'Same scale', 'Brand fills, selected states, and accent text'],
  ['--color-informative-50 to 950', 'blue', 'blue', 'Informative tone in banners, alerts, and toasts'],
  ['--color-positive-50 to 950', 'emerald', 'emerald', 'Positive tone and success feedback'],
  ['--color-notice-50 to 950', 'amber', 'amber', 'Notice tone and caution states'],
  ['--color-negative-50 to 950', 'red', 'red', 'Negative tone, invalid fields, and error messages'],
  ['--shadow-float', 'zinc-900 at 40%', 'black at 72%', 'Floating controls such as navbars, toasts, and tooltips'],
  ['--shadow-panel', 'zinc-900 at 40%', 'black at 72%', 'Large content panels'],
  ['--shadow-overlay', 'zinc-900 at 40%', 'black at 72%', 'Sheets and overlays above a backdrop'],
  ['--shadow-selected', 'brand-700 at 60%', 'black at 78%', 'Selected and current-item indicators'],
] as const

export const toneSpectrum = [
  ['Confident', 'Direct and assured', 'Product recommendations and “why we recommend”'],
  ['Helpful', 'Polite and supportive', 'Navigation, settings, and descriptions'],
  ['Instructive', 'Neutral and clear', 'Specs, care instructions, sizing'],
  ['Reassuring', 'Professional and calm', 'Errors and empty states'],
  ['Welcoming', 'Warm and open', 'Homepage, about page, first-time experiences'],
] as const

export const contentPrinciples = [
  {
    title: 'Lead with what matters',
    doText: 'Hand-forged in Solingen, Germany. Full tang construction.',
    dontText:
      'This product has been carefully manufactured using traditional methods passed down through generations.',
  },
  {
    title: 'Be specific, not general',
    doText: '3-layer stainless steel, 58 HRC hardness.',
    dontText: 'Made from high-quality materials.',
  },
  {
    title: 'One idea per sentence',
    doText: 'Budget-friendly and reliable. Built with materials that last 3+ years.',
    dontText:
      'This budget-friendly option is reliable and built with materials that last 3+ years, making it perfect for... ',
  },
  {
    title: 'Write for the scan',
    doText: 'Use headings, bullets, and front-loaded keywords.',
    dontText: 'Hide multiple key ideas in long paragraphs.',
  },
  {
    title: 'Explain, do not sell',
    doText: 'We recommend this because it scored highest in durability testing and costs 40% less than comparable options.',
    dontText: 'You will not believe how amazing this product is. Get yours before they sell out.',
  },
  {
    title: 'Utility pages stay task-first',
    doText: 'Calories to kilojoules. Enter calories and get the result immediately.',
    dontText: 'Unlock a better nutrition journey with our all-in-one calorie conversion experience.',
  },
] as const

export const grammarRules = [
  ['Voice', 'Prefer active voice. Use passive only when softening a message improves clarity.'],
  ['Contractions', 'Use common contractions in product and editorial copy, but avoid them in legal or payment contexts.'],
  ['Capitalization', 'Use sentence case for headings, labels, buttons, and navigation.'],
  ['Pronouns', 'Address people as “you” and default to singular they when gender is unknown or irrelevant.'],
  ['Punctuation', 'Use periods for full sentences, the Oxford comma, and no exclamation marks.'],
  ['Numbers', 'Spell out zero through nine in running text. Use numerals for 10+, prices, specs, and measurements.'],
  ['Lists', 'Bullets for equal-weight items, numbered lists for sequences, and no trailing periods unless items are full sentences.'],
] as const

export const inclusiveWriting = [
  'Use plain language and aim for an eighth-grade reading level.',
  'Avoid idioms, metaphors, and culture-specific references.',
  'Do not use gendered language unless it is specifically relevant.',
  'Write descriptive link text and meaningful alt text.',
  'Do not rely on color alone to communicate meaning.',
  'Write strings that localize cleanly across currencies, dates, and time formats.',
] as const

export const accessibilityChecklist = [
  ['Color contrast', 'Normal text must meet 4.5:1, large text 3:1, and UI components 3:1.'],
  ['Focus states', 'Every interactive element shows a 2px focus ring in the focus color, offset 2px so it separates from borders.'],
  ['Semantic HTML', 'Use real headings, landmarks, links for navigation, and buttons for actions.'],
  ['Keyboard support', 'Tab navigation, escape to close overlays, and arrow-key support inside galleries and selection controls.'],
  ['Screen reader support', 'Use aria-label, aria-labelledby, aria-live, and hide decorative content with aria-hidden.'],
  ['Reduced motion', 'Respect prefers-reduced-motion by minimizing transitions and animations to effectively zero.'],
] as const

export const responsivePatterns = [
  ['Category grid', '1 column', '2 columns', '2 columns'],
  ['Product comparison', '1 column', '1 column', '2 columns'],
  ['Footer', '1 column', '2 columns', '3 short-link columns + newsletter'],
  ['Content + sidebar', 'Stacked', 'Stacked', '2 + 1 columns'],
  ['Hero heading', 'text-5xl', 'text-7xl', 'text-8xl'],
] as const

export const componentCatalog = [
  {
    group: 'Actions and navigation',
    rationale: 'Primary and secondary actions use clear hierarchy, generous touch targets, and restrained motion.',
    items: ['button', 'badge', 'link', 'dropdown', 'navbar', 'pagination', 'sidebar', 'breadcrumbs'],
  },
  {
    group: 'Forms and selection',
    rationale: 'Controls follow one visual grammar for borders, spacing, focus rings, and validation states.',
    items: ['input', 'slider', 'textarea', 'select', 'checkbox', 'radio', 'segmented-control', 'selection-card', 'switch', 'combobox', 'listbox', 'fieldset', 'drop-zone'],
  },
  {
    group: 'Content and data',
    rationale: 'Reading surfaces emphasize hierarchy, scanning, and calm visual density.',
    items: ['heading', 'text', 'description-list', 'table', 'divider', 'avatar', 'avatar-group', 'progress-bar'],
  },
  {
    group: 'Feedback and overlays',
    rationale: 'Alerts, help, overlays, and transient messaging keep feedback explicit without overloading the page.',
    items: ['alert', 'dialog', 'alert-banner', 'contextual-help', 'inline-alert', 'loading-circle', 'toast', 'tooltip'],
  },
  {
    group: 'Application shells',
    rationale: 'Layouts keep navigation stable on working screens, while focused entry pages such as sign-in are documented as complete guide examples rather than reusable shells.',
    items: ['sidebar-layout', 'stacked-layout'],
  },
] as const

export const colorStateExamples = [
  ['Background', 'positive-50 at 90%', 'positive-950 at 35%'],
  ['Border', 'positive-200 at 80%', 'positive-900 at 50%'],
  ['Text', 'positive-950', 'positive-100'],
  ['Indicator', 'positive-500', 'positive-500'],
] as const

export const colorUsageRules = [
  ['Use semantic colors for status', 'Use positive-500 for a success checkmark.', 'Do not use the olive brand accent for success messaging.'],
  ['Use neutrals as the foundation', 'Use zinc-600 for body text and zinc-950 at 10% for borders.', 'Do not colorize structural copy or borders without a semantic reason.'],
  ['Maintain contrast ratios', 'Keep normal text at 4.5:1 and large text or UI components at 3:1 minimum.', 'Do not ship low-contrast combinations that rely on ideal displays.'],
] as const

export const darkModeSurfaceMap = [
  ['Page background', 'white (#ffffff)', '#050505'],
  ['Foreground text', 'zinc-950 (#09090b)', 'zinc-50 (#fafafa)'],
  ['Card background', 'white', 'zinc-900'],
  ['Primary border', 'zinc-950 at 10%', 'white at 10%'],
  ['Subtle border', 'zinc-950 at 5%', 'white at 5%'],
  ['Accent surface', 'brand-100', 'brand-900 at 70%'],
] as const

export const typefaceRoles = [
  ['Geist', 'Primary headings, body, and UI', '--font-sans', 'system-ui, sans-serif'],
  ['Geist Mono', 'Code, data, and technical labels', '--font-mono', 'ui-monospace, SFMono-Regular, Menlo, monospace'],
  ['Instrument Serif', 'Editorial accents and expressive display moments', '--font-display', 'Georgia, serif'],
] as const

export const lineHeights = [
  ['Headings', '1.2x', 'leading-tight', 'All headings and display text'],
  ['Body', '1.6-1.75x', 'leading-relaxed', 'Paragraphs and descriptions'],
  ['UI components', '1.3x', 'leading-snug', 'Buttons, labels, and navigation'],
  ['Code', '1.5x', 'leading-normal', 'Code blocks and specs'],
] as const

export const textTransforms = [
  ['Uppercase', 'uppercase', 'Navigation, labels, section headings, buttons'],
  ['Normal case', '-', 'Body text, paragraphs, descriptions'],
] as const

export const typographyGuidelines = [
  'Use the type scale instead of inventing custom sizes.',
  'Maintain a clear hierarchy with one h1 and progressively supporting headings.',
  'Do not fully justify text.',
  'Keep paragraphs between 50 and 80 characters wide.',
  'Use underlines as the hover state for textual links, and reserve that treatment for links.',
  'Favor light weights over bold by default.',
  'Always pair uppercase with generous tracking.',
] as const

export const layoutWidths = [
  ['max-w-md', '448px', 'Centered text blocks and descriptions'],
  ['max-w-xl', '576px', 'Narrow content areas'],
  ['max-w-screen-xl', '1280px', 'Main content container'],
  ['max-w-screen-2xl', '1536px', 'Navigation and footer container'],
] as const

export const pagePadding = [
  ['Mobile', 'px-6', '24px horizontal padding'],
  ['Desktop', 'lg:px-12', '48px horizontal padding'],
] as const

export const gridPatterns = [
  ['1 column', 'grid-cols-1', 'Mobile default'],
  ['2 columns', 'grid-cols-1 md:grid-cols-2', 'Default for cards, comparisons, and paired content'],
  ['2 columns + rail', 'grid-cols-1 lg:grid-cols-[minmax(0,1fr)_20rem]', 'Narrative pages with a supporting aside'],
  ['2-up summaries', 'grid-cols-1 sm:grid-cols-2', 'Stats, highlights, and supporting metrics'],
] as const

export const gapPatterns = [
  ['Card grids', 'gap-4 md:gap-6', '16px to 24px'],
  ['Content sections', 'gap-16 lg:gap-24', '64px to 96px'],
  ['Inline items', 'gap-2 to gap-4', '8px to 16px'],
  ['Navigation items', 'gap-12', '48px'],
] as const

export const sectionSpacingPattern = [
  'Hero and major sections use py-32 (128px).',
  'Secondary sections use py-24 (96px).',
  'Content sub-sections use py-20 (80px).',
  'Internal heading-to-content spacing typically sits between mb-8 and mb-16.',
] as const

export const headerNavigationSpec = [
  ['Header height', 'h-20 (80px)'],
  ['Position', 'fixed top-0 left-0 right-0 z-50'],
  ['Background', 'bg-white/90 dark:bg-black/90 backdrop-blur-sm'],
] as const

export const borderRadiusScale = [
  ['rounded-none', '0', 'Hard edges for dividers and edge-to-edge surfaces'],
  ['rounded-sm', '2px', 'Progress and slider tracks, inline code'],
  ['rounded-md', '3px', 'Badges and compact indicators'],
  ['rounded-lg', '4px', 'Buttons, inputs, dropdown items, and default controls'],
  ['rounded-xl', '6px', 'Menus, cards, and content wrappers'],
  ['rounded-2xl', '8px', 'Large marketing panels and editorial callouts'],
  ['rounded-3xl', '10px', 'Rare showcase surfaces and sheets that need a slightly softer frame'],
  ['rounded-4xl', '12px', 'Upper limit of the scale. Nothing in the system is rounder than this.'],
  ['rounded-full', '9999px', 'Circular controls only: avatars, radios, switches, and dots. Never use it for pill or capsule UI.'],
] as const

export const borderStyles = [
  ['Structural dividers', 'border-t border-zinc-100 dark:border-zinc-900', 'Section separators and footer top borders'],
  ['Card borders', 'border border-zinc-200 dark:border-zinc-800', 'Product, category, and item cards'],
  ['Active or selected', 'border-black dark:border-white', 'Selected preference options'],
  ['Hover border', 'hover:border-zinc-300 dark:hover:border-zinc-700', 'Card hover states'],
  ['Inner dividers', 'border-b border-zinc-100 dark:border-zinc-800', 'Sections inside larger cards'],
] as const

export const shadowStates = [
  ['Default', '-', 'Cards sit flat at rest'],
  ['Hover strong', 'hover:shadow-lg', 'Larger cards and product cards'],
  ['Hover subtle', 'hover:shadow-md', 'Smaller interactive cards'],
] as const

export const transparentBackgrounds = [
  ['Header', 'bg-white/90 dark:bg-black/90', 'Fixed navigation bar'],
  ['Image nav button', 'bg-white/80 dark:bg-zinc-900/80', 'Gallery navigation'],
] as const

export const opacityPatterns = [
  ['Category icons at rest', 'opacity-30', 'Muted decorative icons'],
  ['Category icons on hover', 'group-hover:opacity-60', 'Reveal on interaction'],
  ['Tier icons', 'opacity-40', 'Decorative tier iconography'],
] as const

export const iconSpecifications = [
  ['Default size', 'w-5 h-5 (20px)'],
  ['Small size', 'w-4 h-4 (16px)'],
  ['Micro size', 'w-3 h-3 (12px)'],
  ['Stroke width', '1 for navigation icons, 2 for action icons'],
  ['Line cap', 'round'],
  ['Line join', 'round'],
  ['Style', 'Outline or line icons only'],
] as const

export const standardIcons = [
  ['Menu (open)', 'M4 6h16M4 12h16M4 18h16', 'Mobile menu trigger'],
  ['Close', 'M6 18L18 6M6 6l12 12', 'Close menus and modals'],
  ['Chevron right', 'M9 5l7 7-7 7', 'Navigation arrows and view-more links'],
  ['Chevron left', 'M15 19l-7-7 7-7', 'Back navigation and gallery previous actions'],
  ['Checkmark', 'Filled path with fillRule="evenodd"', 'Recommendation reasons and success markers'],
  ['External link', 'To be defined', 'Retailer links and outbound references'],
] as const

export const emojiUsageRows = [
  ['Category icons', '👕 🍳 💻 🧳', 'Fast visual markers in cards and navigation'],
  ['Country flags', '🇨🇭 🇫🇷 🇩🇪', 'Preferences and footer markers'],
  ['Tier icons', '💰 ⚖️ ✨', 'Tier descriptions'],
  ['Status markers', '✓', 'Affiliate-free badge or approval states'],
] as const

export const transitionSpecs = [
  ['Color', '300ms', 'ease', 'transition-colors duration-300', 'Links, borders, and text hover states'],
  ['All properties', '300ms', 'ease', 'transition-all duration-300', 'Preference buttons and complex state changes'],
  ['Shadow', '150ms', 'ease', 'transition-shadow', 'Card hover shadows'],
  ['Opacity', '300ms', 'ease', 'transition-opacity duration-300', 'CTAs and header elements'],
  ['Transform', '150ms', 'ease', 'transition-transform', 'Chevron and directional micro-interactions'],
] as const

export const animationSpecs = [
  ['fadeIn', '500ms', 'ease-out', 'Page transitions for main content'],
  ['button press', '150ms', 'ease-out', 'Pressed confirmation for button activation'],
  ['loading spin', '900ms', 'linear', 'Indeterminate loading states such as loading circles'],
] as const

export const microInteractions = [
  ['Chevron arrow on hover', 'Translate right 4px', 'group-hover:translate-x-1'],
  ['Navigation link gap on hover', 'Gap increases', 'group-hover:gap-2'],
  ['Category icon on hover', 'Opacity increases', 'group-hover:opacity-60'],
  ['Button on press', 'Scales down slightly', 'motion-safe:active:scale-[0.985]'],
] as const

export const motionPrinciples = [
  'Choose subtle motion over dramatic motion.',
  'Use 300ms as the default transition duration, 150ms for micro-interactions, and 500ms only for page-level entrances.',
  'Use ease-out for entrances so content settles into place.',
  'Pressed states should confirm intent quickly and return immediately.',
  'Do not animate without a functional reason.',
  'Always respect prefers-reduced-motion.',
] as const

export const voiceTraits = [
  ['Clear and direct', 'Say what you mean in the fewest words possible. Remove jargon, filler, and unnecessary cleverness.'],
  ['Friendly and approachable', 'Write with people, not at them. Use natural sentence structure and acknowledge the reader.'],
  ['Simple and confident', 'Lead with the answer and avoid hedging language.'],
  ['Honest and trustworthy', 'Disclose trade-offs, methodology, and affiliate context without overselling.'],
] as const

export const toneAdjustmentByContext = [
  ['Homepage hero', 'Welcoming, confident', 'Instructive'],
  ['Product recommendation', 'Confident, helpful', 'Reassuring'],
  ['Care instructions', 'Instructive', 'Welcoming'],
  ['Error or empty state', 'Reassuring, helpful', 'Confident'],
  ['About page', 'Welcoming, honest', 'Instructive'],
  ['Technical specs', 'Instructive', 'Welcoming'],
  ['Navigation and labels', 'Helpful', 'Confident'],
] as const

export const grammarMechanics = [
  ['Active voice', 'Prefer active voice. Use passive voice only when softening the message improves clarity.'],
  ['Contractions', 'Use common contractions in product and editorial copy, but avoid them in legal or payment contexts.'],
  ['Verb tenses', 'Use simple past, present, and future forms instead of progressive constructions.'],
  ['Capitalization', 'Use sentence case for headings, labels, buttons, and navigation. Keep "Full Human" in title case.'],
  ['Pronouns', 'Address people as "you" and default to singular they when gender is unknown or irrelevant.'],
  ['Punctuation', 'Use periods for sentences, the Oxford comma, and avoid exclamation marks, semicolons, and ampersands.'],
  ['Numbers', 'Spell out zero through nine in running text. Use numerals for 10+, prices, specs, and measurements.'],
  ['Dates and time', 'Full: Monday, 21 August 2026. Compact: 21 Aug 2026. Dates use DD/MM/YYYY and time uses a 24-hour or locale-aware format.'],
  ['Lists', 'Use bullets for equal-weight items and numbered lists for sequences. Avoid trailing periods unless items are full sentences.'],
] as const

export const accessibilityInContent = [
  'Write meaningful alt text for all images.',
  'Do not rely on color alone to convey meaning.',
  'Use descriptive link text instead of generic calls like "click here".',
  'Keep sentences short for screen reader users.',
  'Do not embed important copy inside images.',
] as const

export const internationalConsiderations = [
  'Do not hard-code date, time, number, or currency formats.',
  'Avoid culture-specific references and idioms.',
  'Keep strings short and structurally simple so they localize cleanly.',
  'Use locale-aware formatting when data is rendered.',
] as const

export const accessibilityContrast = [
  ['Normal text', '4.5:1', 'WCAG AA'],
  ['Large text (18px bold or 24px)', '3:1', 'WCAG AA'],
  ['UI components and borders', '3:1', 'WCAG AA'],
  ['Non-text elements and icons', '3:1', 'WCAG AA'],
] as const

export const semanticHtmlRules = [
  'Use a real heading hierarchy without skipping levels.',
  'Use nav, main, header, and footer landmarks.',
  'Use buttons for actions and anchors for navigation.',
  'Add aria-label to icon-only controls.',
  'Always provide alt text for images.',
] as const

export const keyboardNavigationRules = [
  'Every interactive element must be reachable with Tab.',
  'Modals and dropdowns should trap focus when open.',
  'Escape should close modals and dropdowns.',
  'Arrow keys should navigate galleries, radio groups, and selects where relevant.',
] as const

export const screenReaderRules = [
  'Use aria-label and aria-labelledby where visible copy is insufficient.',
  'Hide decorative elements with aria-hidden.',
  'Use aria-live to announce dynamic content changes when needed.',
  'Emoji used as icons need accessible labels or should be hidden from assistive tech.',
] as const

export const responsiveNavigation = [
  ['Desktop (md: and up)', 'Horizontal navigation with inline links'],
  ['Mobile (below md:)', 'An explicit bottom navigation shelf that expands into a sheet for dense menus'],
] as const

export const tokenArchitecture = [
  ['Global tokens', 'Raw Tailwind values such as zinc-500, text-sm, and p-6.'],
  ['Semantic tokens', 'Purpose-driven aliases defined in the @theme block of styles/globals.css, such as brand-400, negative-600, bg-background, and shadow-float.'],
] as const

export const tokenNamingExamples = [
  ['--color-brand-400', 'Namespace: color, role: brand, step: 400. Utilities: bg-brand-400, text-brand-400'],
  ['--color-negative-600', 'Namespace: color, role: negative status, step: 600. Utility: text-negative-600'],
  ['--shadow-float', 'Namespace: shadow, role: floating controls. Utility: shadow-float'],
  ['--radius-lg', 'Namespace: radius, step: lg. Utility: rounded-lg'],
] as const

export const navigationSpec = [
  ['Position', 'Inline by default, full width when it carries page sections'],
  ['Height', 'Auto on mobile, compact single-row rhythm on wider screens'],
  ['Background', 'white/90 with backdrop-blur-sm'],
  ['Logo', 'text-sm font-light tracking-[0.3em] uppercase'],
  ['Nav links', 'Compact links with restrained corners that can wrap or switch to a section grid on mobile; never use pill or capsule styling'],
  ['Link color', 'text-zinc-600 to text-black on hover'],
] as const

export const categoryCardSpec = [
  ['Background', 'bg-white dark:bg-black'],
  ['Padding', 'p-12'],
  ['Hover', 'Background shifts to zinc-50 or zinc-950'],
  ['Transition', 'transition-colors duration-500'],
  ['Icon', 'text-5xl opacity-30 to opacity-60 on hover'],
  ['Title', 'text-xl font-light'],
  ['Description', 'text-sm font-light text-zinc-500'],
  ['CTA', 'text-xs tracking-[0.15em] uppercase with arrow'],
] as const

export const itemCardSpec = [
  ['Background', 'bg-white dark:bg-zinc-900'],
  ['Border radius', 'rounded-lg'],
  ['Border', 'border-zinc-200 to border-zinc-300 on hover'],
  ['Padding', 'p-5'],
  ['Shadow', 'hover:shadow-md'],
  ['Title', 'font-semibold'],
  ['Description', 'text-sm text-zinc-600 line-clamp-2'],
] as const

export const productCardSpec = [
  ['Background', 'bg-white dark:bg-zinc-900'],
  ['Border radius', 'rounded-xl'],
  ['Border', 'border-zinc-200 dark:border-zinc-800'],
  ['Shadow', 'hover:shadow-lg'],
  ['Sections', 'Divided by border-b border-zinc-100 dark:border-zinc-800'],
  ['Section padding', 'p-6'],
  ['Brand text', 'text-sm text-zinc-500'],
  ['Product name', 'text-lg font-semibold'],
  ['Price', 'text-xl font-semibold'],
  ['Tier badge', 'px-3 py-1 rounded-md text-xs font-medium with tier color'],
] as const

export const preferenceControlSpec = [
  ['Default', 'border border-zinc-200 dark:border-zinc-800'],
  ['Hover', 'hover:border-zinc-400 dark:hover:border-zinc-600'],
  ['Selected', 'border-black dark:border-white'],
  ['Text', 'text-xs tracking-[0.1em] uppercase'],
  ['Padding', 'p-3'],
] as const

export const imageGallerySpec = [
  ['Container', 'aspect-square with overflow-hidden'],
  ['Nav buttons', 'rounded-md p-1.5 bg-white/80 dark:bg-zinc-900/80'],
  ['Dot inactive', 'w-2 h-2 rounded-full bg-zinc-400'],
  ['Dot active', 'w-2 h-2 rounded-full bg-zinc-900 dark:bg-white'],
] as const

export const footerSpec = [
  ['Border', 'border-t border-zinc-100 dark:border-zinc-900'],
  ['Padding', 'py-16'],
  ['Grid', '3 short-link columns plus 1 newsletter column on desktop'],
  ['Section headings', 'text-xs font-light tracking-[0.2em] uppercase text-zinc-400'],
  ['Links', 'text-sm font-light text-zinc-600 to text-black on hover'],
  ['Copyright', 'text-xs font-light text-zinc-400 tracking-wide'],
] as const

export const componentInventory = [
  ['alert', 'Short confirmation and interruption overlays', 'Components/Feedback and overlays'],
  ['alert-banner', 'Full-width page or section-level notification banner', 'Components/Feedback and overlays/Alert banner'],
  ['avatar', 'Identity markers for people, teams, and products', 'Components/Data display'],
  ['avatar-group', 'Related people or contributors shown as one cluster', 'Components/Data display/Avatar group'],
  ['badge', 'Compact status and taxonomy indicators', 'Components/Buttons and links'],
  ['breadcrumbs', 'Location trail for hierarchical navigation', 'Components/Navigation/Breadcrumbs'],
  ['button', 'Primary, secondary, and low-emphasis actions', 'Components/Buttons and links'],
  ['checkbox', 'Independent multi-select controls', 'Components/Choices'],
  ['combobox', 'Searchable single-select control', 'Components/Choices'],
  ['contextual-help', 'Supporting guidance attached to a nearby decision or field', 'Components/Feedback and overlays/Contextual help'],
  ['description-list', 'Two-column key/value presentation', 'Components/Data display'],
  ['dialog', 'Richer modal surfaces for contextual tasks', 'Components/Feedback and overlays'],
  ['divider', 'Structural separation for content blocks', 'Components/Data display'],
  ['drop-zone', 'Drag-and-drop file target with browse fallback', 'Components/Forms/Drop zone'],
  ['dropdown', 'Context menus and secondary actions', 'Components/Navigation'],
  ['fieldset', 'Shared field, label, helper text, and error wrappers', 'Components/Forms'],
  ['heading', 'Reading hierarchy primitives', 'Components/Data display'],
  ['input', 'Single-line text entry and icon-leading fields', 'Components/Forms'],
  ['inline-alert', 'Inline notice embedded inside content or forms', 'Components/Feedback and overlays/In-line alert'],
  ['link', 'Interactive anchor primitive used throughout the system', 'Components/Buttons and links'],
  ['listbox', 'Structured single-select menu control', 'Components/Choices'],
  ['navbar', 'Primary horizontal navigation', 'Components/Navigation'],
  ['pagination', 'Previous, next, and page-index navigation', 'Components/Navigation'],
  ['progress-bar', 'Linear completion or loading feedback', 'Components/Data display/Progress bar'],
  ['loading-circle', 'Circular loading indicator for indeterminate work', 'Components/Feedback and overlays/Loading circle'],
  ['radio', 'Mutually exclusive option sets', 'Components/Choices'],
  ['segmented-control', 'Compact mutually exclusive mode switching', 'Components/Choices/Segmented control'],
  ['selection-card', 'Card-based single selection with supporting copy', 'Components/Choices/Selection cards'],
  ['select', 'Native select input styling', 'Components/Forms'],
  ['sidebar', 'Dense navigation and sectioned side rail', 'Components/Navigation'],
  ['sidebar-layout', 'Desktop sidebar application shell with a mobile bottom-sheet menu', 'Components/Layouts'],
  ['slider', 'Native range input styled as a slider', 'Components/Forms/Range slider'],
  ['stacked-layout', 'Top-nav application shell with a mobile bottom-sheet menu', 'Components/Layouts'],
  ['switch', 'Immediate on/off preference controls', 'Components/Choices'],
  ['table', 'Structured data grids and linked rows', 'Components/Data display'],
  ['text', 'Body copy, strong text, inline links, and code', 'Components/Data display'],
  ['textarea', 'Long-form text entry', 'Components/Forms'],
  ['toast', 'Transient confirmation and status surface', 'Components/Feedback and overlays/Toast'],
  ['tooltip', 'Short, on-demand explanatory overlay', 'Components/Feedback and overlays/Tooltip'],
] as const

export const techStackRows = [
  ['Framework', 'Next.js 16'],
  ['Language', 'TypeScript 6'],
  ['Styling', 'Tailwind CSS 4'],
  ['UI library', 'React 19'],
  ['Storybook', 'Storybook 10 with @storybook/nextjs-vite'],
  ['Fonts', 'Geist, Geist Mono, Instrument Serif'],
  ['Utilities', 'clsx, @headlessui/react, motion'],
] as const

export const quickReferenceTree = `app/
  layout.tsx            <- Root layout
  page.tsx              <- Minimal local app shell
components/
  *.tsx                 <- Preserved Full Human primitives
stories/
  guide/                <- Design-system reference pages
  components/           <- Component showcase stories
  support/              <- Shared guide helpers and data
.storybook/
  main.ts               <- Storybook framework and addons
  preview.ts            <- Theme decorator and story ordering
styles/
  globals.css           <- Tailwind import, fonts, and design tokens`

export const selectionCssSnippet = `::selection {
  background: --alpha(var(--color-zinc-900) / 12%);
}

.dark ::selection {
  background: --alpha(var(--color-white) / 18%);
}`

export const fadeInCssSnippet = `@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

main {
  animation: fadeIn 0.5s ease-out;
}`

export const buttonPressCssSnippet = `<Button className="motion-safe:active:scale-[0.985] motion-safe:transition-transform motion-safe:duration-150 motion-reduce:transition-none">
  Save changes
</Button>`

export const focusCssSnippet = `:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}`

export const reducedMotionCssSnippet = `@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}`

export const breadcrumbsHtmlSnippet = `<nav class="flex items-center gap-2 text-xs font-light tracking-wide text-zinc-400">
  <a class="underline-offset-4 transition-[color,text-decoration-color] hover:text-black hover:underline dark:hover:text-white">Home</a>
  <span>/</span>
  <span class="text-black dark:text-white">Current page</span>
</nav>`

export const loadingStateHtmlSnippet = `<div class="bg-zinc-100 dark:bg-zinc-800 rounded-xl h-96 animate-pulse" />`
