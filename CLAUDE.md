# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Heads up: Next.js version

This project uses **Next.js 16.2.6 with React 19 and the React Compiler enabled** (`reactCompiler: true` in `next.config.ts`). APIs, conventions, and file layout differ from older Next.js you may have seen. Before writing non-trivial Next code, consult `node_modules/next/dist/docs/` rather than relying on memory — see `AGENTS.md`.

## Commands

Package manager is **pnpm** (a `pnpm-lock.yaml` and `pnpm-workspace.yaml` are present; the workspace file only declares `allowBuilds` for `msw`, `sharp`, `unrs-resolver`).

- `pnpm dev` — Next dev server on http://localhost:3000
- `pnpm build` — production build
- `pnpm start` — serve the production build
- `pnpm lint` — ESLint (flat config in `eslint.config.mjs`, extends `eslint-config-next` core-web-vitals + TS)
- `node scripts/verify-seo.mjs` — hits a running server (defaults to `http://localhost:3000`, override with `BASE_URL`) and asserts the expected schema.org JSON-LD blocks, `sitemap.xml`, and `robots.txt` exist for each page in the page list inside the script. Run after structural SEO changes.
- `bash scripts/download-images.sh` / `bash scripts/rewrite-images.sh` — image asset helpers under `public/images/`.

No test runner is configured.

## Required env (`.env.local`)

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
NEXT_PUBLIC_SITE_URL=https://www.intrastack.com   # used by SEO/sitemap; trailing slash stripped
```

Without the Supabase vars set, news pages fall back to the in-code `MOCK_ITEMS` array in `src/lib/content/news.ts` so the site still renders.

## Architecture

This is the Intrastack marketing site — a Next.js App Router app under `src/app/`. The path alias `@/*` maps to `src/*`.

### Request pipeline / CSP

`src/proxy.ts` (Next 16 renamed the `middleware` file convention to `proxy`; export must be named `proxy`) runs on every non-asset route and:

1. Generates a per-request base64 nonce.
2. Sets `x-nonce` on the request and a strict `Content-Security-Policy` header on the response (using `strict-dynamic` with the nonce). Next emits its inline scripts/styles with this nonce.
3. Allows specific external origins: `*.supabase.co` (data), `cdn.simpleicons.org` (tech-stack logos), `https://www.google.com` (Maps iframe on contact page).

If you add a new external host (image CDN, analytics, embed), the CSP must be updated here or the request will be blocked.

### Data layer

- `src/lib/supabase/server.ts` exports `getSupabaseServerClient()` — a cached, anon-key Supabase client for **server components and route handlers only**. Public-readable tables (RLS allows `published = true`) are the security boundary. For writes / user-scoped reads, create a separate client that forwards the auth cookie; do **not** reuse the cached anon client.
- `src/lib/content/*.ts` are the per-domain content modules (`news.ts`, `services.ts`, `solutions.ts`, `industries.ts`, `jobs.ts`). Pages call functions like `fetchNewsList(kind)` / `fetchNewsItem(kind, slug)` rather than touching Supabase directly.
- `supabasemig/` holds the SQL migrations (`migrations/0001_news_items.sql`) and `seed/` data. News is a single `news_items` table discriminated by a `news_kind` enum (`blog | trend | whitepaper | client_story`); the four `/news/...` route groups all read from it.

### SEO

Site-wide constants live in `src/lib/seo/site.ts` (`SITE` object: name, url, address, social handles). **Any domain / contact / social change is a one-file edit here** — sitemap, robots, JSON-LD schemas, and `metadata` all read from it.

- `src/lib/seo/schemas.ts` — schema.org JSON-LD builders (Organization, WebSite, BreadcrumbList, Service, CollectionPage, LocalBusiness, Person, …).
- `src/components/seo/SchemaScript.tsx` renders a JSON-LD `<script>` tag; wired into the root layout for Organization + WebSite, and per-page for the rest.
- `src/app/sitemap.ts` and `src/app/robots.ts` — App Router metadata routes; both derive URLs from `SITE.url`.
- `scripts/verify-seo.mjs` is the source of truth for which pages must expose which schemas.

### UI

- shadcn/ui is configured via `components.json` (style `radix-mira`, base color `zinc`, RSC enabled, icons from `lucide-react`). Aliases: `@/components`, `@/components/ui`, `@/lib`, `@/lib/utils`, `@/hooks`.
- `src/components/ui/` — shadcn primitives (don't hand-edit unless intentionally diverging from the registry).
- `src/components/landing_page/` — homepage sections (hero, services, industries, solutions, tech stack, testimonials, CTA, etc.), composed in `src/app/page.tsx`.
- `src/components/public/` — shared layout pieces (`navBar.tsx`, `footer.tsx`, `reachUsForm.tsx`, `careersBoard.tsx`, `reveal.tsx`, …) used across routes.
- Fonts: Inter (heading), Raleway (sans), Geist Mono — loaded in `src/app/layout.tsx` via `next/font/google` and applied as CSS variables.
- Tailwind v4 (PostCSS-based, no `tailwind.config.*`); globals + theme tokens in `src/app/globals.css`.

### Route groups under `src/app/`

`about/`, `services/`, `solutions/`, `industries/`, `news/{blogs,trends,whitepaper,client_stories}/`, `careers/`, `contact/`, `login/`, `register/`, plus an `api/contact/` route handler for the contact form. Most are static / RSC-rendered; the news routes and any form submit are the dynamic paths.
