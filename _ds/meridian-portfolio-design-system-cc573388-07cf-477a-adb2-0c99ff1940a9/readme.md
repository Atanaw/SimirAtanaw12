# Meridian — Personal Portfolio Design System

A from-scratch design system built for a personal portfolio site belonging to a product designer / data analyst ("Alex Morgan" — a placeholder persona; swap for the real name and photo). No codebase, Figma file, or brand assets were attached to this project — everything here was authored directly from the brief below and is meant to be replaced/refined once real material exists.

**Source brief:** a prompt requesting a "Core Design System Foundation" for a personal portfolio — personality: professional, minimal, data-informed, warm; domain: data analysis, technical projects, professional showcase; deliverables: color tokens (light + dark), a modular type scale, and an 8px spacing/layout system. No Figma link, GitHub repo, or existing codebase was provided.

**No logo was supplied.** Wherever a mark would go, the system renders the name in plain type (see `guidelines/wordmark.html`). Do not treat the lowercase "meridian" wordmark as a real company identity — it's a placeholder name for this exercise; swap in the user's real name/logo when available.

## Content fundamentals

- **Voice:** first person, direct, low-hype. Sentences favor plain verbs over jargon ("I build things that make numbers easy to trust" rather than "I leverage data-driven solutions").
- **Casing:** sentence case throughout — headings, buttons, nav labels. No title case, no all-caps except Caption-scale labels (uppercase + letter-spacing, used only for eyebrow labels and badges).
- **Person:** "I" for the portfolio owner, "you" when addressing the visitor directly (mostly in CTAs — "Get in touch", "Say hello").
- **Emoji:** none. The data-informed, professional tone stays away from emoji entirely.
- **Numbers:** used sparingly and always with context (e.g. "42 projects shipped", never a bare stat wall). This is the one place a slightly denser, more technical tone is welcome — it's the "data-informed" half of the brand.
- **Tone example:** "I spend most days somewhere between a spreadsheet and a Figma file." — specific, self-aware, no buzzwords.

## Visual foundations

- **Color:** one primary teal (`--color-primary`, #1F6F6B light / #4FC2BB dark) carries all interactive states; one warm amber accent (`--color-accent`) is reserved for badges, highlights, and the rare "featured" callout — never for primary buttons. Neutrals are warm off-whites/greys, not cold blue-greys. Both light and dark themes are defined (`tokens/colors.css`, `[data-theme="dark"]` scope).
- **Type:** Space Grotesk (headings) + Inter (body) + JetBrains Mono (data/code snippets, used sparingly for stats or technical labels). See `guidelines/type-scale.html` and `type-family.html`.
- **Spacing:** strict 8px grid — 4/8/16/24/32/48/64px tokens (`--space-1` … `--space-7`). Card padding defaults to `--space-4` (24px); gaps between siblings default to `--space-3` (16px).
- **Layout:** `--container-max` 1200px for full-width sections, `--content-max` 720px for reading-width prose (about text, article body, contact form).
- **Backgrounds:** flat and warm-neutral only — no gradients, no photography-as-background, no illustration/pattern textures. This is a minimal, content-first brand; imagery (a real headshot, project screenshots) should sit inside cards, not behind them.
- **Animation:** subtle and functional only — 120ms (fast: hover/focus) and 200ms (base: layout/opacity) transitions on `cubic-bezier(.4,0,.2,1)`. No bounce, no spring, no page-load choreography.
- **Hover states:** primary buttons darken one step; secondary/ghost buttons and cards gain a soft tinted background; hoverable cards additionally lift 2px with a deeper shadow. No scale-up, no glow.
- **Press states:** not separately defined yet — currently inherit the hover treatment; add an explicit `:active` (slight scale-down or darken-further) if the product needs a tactile press state.
- **Borders:** 1px hairlines in `--color-border` (light) / `--color-border-strong` for input outlines. No colored left-border accent bars — flagged in the brief as a motif to avoid.
- **Shadows:** shallow, warm-tinted (`rgba(28,25,20,…)`), never pure black or blue-tinted — three steps, `--shadow-sm/md/lg`. Dark mode swaps to true-black shadows at higher opacity. See `guidelines/shadow.html`.
- **Radii:** `--radius-xs` 6px (chips/inputs), `--radius-sm` 8px (buttons), `--radius-md` 12px (cards — the default), `--radius-lg` 20px (hero panels/feature blocks), `--radius-full` (pills, avatars).
- **Transparency/blur:** unused. No glassmorphism, no backdrop-filter — keep every surface opaque.
- **Imagery color vibe:** not yet defined — no real photography/screenshots exist in this project. When added, favor natural, neutral-warm color grading (not cold, not heavily saturated) to match the palette.
- **Cards:** `--color-surface` fill, 1px `--color-border` outline, `--radius-md`, `--shadow-sm` at rest. `hoverable` cards (used for clickable project tiles) add `--shadow-md` + a 2px lift on hover.

## Iconography

No icon codebase or Figma icon set was provided. **Substitution:** components use [Lucide](https://lucide.dev) icons, loaded from the `unpkg` CDN at runtime (see `components/core/Icon.jsx`) — a neutral, minimal line-icon set (1.75px stroke) that matches the brand's clean, unornamented feel. No emoji, no unicode-as-icon, no custom SVGs were hand-drawn for this system. If the real portfolio owner has a preferred icon set already in use, swap the CDN source in `Icon.jsx`.

## Assets

No logo, illustrations, or photography were supplied, so `assets/` is intentionally empty. Do not fabricate a logo or stock photography — use `<image-slot>` placeholders in any downstream page until the user provides real material (a headshot, project screenshots, a resume PDF, etc).

## Components

Standard primitive set (no source codebase defined an inventory, so this is a from-scratch set sized to a personal-portfolio site's actual needs — not a full enterprise kit):

- `components/core/` — **Icon**, **Button**, **Badge**, **Card**, **StatCard**
- `components/forms/` — **Input** (single-line + multiline)
- `components/navigation/` — **NavLink**, **Avatar**

**Intentional additions:** `Icon` is not in the original brief's token list but is required to wrap the Lucide substitution consistently across Button/StatCard/nav/contact icons. `StatCard` was added specifically for the "data-informed" personality trait — a way to surface metrics (projects shipped, years of experience) without a data-viz library.

## UI kit

`ui_kits/portfolio/` — an interactive click-through of the one product this system serves (a personal portfolio site): Home (hero + stats), Projects (grid), Project detail, About, Contact (working form state, no real backend). Built entirely from the components above.

## Index

- `styles.css` — root stylesheet, imports everything below
- `tokens/` — `colors.css`, `fonts.css`, `typography.css`, `spacing.css`, `effects.css` (radius/shadow/motion)
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand groups) shown in the Design System tab
- `components/core/`, `components/forms/`, `components/navigation/` — reusable primitives + their `@dsCard` specimens
- `ui_kits/portfolio/` — the portfolio site recreation
- `thumbnail.html` — project homepage tile
- `SKILL.md` — Claude Code-compatible skill wrapper for this system
