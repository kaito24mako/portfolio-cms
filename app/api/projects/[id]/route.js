import { getProject, putProject, deleteProject } from "@/controllers/projects";
import { connectDb } from "@/lib/connectDb";
import { jsonWithCors, optionsWithCors, textWithCors } from "@/lib/cors";
import { isAuthorised } from "@/lib/auth";

// * GET
export async function GET(req, { params }) {
  try {
    await connectDb();

    const { id } = await params;
    const project = await getProject(id);

    return jsonWithCors(project, req);

    // ? before CORS
    // return Response.json(project);
  } catch (err) {
    return textWithCors(err.message, req, { status: 500 });
    // return new Response(err.message, { status: 500 });
  }
}

// * PUT
export async function PUT(req, { params }) {
  if (!isAuthorised(req)) {
    return textWithCors("Access denied - Unauthorised", req, { status: 401 });
    // return new Response("Access denied - Unauthorised", { status: 401 });
  }

  try {
    await connectDb();

    // same as req.body
    const data = await req.json();
    // same as req.params.id
    const { id } = await params;

    const project = await putProject(id, data);

    // same as res.send
    return jsonWithCors(project, req);
    // return Response.json(project);
  } catch (err) {
    return textWithCors(err.message, req, { status: 500 });
    // return new Response(err.message, { status: 500 });
  }
}

// * DELETE
export async function DELETE(req, { params }) {
  if (!isAuthorised(req)) {
    return textWithCors("Access denied - Unauthorised", req, { status: 401 });
    // return new Response("Access denied - Unauthorised", { status: 401 });
  }

  try {
    await connectDb();

    const { id } = await params;
    const project = await deleteProject(id);

    return jsonWithCors(project, req);
    // return Response.json(project);
  } catch (err) {
    return textWithCors(err.message, req, { status: 500 });
    // return new Response(err.message, { status: 500 });
  }
}

export function OPTIONS(req) {
  return optionsWithCors(req);
}
