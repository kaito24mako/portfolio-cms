import { getAllProjects, postProject } from "@/controllers/projects";
import { connectDb } from "@/lib/connectDb";
import { isAuthorised } from "@/lib/auth";

// * GET /api/projects
export async function GET() {
  try {
    await connectDb();

    const projects = await getAllProjects();

    return Response.json(projects);
  } catch (err) {
    return new Response(err.message, { status: 404 });
  }
}

// * POST /api/projects
export async function POST(req) {
  if (!isAuthorised(req)) {
    return new Response("Access denied - Unauthorised", { status: 401 });
  }

  try {
    await connectDb();

    const body = await req.json();
    const project = await postProject(body);

    return Response.json(project);
  } catch (err) {
    return new Response(err.message, { status: 500 });
  }
}
