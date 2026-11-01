---
name: Audit & Lifecycle Precision
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#4059aa'
  on-secondary: '#ffffff'
  secondary-container: '#8fa7fe'
  on-secondary-container: '#1d3989'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#00174b'
  on-tertiary-container: '#497cff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#dce1ff'
  secondary-fixed-dim: '#b6c4ff'
  on-secondary-fixed: '#00164e'
  on-secondary-fixed-variant: '#264191'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#003ea8'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.025em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: '0'
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.005em
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  code-meta:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

This design system targets enterprise stakeholders, engineering directors, legal audit leads, and EPC project directors seeking an authoritative, impeccably disciplined Senior Document Controller and Information Management Specialist. The visual language conveys rigorous configuration control, zero-defect data governance, and architectural clarity.

The aesthetic fuses **Corporate / Modern** precision with **Technical Minimalism**. It rejects decorative fluff in favor of structured data surfaces, systematic metadata tagging, and transparent document traceability. Every layout element mimics the precision of a mission-critical Electronic Document Management System (EDMS) and ISO 19650 / ISO 9001 compliance environment, projecting absolute trustworthiness, operational rigor, and executive-level accountability.

## Colors

The palette communicates formal governance, depth of expertise, and unassailable accuracy:

- **Deep Navy (`#0F172A`)**: The primary anchor for critical typography, structural navigational framing, and high-impact hierarchy. It provides institutional authority.
- **Deep Slate Blue (`#1E3A8A`)**: Secondary brand tone for enterprise headers, active states, and lifecycle milestones.
- **Cobalt Blue (`#2563EB`)**: Interactive primary for hyperlinks, actionable buttons, focus boundaries, and selected EDMS views.
- **Verified Emerald (`#059669`)**: Purpose-built compliance accent, strictly reserved for approved statuses, audit sign-offs, verified lifecycle checks, and operational success metrics.
- **Atmospheric Neutrals (`#F8FAFC` canvas, `#FFFFFF` containers, `#E2E8F0` hairline borders)**: Clean, sterile, and non-distracting backgrounds that emphasize legibility and clear categorization.

## Typography

Typography establishes an unwavering cadence of order and structural legibility. 

- **Headlines (Plus Jakarta Sans)**: Used for section titles, case study titles, and key metrics. The subtle geometric polish provides modern executive gravitas without sacrificing strict structural form.
- **Body & Data Grid (Inter)**: Clean, objective, and neutral. The high x-height maintains absolute legibility when rendering dense revision histories, transmittal logs, and metadata strings.
- **Metadata Labels (`label-sm`, `code-meta`)**: Styled with tabular figures (`font-variant-numeric: tabular-nums`) and slight positive letter spacing to cleanly display ISO standards, document revision codes (e.g., `REV-C02`), and transmittal IDs.

## Layout & Spacing

The layout is engineered around an asymmetric 12-column fixed grid with a max width of 1280px on desktop, scaling to an 8-column layout on tablet, and a 4-column layout on mobile.

- **Desktop (1024px+)**: 12 columns with `1.5rem` gutters and outer canvas margins of `3rem`. Data matrices, case-study proof cards, and lifecycle diagrams use consistent column spans (e.g., 4 columns for metadata/sidebar criteria, 8 columns for narrative documentation).
- **Tablet (768px – 1023px)**: 8 columns with `1.25rem` gutters and `2rem` margins. Side panels reflow above data tables.
- **Mobile (< 768px)**: 4 columns with `1rem` gutters and `1.25rem` margins. Tabular matrices collapse gracefully into structured metadata card stacks.
- **Rhythm**: Spacing follows an exact 4px/8px modular base. Compact gaps (`space-xs`, `space-sm`) group related metadata key-value pairs; expansive spacing (`space-xl`, `space-2xl`) delineates distinct project lifecycles and historical case archives.

## Elevation & Depth

Visual depth avoids excessive dramatic shadows in favor of architectural separation, planar layering, and crisp hairline boundaries:

- **Surface Tiers**:
  - `Level 0 (Canvas)`: Slate-tinted neutral base (`#F8FAFC`).
  - `Level 1 (Card & Module)`: Pure white surfaces (`#FFFFFF`) bound by low-contrast borders (`1px solid #E2E8F0`).
  - `Level 2 (Dropdowns, Overlays & Sticky App Bars)`: Surface white (`#FFFFFF`) with a subtle ambient shadow: `0px 4px 12px rgba(15, 23, 42, 0.05)`, edged with `#CBD5E1`.
  - `Level 3 (Modal Audit Dialogs & Detail Panels)`: Raised containment with `0px 12px 32px rgba(15, 23, 42, 0.10)` and crisp `#94A3B8` inner boundary.
- **Border Treatment**: Hairline outlines (`1px solid #E2E8F0`) provide precise structure for grid cells, transmittal tables, and data containers.

## Shapes

The shape hierarchy is calibrated to Level 1 (`Soft`, `0.25rem` / `4px`), projecting industrial discipline, compliance, and precision.

- Standard buttons, badges, table cells, and input fields use `0.25rem` (4px).
- Structural containers and case-study data cards scale to `rounded-lg` (`0.5rem` / `8px`).
- Deep modal overlays or drawer containers use `rounded-xl` (`0.75rem` / `12px`).
- Pill buttons and round circular shapes are strictly restricted to status dots and numerical revision badges to prevent consumer-tech softness.

## Components

### Buttons
- **Primary**: Solid Deep Navy (`#0F172A`) or Cobalt Blue (`#2563EB`) fill, crisp white typography, `0.25rem` border radius, `0.5rem 1rem` padding. Focus states feature a `2px` offset ring in `#2563EB`.
- **Secondary / Outline**: 1px border (`#CBD5E1`), transparent background, `#0F172A` text. Hover state initiates `#F1F5F9` background.
- **Compliance Action**: Solid Verified Emerald (`#059669`) background for "Verify Transmittal" or "Approve Package" actions.

### Chips & Badges
- **Status / Verification Chips**: Subdued background with saturated typography.
  - *Compliant / Approved*: Background `#ECFDF5`, text `#047857`, hairline border `#A7F3D0`, leading with a 6px circular dot.
  - *Under Review / Pending*: Background `#FEF3C7`, text `#B45309`, border `#FDE68A`.
  - *Superseded / Void*: Background `#F1F5F9`, text `#64748B`, border `#E2E8F0`.
- **Metadata Code Chips**: Monospaced font style, `#F1F5F9` surface, `#334155` text, displaying EDMS acronyms (e.g., `Aconex`, `BIM Level 2`, `BS 1192`).

### Input Fields & Controls
- **Inputs**: Flat white background, `1px solid #CBD5E1` border, `0.25rem` corner radius, `Inter` regular `14px`. On focus: `border-color: #2563EB` with a `0 0 0 1px #2563EB` ring.
- **Checkboxes & Radios**: Angular `0.25rem` corners for checkboxes; precise concentric circles for radios. Checked state: `#0F172A` or `#059669` fill with crisp high-contrast checkmark.

### Cards & Project Containers
- **Portfolio Case Study Cards**: Pure white canvas, `1px solid #E2E8F0` border, `rounded-lg` corners. Structured into three strict sections:
  1. Header: Document Classification Number + ISO Tag + Sector.
  2. Body: Project scale, role scope, EDMS ecosystem (e.g., ProjectWise, SharePoint, BIM360).
  3. Footer: Audited metric output (e.g., "100% On-Time RFI Close-Out").

### Lists & Audit Tables
- **Data Tables**: Zebra striping avoided; separated by hairline `#E2E8F0` dividers. Header row in `#F8FAFC` using `label-sm` uppercase tracking. High-density row spacing (`0.5rem` vertical cell padding) with monospace tabular numbers for tracking document revision registers.