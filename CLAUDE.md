# LimitlessMKT Marketing Site — Agent Instructions

## Project
Standalone marketing funnel at limitlessmkt.com. Converts footwear brand owners into booked discovery calls.
Builder: DMR Intelligent Systems (Diego De Manuel)
Client: LimitlessMKT (Nacho Cachaza)

## Stack
- Next.js 16 App Router, TypeScript, Tailwind 4, shadcn/ui
- No database reads — fully static at build time
- API route /api/contact forwards to n8n webhook

## Design System
"Obsidian Gallery" — defined in app/globals.css
- Fonts: Cormorant Garamond (display), Outfit (body)
- Primary gold: #e7c090 / #c5a073
- Background: #000000, surfaces: #131313 → #353534
- Ghost borders: rgba(78,69,59,0.15)
- Easing: cubic-bezier(0.22, 1, 0.36, 1)
- No hard borders. No purple gradients. No generic AI aesthetics.

## Key files
- lib/constants.ts — all copy and image paths
- components/sections/ — page sections
- components/ui-custom/ — design-system components
- components/layout/ — Nav, Footer
- hooks/ — useIntersection, useCounter

## Images
All in public/images/ — see lib/constants.ts for paths and alt text.
Future images: add to public/images/, then update BLUMAKA_CONTENT in constants.ts.

## Environment variables
See .env.local for required vars. Never commit secrets.
