<!-- SEED: re-run /impeccable document once there's code to capture the actual tokens and components. -->
---
name: Arena Clash
description: The future of tennis-ball cricket. Broadcast-quality ecosystem where local players become recognized athletes.
---

# Design System: Arena Clash

## 1. Overview

**Creative North Star: "Floodlit Arena"**

Arena Clash lives at the intersection of underground combat sports and esports broadcast polish. Think Red Bull's energy meets UFC's raw intensity meets Nike's athlete-driven campaign language. The design is not a website, it is a broadcast. Every page is a match night under floodlights: high contrast, kinetic, unforgiving.

The system explicitly rejects the polished neutrality of professional cricket broadcasts (Star Sports, ESPNcricinfo). No corporate blue, no sanitised studio backdrops, no polite scorecards. Arena Clash is dirt and grass under floodlights, the glow of a tennis ball at dusk, the tension of two teams facing off.

**Key Characteristics:**
- High contrast, full-palette color commitment (Red, Blue, Yellow)
- Single bold sans-serif voice, broadcast-scale typography
- Choreographed entrance and scroll-driven motion
- Floodlit night atmosphere: dark base, luminous accents
- Esports broadcast framing: lower thirds, stat overlays, countdowns

## 2. Colors

Full palette strategy. Red vs Blue is the dramatic engine, not just a color scheme. The tennis ball glow (yellow) and floodlights (warm white) complete the arena atmosphere.

### Primary - Arena Red
A saturated, aggressive red. The color of rivalry, adrenaline, and the pulse of competition. Carries the primary action surfaces: heroes, CTAs, match highlights. [to be resolved during implementation]

### Secondary - Rival Blue
The counter to red. Cool, deep, confident. Used for opposition framing, secondary surfaces, and supporting match content. [to be resolved during implementation]

### Accent - Ball Glow
A luminous yellow-orange, referencing the tennis ball under floodlights at dusk. Used sparingly for highlights, score states, and active indicators. [to be resolved during implementation]

### Neutral
Tinted toward warm arena-darkness. Not pure black. Deep charcoal with warmth for backgrounds. Lighter warm greys for text on dark surfaces. [to be resolved during implementation]

### Named Rules

**The Rivalry Rule.** Red and Blue never blend. They oppose. When both appear on the same surface, they must be separated by a clear visual boundary or neutral buffer zone. No purple, no gradient between them.

**The Ball Glow Rule.** Yellow is the accent, not the brand. Its rarity is the point. Use it only for active states, score highlights, and the tennis ball motif itself.

## 3. Typography

**Single bold sans-serif.** One family with strong weight contrast (Thin to Black) that carries both display and body roles.

**Character:** Aggressive, upright, confident. Broadcast-style letter spacing at display sizes. No decorative serifs, no playful curves. Readable at a glance, like a fighter's name on a UFC graphic. [font pairing to be chosen at implementation]

### Hierarchy (to be resolved during implementation)
- **Display** (Black weight, fluid clamp, tight): Hero section titles. 80-120px at max.
- **Headline** (Bold weight, responsive): Section titles. 40-60px range.
- **Title** (Semi-Bold): Card titles, player names.
- **Body** (Regular, 16-18px base, 65-75ch max): Paragraph copy. Generous line-height for dark-background readability.
- **Label** (Bold, uppercase, wide tracking): Stats, scoreboard data, captions. [to be resolved during implementation]

## 4. Elevation

Layered, not shadowed. Arena Clash uses tonal elevation and hard-edged overlapping sections to create depth, like broadcast overlays on a dark field. No soft dropshadow that mimics "card floating on background." Elevation comes from contrast: a dark base, a slightly lighter surface, a luminous accent.

Motion replaces shadow as the depth cue. When elements layer, they slide, fade, or scale into position with broadcast-style transitions.

## 5. Components

Omitted in seed. Components will be documented after implementation.

## 6. Do's and Don'ts

### Do:
- **Do** use the full palette with conviction. Red, Blue, and Yellow each have named jobs.
- **Do** frame every page as a broadcast frame: dark arena background, luminous content, scoreboard-style data.
- **Do** keep the rivalry visible. Red vs Blue should read at a glance.
- **Do** use generous scale and tracking on display type.
- **Do** choreograph entrances. Staggered reveals are the broadcast signature.
- **Do** prefer real athlete imagery over generic sports photography.

### Don't:
- **Don't** look like a professional cricket broadcast. No Star Sports blue, no polished studio aesthetic. Arena Clash is underground, raw, floodlit.
- **Don't** use gradient text. Solid colors only: Red, Blue, Yellow, or warm neutrals.
- **Don't** use glassmorphism or blur effects as decorative elements.
- **Don't** use side-stripe borders on cards.
- **Don't** use cards as the default layout affordance. Use full-bleed sections, split layouts, asymmetric grids.
- **Don't** put em dashes in copy. Use commas, colons, or periods.
- **Don't** animate layout properties (width, height, top, left, padding, margin).
- **Don't** use bounce or elastic easings. Exponential ease-out curves only.
