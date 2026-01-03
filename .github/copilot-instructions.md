# Copilot / AI Agent Instructions

Purpose: make AI coding agents productive quickly in this Vite + React + TypeScript portfolio.

- Project entry: application boots in [src/main.tsx](src/main.tsx#L1).
- Routing: single-page routing is declared in [src/App.tsx](src/App.tsx#L1) using `react-router-dom`; main page is [src/pages/Index.tsx](src/pages/Index.tsx#L1).
- Component layout: content sections live in `src/components/` (e.g., `HeroSection.tsx`, `ProjectsSection.tsx`). UI primitives and design-system wrappers are in `src/components/ui/` (shadcn/radix wrappers).

- Path alias: imports use `@/` -> `src/` (see `tsconfig.json` paths). Prefer using `@/` for internal imports.
- State & data: `@tanstack/react-query` is configured in `src/App.tsx` via a `QueryClientProvider` — use react-query for async state when needed.

- Styling: Tailwind CSS is used across components. Global styles live in [src/index.css](src/index.css#L1) and config in [tailwind.config.ts](tailwind.config.ts#L1). Preserve utility-class patterns when editing UI.

- Common patterns and examples:
  - Navigation scrolls to anchored sections by element id (see `scrollToSection` in `src/components/Navigation.tsx`). When adding a new section, give its root element an `id` and add a nav entry.
  - UI components accept custom `variant` and `size` props (see `src/components/ui/button.tsx`) — match existing prop names to keep visual consistency.
  - To add a new page/route: add a component to `src/pages/`, then add a `<Route path="/your" element={<YourPage/>} />` in `src/App.tsx`.

- Build & dev commands (from `package.json`):
  - Install: `npm i`
  - Dev server: `npm run dev` (Vite)
  - Build: `npm run build` (production)
  - Preview: `npm run preview`
  - Lint: `npm run lint`

- Integrations & deps to be aware of: `shadcn-ui` wrappers under `src/components/ui/`, Radix primitives, `lucide-react` icons, `sonner` toasts, `react-typed` for hero typing effect, and `@tanstack/react-query`.

- Where to look for quick edits:
  - Modify content text: `src/components/*` (section components)
  - Add assets: `public/image/` or `public/images/`
  - Component wrappers & shared primitives: `src/components/ui/`

- Conventions & guardrails for AI edits:
  - Keep changes focused and limited to one visual area per PR. UI is Tailwind-first; avoid introducing new CSS frameworks.
  - Preserve `@/` import style and TypeScript typings. Run `npm run dev` locally to verify visual changes.
  - There are no automated tests — prefer manual validation via the dev server and add screenshots in PRs for visual changes.

If anything above is unclear or you want examples added (e.g., how to add a new section or route), tell me which area to expand and I will iterate.
