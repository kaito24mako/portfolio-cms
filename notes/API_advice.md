That is very close to what Next.js currently recommends for App Router forms and mutations:

Forms with Server Actions: https://nextjs.org/docs/app/guides/forms

Mutating data / Server Functions: https://nextjs.org/docs/app/getting-started/mutating-data

Fetching data in Server Components: https://nextjs.org/docs/app/getting-started/fetching-data

Route Handlers: https://nextjs.org/docs/app/getting-started/route-handlers

The practical rule I’d use for your project:

Use server actions when the user is submitting a form in your own app

Use route handlers only when you need an actual HTTP API endpoint

Use TanStack Query later if you specifically need rich client syncing, optimistic UI, polling, or client-side shared cache

So for your portfolio CMS, the simplest path is probably:

keep pages server-rendered
add a createProject server action
later add updateProject and deleteProject
only introduce React Query if the UI becomes heavily interactive

One important correction to your current code: app/(app)/projects/new/page.jsx should not POST during render. That page should render a form, and the form should call a server action on submit.
