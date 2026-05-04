# getProject Explanation (uses params)

Example code: `getProject` in `controllers/projects.js`

```js
export async function getProject(id) {
  const project = await Project.findByPk(parseInt(id));

  if (!project) {
    throw new Error("Project not found");
  }
  return project;
}
```

Step by step:

1. The function receives an `id` argument.
   In this app, that `id` usually comes from the URL, so it often starts as a string such as `"1"`.

2. `parseInt(id)` converts the string into a number.
   For example, `"1"` becomes `1`.

3. `Project.findByPk(...)` asks Sequelize to find a row by its primary key.
   `Pk` stands for primary key, which is usually the `id` column.

4. The result is stored in `project`.
   If Sequelize finds a matching row, `project` will contain that row as a model instance.
   If no matching row exists, `project` will be `null`.

5. `if (!project)` checks whether a project was found.

6. If no project exists, the function throws an error.
   That stops execution and passes the error back to the route handler.

7. If a project was found, the function returns it.

## `GET` in `app/api/projects/[id]/route.js`

```js
export async function GET(req, { params }) {
  try {
    await initDb();

    const project = await getProject(params.id);

    return Response.json(project);
  } catch (err) {
    console.error(err);
    return new Response(err.message, { status: 500 });
  }
}
```

Step by step:

1. Next.js runs this function when a `GET` request hits `/api/projects/[id]`.
   Example: `/api/projects/1`.

2. The function receives two inputs:
   `req`, which is the request object.
   `params`, which contains the dynamic route values from the URL.

3. The `try` block wraps the main logic.
   If any line inside fails, execution jumps to `catch`.

4. `await initDb()` ensures the database is initialized before querying it.
   In this project, that means `sequelize.sync()` has run so the tables exist.

5. `await getProject(params.id)` asks the controller to fetch the project whose `id` came from the URL.

6. If a project is found, `Response.json(project)` sends it back as JSON.

7. If an error happens, the `catch` block runs.

8. `console.error(err)` prints the error to the server console for debugging.

9. `new Response(err.message, { status: 500 })` sends the error message back to the client with HTTP status 500.
