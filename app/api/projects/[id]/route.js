import { getProject, putProject, deleteProject } from "@/controllers/projects";
import { initDb } from "@/lib/initDb";

// * GET
export async function GET(req, { params }) {
  try {
    await initDb();

    const { id } = await params;
    const project = await getProject(id);

    return Response.json(project);
  } catch (err) {
    return new Response(err.message, { status: 500 });
  }
}

// * PUT
export async function PUT(req, { params }) {
  try {
    await initDb();

    //? same as req.body
    const data = await req.json();
    //? same as req.params.id
    const { id } = await params;

    const project = await putProject(id, data);

    //? same as res.send
    return Response.json(project);
  } catch (err) {
    return new Response(err.message, { status: 500 });
  }
}

// * DELETE
export async function DELETE(req, { params }) {
  try {
    await initDb();

    const { id } = await params;
    const project = await deleteProject(id);

    return Response.json(project);
  } catch (err) {
    return new Response(err.message, { status: 500 });
  }
}
