# Pages Router Migration Guide

This guide explains how to rebuild this project as a **separate Next.js Pages Router app**.

It does **not** tell you to edit this current repo in place. The goal is:

1. Create a brand-new Next.js project that uses the `pages/` directory.
2. Copy over the reusable UI/components/assets from this repo.
3. Rebuild the current routes and shared layout using Pages Router patterns.

As of **February 27, 2026**, the official Next.js docs still support the Pages Router, although the App Router is the recommended default for new features:

- https://nextjs.org/docs/pages
- https://nextjs.org/docs/pages/building-your-application/routing/custom-app
- https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts

## 1. What You Are Migrating

This current repo uses the **App Router** structure:

- `app/layout.js`
- `app/(app)/layout.js`
- `app/(app)/page.js`
- `app/(app)/projects/page.js`
- `app/(auth)/login/page.js`
- `app/_styles/globals.css`
- `app/_components/...`

The important App Router features currently in use are:

- A root layout in `app/layout.js`
- A nested layout in `app/(app)/layout.js`
- Route-group folders like `(app)` and `(auth)`
- Route-level `metadata`
- Global CSS imported from the root layout
- `next/font/google`

The Pages Router does **not** use `app/layout.js` or route groups. Instead, it uses:

- `pages/_app.js` for global app setup
- `pages/*.js` for routes
- optional layout composition inside `_app.js` or inside individual pages
- `next/head` for page-specific metadata

## 2. High-Level Mapping

Use this mapping when rebuilding:

| Current App Router file | Pages Router equivalent |
| --- | --- |
| `app/layout.js` | `pages/_app.js` plus optional defaults in `pages/_document.js` |
| `app/(app)/layout.js` | shared app-shell layout component, wrapped around selected pages |
| `app/(app)/page.js` | `pages/index.js` |
| `app/(app)/projects/page.js` | `pages/projects/index.js` or `pages/projects.js` |
| `app/(auth)/login/page.js` | `pages/login.js` |
| `export const metadata = ...` | `<Head>` in each page |
| `app/_styles/globals.css` | `styles/globals.css` or keep same path and import in `_app.js` |

## 3. Recommended New Project Setup

Create a separate project first.

```bash
npx create-next-app@latest portfolio-cms-pages --js --eslint --tailwind --no-app
```

Notes:

- `--no-app` is the important part. It creates a Pages Router project instead of an App Router project.
- If the CLI version does not accept `--no-app`, run the command interactively and answer **No** when it asks whether to use the App Router.

Then move into the new project:

```bash
cd portfolio-cms-pages
```

## 4. Recommended Folder Structure in the New Project

You do not need to match this exactly, but this structure will make the migration straightforward:

```text
portfolio-cms-pages/
  pages/
    _app.js
    _document.js
    index.js
    login.js
    projects/
      index.js
  components/
    common/
    features/
    images/
    layout/
  layouts/
    AppShell.jsx
  public/
    bg/
    icons/
    placeholders/
    sidebar/
    logo.svg
  styles/
    globals.css
  jsconfig.json
```

Recommended reasoning:

- Put route files in `pages/`
- Move reusable UI out of `app/_components/` into `components/`
- Move the nested app layout into a normal component, for example `layouts/AppShell.jsx`
- Keep images and icons in `public/`
- Keep global styles in `styles/globals.css`

## 5. Files You Can Reuse Almost As-Is

These can mostly be copied into the new project with path cleanup:

- `app/_components/_common/*`
- `app/_components/_features/*`
- `app/_components/_images/*`
- `app/_components/_layout/*`
- `public/*`
- the CSS content from `app/_styles/globals.css`

What will likely need edits:

- import paths that currently start with `@/app/...`
- layout assumptions tied to `app/(app)/layout.js`
- metadata exports
- any page file currently living inside `app/`

## 6. Copy the Global CSS

In the new project:

1. Create `styles/globals.css`
2. Copy the contents of this repo’s `app/_styles/globals.css` into it

Example:

```css
@import "tailwindcss";

@plugin 'daisyui' {
  themes: nord --default, dark --prefersdark;
}

@theme {
  --font-heading: var(--font-poiret);
  --font-primary: var(--font-geist-sans);
}

[data-theme='light'] {
  --color-base-300: var(--color-base-200);
}

[data-theme='dark'] {
  --color-base-300: oklch(15% 0 0);
}
```

Then import that file from `pages/_app.js`.

## 7. Recreate the Root App Wrapper

In App Router, your current root wrapper does this:

- imports global CSS
- loads Google fonts with `next/font/google`
- sets `lang="en"`
- sets `data-theme="nord"`
- applies body classes

In a Pages Router app, split that responsibility like this:

- `pages/_app.js`: fonts, global CSS, app wrapper
- `pages/_document.js`: `<Html lang="en">`, `<body>`, optional root attributes

### `pages/_app.js`

```jsx
import "@/styles/globals.css";
import { Geist, Poiret_One } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poiret = Poiret_One({
  variable: "--font-poiret",
  subsets: ["latin"],
  weight: ["400"],
});

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <div className={`${geistSans.variable} ${poiret.variable}`}>
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
}
```

### `pages/_document.js`

```jsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" data-theme="nord">
      <Head />
      <body className="min-h-screen flex flex-col bg-base-100 text-base-content text-base antialiased font-primary!">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

Why this split matters:

- `_app.js` replaces the App Router root React wrapper
- `_document.js` is where Pages Router lets you control `<html>` and `<body>`

## 8. Recreate the Nested `(app)` Layout as a Shared Layout Component

Your current `app/(app)/layout.js` is a nested layout for dashboard-style pages.

In Pages Router, create a normal component for that, for example:

`layouts/AppShell.jsx`

```jsx
import Image from "next/image";
import Sidebar from "@/components/layout/Sidebar";
import bgWaves from "@/public/bg/waves.svg";

export default function AppShell({ children }) {
  return (
    <Sidebar>
      <div className="flex-1 p-4 min-h-screen">
        <Image
          src={bgWaves}
          fill
          alt=""
          className="object-cover object-top pointer-events-none"
        />
        <main className="relative z-5 px-4 lg:px-10 xl:px-16 2xl:px-36">
          {children}
        </main>
      </div>
    </Sidebar>
  );
}
```

This is the Pages Router replacement for `app/(app)/layout.js`.

## 9. Apply the Shared Layout Only to the Right Pages

You probably do **not** want the dashboard sidebar on every page. For example:

- `/` should use the app shell
- `/projects` should use the app shell
- `/login` probably should **not** use the app shell

The cleanest Pages Router pattern is `getLayout`.

### Example `pages/index.js`

```jsx
import Head from "next/head";
import AppShell from "@/layouts/AppShell";
import CardGrid from "@/components/common/CardGrid";
import CardSmall from "@/components/common/CardSmall";
import Statistic from "@/components/common/Statistic";
import Title from "@/components/common/Title";
import ActivityTimeline from "@/components/features/activity/ActivityTimeline";

export default function DashboardPage() {
  return (
    <>
      <Head>
        <title>Dashboard | Mako</title>
        <meta
          name="description"
          content="A portfolio CMS for easy customisation of portfolios."
        />
      </Head>

      <div className="flex flex-col gap-8">
        {/* page content */}
      </div>
    </>
  );
}

DashboardPage.getLayout = function getLayout(page) {
  return <AppShell>{page}</AppShell>;
};
```

### Example `pages/projects/index.js`

```jsx
import Head from "next/head";
import AppShell from "@/layouts/AppShell";
import Button from "@/components/common/Button";
import CardGrid from "@/components/common/CardGrid";
import CardLarge from "@/components/common/CardLarge";
import Title from "@/components/common/Title";
import FilterIcon from "@/components/images/icons/FilterIcon";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects | Mako</title>
        <meta
          name="description"
          content="A portfolio CMS for easy customisation of portfolios."
        />
      </Head>

      <div className="flex flex-col gap-8">
        {/* page content */}
      </div>
    </>
  );
}

ProjectsPage.getLayout = function getLayout(page) {
  return <AppShell>{page}</AppShell>;
};
```

### Example `pages/login.js`

```jsx
import Head from "next/head";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login | Mako</title>
        <meta
          name="description"
          content="A portfolio CMS for easy customisation of portfolios."
        />
      </Head>

      <main>{/* login UI */}</main>
    </>
  );
}
```

## 10. Replace `metadata` with `next/head`

Your current app uses:

```jsx
export const metadata = {
  title: "Dashboard",
};
```

That does not work in the Pages Router.

Replace it with:

```jsx
import Head from "next/head";

<Head>
  <title>Dashboard | Mako</title>
  <meta
    name="description"
    content="A portfolio CMS for easy customisation of portfolios."
  />
</Head>
```

Practical rule:

- App Router `metadata` becomes page-level `<Head>`
- root default metadata becomes repeated defaults, or a shared SEO helper component

If you want to avoid repeating the same description on every page, create a small reusable component like `components/common/Seo.jsx`.

## 11. Route-Group Migration Rules

The App Router route groups `(app)` and `(auth)` are organizational only. They do not appear in the URL.

So these mappings become:

- `app/(app)/page.js` -> `pages/index.js`
- `app/(app)/projects/page.js` -> `pages/projects/index.js`
- `app/(auth)/login/page.js` -> `pages/login.js`

Do **not** create folders named `(app)` or `(auth)` in the Pages Router project.

## 12. Import Path Cleanup

Your current project mixes relative imports and alias imports such as:

```jsx
import Button from "@/app/_components/_common/Button";
```

In the new project, those `@/app/...` paths should be changed to match the new structure, for example:

```jsx
import Button from "@/components/common/Button";
```

Recommended `jsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

You already use the alias pattern, so this will keep migration simple.

## 13. Recommended Component Folder Renames

Your current component folders are valid, but they are very App-Router-specific in naming:

- `app/_components/_common`
- `app/_components/_features`
- `app/_components/_images`
- `app/_components/_layout`

In the new project, I recommend flattening the naming slightly:

| Current | Recommended new location |
| --- | --- |
| `app/_components/_common` | `components/common` |
| `app/_components/_features/_activity` | `components/features/activity` |
| `app/_components/_features/_layout` | `components/features/layout` |
| `app/_components/_images/_icons` | `components/images/icons` |
| `app/_components/_images/_sidebar` | `components/images/sidebar` |
| `app/_components/_layout` | `components/layout` |

This is optional, but it will make the Pages Router project easier to read.

## 14. Special Notes for the Current Components

### `DarkMode.jsx`

This component currently uses:

- React state
- `document.documentElement.setAttribute(...)`

That is fine in the Pages Router. It remains a client-side React component. You do **not** need `"use client"` in the Pages Router.

Suggested improvement while migrating:

- initialize the theme from the current document attribute or local storage
- persist the theme after toggling

That is optional, but it will avoid resetting to `"nord"` on refresh.

### `Sidebar.jsx`, `Header.jsx`, `SidebarItems.jsx`

These should work in Pages Router with little or no behavior change because:

- `next/link` still works
- `next/image` still works
- they are normal React components

What to check:

- import paths
- any references to old folder names

### `CardLarge.jsx`

This should also migrate cleanly. `next/image` works in the Pages Router the same way for your current usage.

## 15. Tailwind and DaisyUI Notes

Your current project uses:

- Tailwind CSS 4
- DaisyUI
- `@tailwindcss/postcss`

In the new project, keep the same versions if you want minimal styling drift.

Checklist:

1. Install the same dependencies used for styling.
2. Copy the `postcss.config.mjs` setup if needed.
3. Ensure your global CSS still includes the DaisyUI plugin block.

If your new project’s starter template generates slightly different Tailwind config conventions, prefer the conventions generated by that starter and then merge your DaisyUI/global theme rules into them.

## 16. Step-by-Step Migration Order

Follow this order to reduce errors:

1. Create the new Pages Router project.
2. Configure `jsconfig.json` with the `@/*` alias.
3. Copy `public/` assets.
4. Copy global CSS into `styles/globals.css`.
5. Build `pages/_app.js`.
6. Build `pages/_document.js`.
7. Move reusable components into `components/`.
8. Create `layouts/AppShell.jsx`.
9. Recreate `pages/index.js`.
10. Recreate `pages/projects/index.js`.
11. Recreate `pages/login.js`.
12. Replace all App Router `metadata` exports with `<Head>`.
13. Fix import paths.
14. Run the app and fix any missing module or path issues.
15. Only after the UI is stable, add any data fetching or backend integration.

## 17. Minimum Viable File Set

If you want the fastest possible reproduction, focus on creating these files first:

```text
pages/_app.js
pages/_document.js
pages/index.js
pages/projects/index.js
components/layout/Sidebar.jsx
components/layout/Header.jsx
components/features/layout/DarkMode.jsx
components/features/layout/SidebarItems.jsx
layouts/AppShell.jsx
styles/globals.css
public/...
```

Once those work, migrate the smaller presentational components.

## 18. Common Migration Mistakes

### Mistake: leaving files under `app/`

In the new project, route files must live under `pages/`, not `app/`.

### Mistake: trying to use `export const metadata`

That is App Router syntax. Use `next/head` in the Pages Router.

### Mistake: expecting nested layouts to happen automatically

In the Pages Router, layouts are composed manually through `_app.js` or `getLayout`.

### Mistake: copying imports without changing paths

Any import like `@/app/...` must be updated.

### Mistake: putting `lang` or body classes only in `_app.js`

For the Pages Router, `<Html>` and `<body>` customisation belongs in `_document.js`.

### Mistake: copying route-group folder names

Folders like `(app)` are an App Router convention. Do not recreate them in `pages/`.

## 19. Suggested Project-Specific Route Rebuild

Based on this repo, rebuild these routes first:

### `/`

Source:

- `app/(app)/page.js`
- wrapped by `app/(app)/layout.js`
- root styles/fonts from `app/layout.js`

Target:

- `pages/index.js`
- `getLayout` -> `AppShell`

### `/projects`

Source:

- `app/(app)/projects/page.js`
- wrapped by `app/(app)/layout.js`

Target:

- `pages/projects/index.js`
- `getLayout` -> `AppShell`

### `/login`

Source:

- `app/(auth)/login/page.js`

Target:

- `pages/login.js`

Note:

- the current source file appears empty, so you may need to design this page from scratch in the new project

## 20. Optional Refinements After Migration

Once the Pages Router version is working, consider these cleanup improvements:

1. Create a reusable `Seo` component to avoid repeating `<Head>` boilerplate.
2. Persist dark mode with `localStorage`.
3. Centralize project demo data into a `data/` file instead of keeping it inside `pages/projects/index.js`.
4. Rename component directories to remove leading underscores.
5. Add active-link styling in `SidebarItems` using `useRouter()` from `next/router`.

## 21. Verification Checklist

Before you consider the migration complete, confirm:

- `npm run dev` starts without module resolution errors
- `/` renders with sidebar + header + background image
- `/projects` renders with sidebar + project cards
- `/login` renders without the dashboard shell unless intended
- fonts are applied
- `data-theme="nord"` is active on first load
- dark mode toggle still works
- all images under `public/` resolve correctly
- there are no remaining imports from `@/app/...`
- there are no `metadata` exports left in route files

## 22. If You Want the Simplest Possible Strategy

The simplest migration strategy is:

1. Create a Pages Router project.
2. Copy `public/`.
3. Copy all components into `components/`.
4. Create `_app.js` and `_document.js`.
5. Turn `app/(app)/layout.js` into `layouts/AppShell.jsx`.
6. Convert each `page.js` into a `pages/...` file.
7. Replace `metadata` with `<Head>`.
8. Fix imports until the app compiles cleanly.

That approach is enough for this repo because the current app does not use the more complex App Router-only features like:

- server actions
- route handlers
- parallel routes
- loading/error route files
- `generateMetadata`
- `generateStaticParams`

## 23. Official References

- Pages Router overview: https://nextjs.org/docs/pages
- Custom App (`pages/_app.js`): https://nextjs.org/docs/pages/building-your-application/routing/custom-app
- Pages and layouts: https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts

