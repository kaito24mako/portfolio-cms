# Projects Error Handling

This file explains how error handling currently works for the projects CRUD flow.

## The basic idea

Your project now handles errors in 3 steps:

1. A controller detects a problem and throws an error.
2. The API route catches that error.
3. The API route turns the error into an HTTP response with a status code and message.

So the flow is:

`controller -> throw error -> route catch -> HTTP response`

## 1. Custom app errors

File: [lib/errors.js](/Users/kaito24mako/programming/diploma/next_js/assessment/portfolio-cms/lib/errors.js)

This file contains your custom error system.

### `AppError`

`AppError` is a custom class that extends the normal JavaScript `Error`.

Normal `Error`:

```js
throw new Error("Something went wrong");
```

Custom `AppError`:

```js
throw new AppError("Project not found", 404);
```

The difference is that `AppError` stores:

- the error message
- the HTTP status code

That is useful because your API route needs both pieces of information.

### Helper functions

Instead of writing `new AppError(...)` every time, the file gives you helper functions:

- `badRequest(message)` -> status `400`
- `unauthorised(message)` -> status `401`
- `notFound(message)` -> status `404`
- `conflict(message)` -> status `409`

Example:

```js
throw notFound("Project not found");
```

That is shorter and easier to read.

### `getErrorResponse(err)`

This function checks the error type.

If the error is one of your custom `AppError`s, it returns:

```js
{
  message: err.message,
  status: err.status
}
```

If the error is not one of your custom errors, it returns:

```js
{
  message: "Internal server error",
  status: 500
}
```

This protects your API from leaking unknown internal errors directly.

## 2. Controllers: where errors are created

File: [controllers/projects.js](/Users/kaito24mako/programming/diploma/next_js/assessment/portfolio-cms/controllers/projects.js)

The controller is responsible for business logic.

That means:

- checking if required data exists
- checking if a project exists
- checking if a title is duplicated
- throwing the correct error when something is wrong

The controller does not send HTTP responses.
It only returns data or throws errors.

### Examples

#### Missing project id

```js
if (!id) {
  throw badRequest("Project id is required");
}
```

Meaning:

- the request was invalid
- the client should get status `400`

#### Project not found

```js
if (!project) {
  throw notFound("Project not found");
}
```

Meaning:

- the request was valid
- but that resource does not exist
- the client should get status `404`

#### Duplicate title

```js
if (sameProject) {
  throw conflict("This project title already exists");
}
```

Meaning:

- the request conflicts with existing data
- the client should get status `409`

#### Missing title

```js
if (!data?.title?.trim()) {
  throw badRequest("Project title is required");
}
```

Meaning:

- the user sent invalid input
- the client should get status `400`

## 3. API routes: where errors are caught

Files:

- [app/api/projects/route.js](/Users/kaito24mako/programming/diploma/next_js/assessment/portfolio-cms/app/api/projects/route.js)
- [app/api/projects/[id]/route.js](/Users/kaito24mako/programming/diploma/next_js/assessment/portfolio-cms/app/api/projects/%5Bid%5D/route.js)

The API routes call the controller functions inside `try/catch`.

Example shape:

```js
try {
  const project = await getProject(id);
  return jsonWithCors(project, req);
} catch (err) {
  const { message, status } = getErrorResponse(err);
  return textWithCors(message, req, { status });
}
```

### What this means

If the controller succeeds:

- the route returns normal JSON data

If the controller throws:

- the `catch` block receives the error
- `getErrorResponse(err)` reads the message and status
- the route sends that back to the client

So the route is the layer that decides:

- what response body to send
- what HTTP status code to send

## 4. Where errors are shown

### API clients

For requests made to `/api/projects` or `/api/projects/[id]`, the client receives:

- a response message
- an HTTP status code

Example:

- `"Project not found"` with status `404`
- `"This project title already exists"` with status `409`

### Server console

Database connection errors are logged in:

File: [lib/connectDb.js](/Users/kaito24mako/programming/diploma/next_js/assessment/portfolio-cms/lib/connectDb.js)

```js
console.error("Unable to connect to the database", err);
```

That means database connection failures appear in the server console.

### UI forms

At the moment, your form pages do not yet show these errors nicely inside the UI.

That means:

- API routes return correct status codes now
- but the create/edit form UI still needs its own error display layer if you want inline messages for users

## 5. Current status codes in this project

- `400 Bad Request`
  Used when the client sends invalid input.
  Example: missing `title`, missing `id`, invalid JSON body.

- `401 Unauthorised`
  Used when the request is not allowed.
  Example: failing `isAuthorised(req)`.

- `404 Not Found`
  Used when the requested project does not exist.

- `409 Conflict`
  Used when the request clashes with existing data.
  Example: duplicate project title.

- `500 Internal Server Error`
  Used for unexpected errors that are not one of your custom `AppError`s.

## 6. Beginner mental model

When learning error handling, think of it like this:

- `throw` means: "stop here, something is wrong"
- `catch` means: "I know how to handle that problem"

In your code:

- controllers `throw`
- routes `catch`

That separation is good because:

- controllers stay focused on logic
- routes stay focused on HTTP responses

## 7. Simple real examples

### Example A: User requests a missing project

1. Route calls `getProject(id)`.
2. Controller cannot find the project.
3. Controller throws `notFound("Project not found")`.
4. Route catches the error.
5. Route sends `"Project not found"` with status `404`.

### Example B: User tries to create a duplicate title

1. Route calls `postProject(body)`.
2. Controller finds another project with the same title.
3. Controller throws `conflict("This project title already exists")`.
4. Route catches the error.
5. Route sends that message with status `409`.

### Example C: User sends broken JSON

1. Route tries `await req.json()`.
2. Parsing fails.
3. Route throws `badRequest("Invalid JSON body")`.
4. Route catches it.
5. Route sends that message with status `400`.

## 8. What to build next

A good next step is mapping Sequelize validation errors into your custom error system.

That would let errors like invalid URLs return clean `400` responses too, instead of falling back to a generic `500`.
