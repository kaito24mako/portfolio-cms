import { getAllProjects, postProject } from "@/controllers/projects";
import { connectDb } from "@/lib/connectDb";
import { jsonWithCors, optionsWithCors, textWithCors } from "@/lib/cors";
import { requireAuth } from "@/lib/auth";
import { getErrorResponse } from "@/lib/errorHandler";
import { getUserByUsername } from "@/controllers/users";

//* /api/projects

// * GET
export async function GET(req, { params }) {
  try {
    await connectDb();

    const { username } = await params;

    const authUser = requireAuth(req);
    const user = await getUserByUsername(username);

    const projects = await getAllProjects(user.id);

    return jsonWithCors(projects, req);

    // ? before CORS
    //  return Response.json(projects);
  } catch (err) {
    const { message, status } = getErrorResponse(err);
    return textWithCors(message, req, { status });
    // return new Response(err.message, { status: 404 });
  }
}

// * POST /api/projects
export async function POST(req) {
  try {
    await connectDb();

    const user = requireAuth(req);
    const body = await req.json();

    body.userId = user.id;

    const project = await postProject(body);

    return jsonWithCors(project, req);
  } catch (err) {
    const { message, status } = getErrorResponse(err);
    return textWithCors(message, req, { status });
  }
}

export function OPTIONS(req) {
  return optionsWithCors(req);
}
