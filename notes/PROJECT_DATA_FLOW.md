# Project Data Flow

This project stores and displays portfolio projects with a simple flow:

## 1. How project data is defined

- The `Project` model is defined in `models/projects.js`.
- It stores `title`, `description`, `siteUrl`, `githubUrl`, `status`, `tags`, and `updatedAt`.
- `status` is limited to `Published`, `Draft`, or `Archived`.
- `tags` is stored as an array of strings.
- `updatedAt` is reformatted by a Sequelize getter before it is returned to the app.

## 2. How data reaches the database

- Database access is set up in `utils/connection.js` with Sequelize + Postgres.
- `lib/connectDb.js` authenticates the connection and runs `sequelize.sync()`.
- The app calls `connectDb()` before reading or writing project data.

## 3. How projects are created and edited

- The create page at `app/(app)/projects/new/page.jsx` uses a server action.
- The edit page at `app/(app)/projects/[id]/edit/page.jsx` also uses a server action.
- Form inputs are rendered in `components/pages/ProjectPageTemplate.jsx`.
- When the form is submitted, the browser sends `FormData` to the server action.
- The action builds a plain object from fields like `title`, `description`, `siteUrl`, `githubUrl`, `status`, and `tags`.
- That object is passed to controller functions in `controllers/projects.js`.

## 4. How data is validated and manipulated

- `controllers/projects.js` contains the main project logic.
- `postProject()` checks for a required `title` and `status`, and blocks duplicate titles.
- `putProject()` checks that the project exists, requires `title` and `status`, and blocks renaming to an existing title.
- `deleteProject()` removes a project by id.
- Errors are converted into HTTP-safe messages by `lib/errorHandler.js`.

## 5. How data is fetched

There are two fetch patterns in this app:

- Server-rendered pages call controllers directly through `lib/getProjectsData.js`.
- API consumers use `app/api/projects/route.js` and `app/api/projects/[id]/route.js`.

### Server-side page flow

- `lib/getProjectsData.js` calls `connectDb()` and `getAllProjects()`.
- It converts Sequelize rows with `project.toJSON()`.
- It also merges placeholder images into each project before returning them.
- Pages like `app/(app)/page.jsx` and `app/(app)/projects/page.jsx` use this helper.

### API flow

- `GET /api/projects` returns all projects.
- `GET /api/projects/[id]` returns one project.
- `POST`, `PUT`, and `DELETE` are protected by the `x-api-key` header in `lib/auth.js`.
- API responses are wrapped with CORS headers from `lib/cors.js`.

## 6. How data is rendered

- The dashboard page uses project data to build summary stats with `components/features/dashboard/getProjectStats.js`.
- The projects page passes data into `ProjectsClientBody`, then `ProjectsList`.
- `ProjectsList` filters projects by status and search text on the client.
- Each project is rendered by `ProjectItem`, which shows the title, status, description, tags, links, image, and formatted `updatedAt`.

## 7. Important current behavior

- `lib/getProjectsData.js` exports a function named `getProjectById()`, but it actually fetches **all** projects.
- The form includes an `image` field in `ProjectPageTemplate.jsx`, but the current `Project` model and controller logic do not save an image field to the database.
- Placeholder images are currently attached in `lib/getProjectsData.js`, not stored per project record.
