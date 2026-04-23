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
    ],
    dontList: [
      'Over-engineer components or states.',
      'Add “complete-looking” features that are not useful.',
      'Crowd pages with too many parallel priorities.',
    ],
  },
] as const

export const principleTable = [
  ['Clear', 'Use plain language, obvious hierarchy, and consistent patterns.', 'Add decorative elements, hide actions behind ambiguous icons, or use jargon.'],
  ['Human', 'Design for all abilities, respect attention, and write with empathy.', 'Assume context, ignore edge cases, or use dark patterns.'],
  ['Purposeful', 'Include only what is necessary, give content room, and test assumptions.', 'Over-engineer, add “just in case” features, or clutter interfaces.'],
] as const

export const accentScale = [
  ['accent-50', 'green-50', '#f0fdf4', 'Subtle backgrounds and tinted surfaces'],
  ['accent-100', 'green-100', '#dcfce7', 'Hover backgrounds and highlighted areas'],
  ['accent-200', 'green-200', '#bbf7d0', 'Decorative accents and light badges'],
  ['accent-300', 'green-300', '#86efac', 'Active states and light illustration moments'],
  ['accent-400', 'green-400', '#4ade80', 'Primary accent and default interactive color'],
  ['accent-500', 'green-500', '#22c55e', 'Hover state for primary actions'],
  ['accent-600', 'green-600', '#16a34a', 'Pressed and active states'],
  ['accent-700', 'green-700', '#15803d', 'Stronger accent emphasis'],
  ['accent-800', 'green-800', '#166534', 'High-contrast text on light surfaces'],
  ['accent-900', 'green-900', '#14532d', 'Dark accent borders and text'],
  ['accent-950', 'green-950', '#052e16', 'Dark mode accent surfaces'],
] as const

export const neutralScale = [
  ['neutral-white', 'white', '#ffffff', 'Page background in light mode'],
  ['neutral-50', 'neutral-50', '#fafafa', 'Alternate sections and subtle surfaces'],
  ['neutral-100', 'neutral-100', '#f5f5f5', 'Cards and hover surfaces'],
  ['neutral-200', 'neutral-200', '#e5e5e5', 'Borders and dividers'],
  ['neutral-300', 'neutral-300', '#d4d4d4', 'Decorative borders and disabled accents'],
  ['neutral-400', 'neutral-400', '#a3a3a3', 'Placeholder text and captions'],
  ['neutral-500', 'neutral-500', '#737373', 'Secondary text'],
  ['neutral-600', 'neutral-600', '#525252', 'Body text'],
  ['neutral-700', 'neutral-700', '#404040', 'Primary body emphasis'],
  ['neutral-800', 'neutral-800', '#262626', 'Headings and strong text'],
  ['neutral-900', 'neutral-900', '#171717', 'Primary text'],
  ['neutral-950', 'neutral-950', '#0a0a0a', 'High-emphasis text and dark backgrounds'],
] as const

export const semanticColors = [
  ['Positive', 'emerald-500', '#10b981', 'Success states, confirmations, checkmarks'],
  ['Negative', 'red-500', '#ef4444', 'Errors, destructive actions, warnings'],
  ['Notice', 'amber-500', '#f59e0b', 'Caution and attention states'],
  ['Informative', 'blue-500', '#3b82f6', 'Links, informational banners, highlights'],
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
  ['--color-bg-page', 'white', 'black', 'Page background'],
  ['--color-bg-surface', 'white', 'neutral-900', 'Cards and surfaces'],
  ['--color-bg-subtle', 'neutral-50', 'neutral-950', 'Alternate sections'],
  ['--color-text-primary', 'neutral-900', 'neutral-100', 'Primary text'],
  ['--color-text-secondary', 'neutral-600', 'neutral-400', 'Secondary text'],
  ['--color-border-default', 'neutral-200', 'neutral-800', 'Default borders'],
  ['--color-border-strong', 'black', 'white', 'Selected or active states'],
  ['--color-accent', 'green-500', 'green-400', 'Primary accent'],
  ['--color-positive', 'emerald-500', 'emerald-400', 'Success states'],
  ['--color-negative', 'red-500', 'red-400', 'Error states'],
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
  ['Focus states', 'Every interactive element needs a visible focus ring with enough offset to separate it from borders.'],
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
    items: ['input', 'textarea', 'select', 'checkbox', 'radio', 'switch', 'combobox', 'listbox', 'fieldset', 'drop-zone'],
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
  ['Background', 'emerald-50 (#ecfdf5)', 'emerald-950 (#022c22)'],
  ['Border', 'emerald-200 (#a7f3d0)', 'emerald-800 (#065f46)'],
  ['Text', 'emerald-700 (#047857)', 'emerald-300 (#6ee7b7)'],
  ['Icon', 'emerald-500 (#10b981)', 'emerald-400 (#34d399)'],
] as const

export const colorUsageRules = [
  ['Use semantic colors for status', 'Use emerald-500 for a success checkmark.', 'Do not use the green brand accent for success messaging.'],
  ['Use neutrals as the foundation', 'Use neutral-600 for body text and neutral-200 for borders.', 'Do not colorize structural copy or borders without a semantic reason.'],
  ['Maintain contrast ratios', 'Keep normal text at 4.5:1 and large text or UI components at 3:1 minimum.', 'Do not ship low-contrast combinations that rely on ideal displays.'],
] as const

export const darkModeSurfaceMap = [
  ['Page background', 'white (#ffffff)', 'black (#000000)'],
  ['Foreground text', 'neutral-950 (#0a0a0a)', 'neutral-50 (#fafafa)'],
  ['Card background', 'white', 'neutral-900'],
  ['Primary border', 'neutral-200', 'neutral-800'],
  ['Subtle border', 'neutral-100', 'neutral-900'],
  ['Accent surface', 'green-50', 'green-950'],
] as const

export const typefaceRoles = [
  ['Geist', 'Primary headings, body, and UI', '--font-geist-sans', 'system-ui, -apple-system, sans-serif'],
  ['Geist Mono', 'Code, data, and technical labels', '--font-geist-mono', 'ui-monospace, Menlo, Monaco, monospace'],
  ['Instrument Serif', 'Editorial accents and expressive display moments', 'None', 'Georgia, "Times New Roman", serif'],
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
  ['rounded-md', '3px', 'Badges and compact indicators'],
  ['rounded-lg', '4px', 'Buttons, inputs, dropdown items, and default controls'],
  ['rounded-xl', '6px', 'Menus, cards, and content wrappers'],
  ['rounded-2xl', '8px', 'Large marketing panels and editorial callouts'],
  ['rounded-3xl', '10px', 'Rare showcase surfaces that need a slightly softer frame'],
  ['rounded-full', '9999px', 'Circular controls only: avatars, radios, switches, and dots'],
] as const

export const borderStyles = [
  ['Structural dividers', 'border-t border-neutral-100 dark:border-neutral-900', 'Section separators and footer top borders'],
  ['Card borders', 'border border-neutral-200 dark:border-neutral-800', 'Product, category, and item cards'],
  ['Active or selected', 'border-black dark:border-white', 'Selected preference options'],
  ['Hover border', 'hover:border-neutral-300 dark:hover:border-neutral-700', 'Card hover states'],
  ['Inner dividers', 'border-b border-neutral-100 dark:border-neutral-800', 'Sections inside larger cards'],
] as const

export const shadowStates = [
  ['Default', '-', 'Cards sit flat at rest'],
  ['Hover strong', 'hover:shadow-lg', 'Larger cards and product cards'],
  ['Hover subtle', 'hover:shadow-md', 'Smaller interactive cards'],
] as const

export const transparentBackgrounds = [
  ['Header', 'bg-white/90 dark:bg-black/90', 'Fixed navigation bar'],
  ['Image nav button', 'bg-white/80 dark:bg-neutral-900/80', 'Gallery navigation'],
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
  ['Mobile (below md:)', 'Hamburger trigger with a slide-down or drawer-style panel'],
] as const

export const tokenArchitecture = [
  ['Global tokens', 'Raw Tailwind values such as neutral-500, text-sm, and p-6.'],
  ['Semantic tokens', 'Purpose-driven aliases such as bg-page, text-body, and border-card.'],
] as const

export const currentCssVariableRows = [
  ['--background', '#ffffff', '#000000', 'Page background'],
  ['--foreground', '#0a0a0a', '#fafafa', 'Foreground text'],
  ['--font-sans', 'var(--font-geist-sans)', 'var(--font-geist-sans)', 'Primary sans font'],
  ['--font-mono', 'var(--font-geist-mono)', 'var(--font-geist-mono)', 'Monospace font'],
] as const

export const tokenNamingExamples = [
  ['--color-bg-page', 'Context: color, property: background, modifier: page'],
  ['--color-text-secondary', 'Context: color, property: text, modifier: secondary'],
  ['--color-border-subtle', 'Context: color, property: border, modifier: subtle'],
  ['--space-section-y', 'Context: space, property: section, modifier: vertical axis'],
] as const

export const navigationSpec = [
  ['Position', 'Fixed, full width, z-50'],
  ['Height', '80px (h-20)'],
  ['Background', 'white/90 with backdrop-blur-sm'],
  ['Logo', 'text-sm font-light tracking-[0.3em] uppercase'],
  ['Nav links', 'text-xs font-light tracking-[0.15em] uppercase'],
  ['Link color', 'text-neutral-600 to text-black on hover'],
] as const

export const categoryCardSpec = [
  ['Background', 'bg-white dark:bg-black'],
  ['Padding', 'p-12'],
  ['Hover', 'Background shifts to neutral-50 or neutral-950'],
  ['Transition', 'transition-colors duration-500'],
  ['Icon', 'text-5xl opacity-30 to opacity-60 on hover'],
  ['Title', 'text-xl font-light'],
  ['Description', 'text-sm font-light text-neutral-500'],
  ['CTA', 'text-xs tracking-[0.15em] uppercase with arrow'],
] as const

export const itemCardSpec = [
  ['Background', 'bg-white dark:bg-neutral-900'],
  ['Border radius', 'rounded-lg'],
  ['Border', 'border-neutral-200 to border-neutral-300 on hover'],
  ['Padding', 'p-5'],
  ['Shadow', 'hover:shadow-md'],
  ['Title', 'font-semibold'],
  ['Description', 'text-sm text-neutral-600 line-clamp-2'],
] as const

export const productCardSpec = [
  ['Background', 'bg-white dark:bg-neutral-900'],
  ['Border radius', 'rounded-xl'],
  ['Border', 'border-neutral-200 dark:border-neutral-800'],
  ['Shadow', 'hover:shadow-lg'],
  ['Sections', 'Divided by border-b border-neutral-100 dark:border-neutral-800'],
  ['Section padding', 'p-6'],
  ['Brand text', 'text-sm text-neutral-500'],
  ['Product name', 'text-lg font-semibold'],
  ['Price', 'text-xl font-semibold'],
  ['Tier badge', 'px-3 py-1 rounded-md text-xs font-medium with tier color'],
] as const

export const preferenceControlSpec = [
  ['Default', 'border border-neutral-200 dark:border-neutral-800'],
  ['Hover', 'hover:border-neutral-400 dark:hover:border-neutral-600'],
  ['Selected', 'border-black dark:border-white'],
  ['Text', 'text-xs tracking-[0.1em] uppercase'],
  ['Padding', 'p-3'],
] as const

export const imageGallerySpec = [
  ['Container', 'aspect-square with overflow-hidden'],
  ['Nav buttons', 'rounded-md p-1.5 bg-white/80 dark:bg-neutral-900/80'],
  ['Dot inactive', 'w-2 h-2 rounded-full bg-neutral-400'],
  ['Dot active', 'w-2 h-2 rounded-full bg-neutral-900 dark:bg-white'],
] as const

export const footerSpec = [
  ['Border', 'border-t border-neutral-100 dark:border-neutral-900'],
  ['Padding', 'py-16'],
  ['Grid', '3 short-link columns plus 1 newsletter column on desktop'],
  ['Section headings', 'text-xs font-light tracking-[0.2em] uppercase text-neutral-400'],
  ['Links', 'text-sm font-light text-neutral-600 to text-black on hover'],
  ['Copyright', 'text-xs font-light text-neutral-400 tracking-wide'],
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
  ['select', 'Native select input styling', 'Components/Forms'],
  ['sidebar', 'Dense navigation and sectioned side rail', 'Components/Navigation'],
  ['sidebar-layout', 'Desktop sidebar application shell', 'Components/Layouts'],
  ['stacked-layout', 'Top-nav application shell', 'Components/Layouts'],
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
  background: rgba(0, 0, 0, 0.1);
}

.dark ::selection {
  background: rgba(255, 255, 255, 0.15);
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

export const focusCssSnippet = `*:focus-visible {
  outline: 1px solid currentColor;
  outline-offset: 3px;
}`

export const reducedMotionCssSnippet = `@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}`

export const breadcrumbsHtmlSnippet = `<nav class="flex items-center gap-2 text-xs font-light tracking-wide text-neutral-400">
  <a class="underline-offset-4 transition-[color,text-decoration-color] hover:text-black hover:underline dark:hover:text-white">Home</a>
  <span>/</span>
  <span class="text-black dark:text-white">Current page</span>
</nav>`

export const loadingStateHtmlSnippet = `<div class="bg-neutral-100 dark:bg-neutral-800 rounded-xl h-96 animate-pulse" />`