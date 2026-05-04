import { getAllProjects, postProject } from "@/controllers/projects";

// * GET /api/projects
export async function GET() {
  try {
    const projects = await getAllProjects();
    return Response.json(projects);
  } catch (err) {
    return new Response(err.message, { status: 500 });
  }
}

// * POST /api/projects
export async function POST(req) {
  try {
    const body = await req.json();
    const result = await postProject(body);

    return Response.json(result);
  } catch (err) {
    return new Response(err.message, { status: 500 });
  }
}
