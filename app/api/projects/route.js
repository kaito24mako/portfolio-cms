import { getAllProjects, postProject } from "@/controllers/projects";
import { connectDb } from "@/lib/connectDb";
import { jsonWithCors, optionsWithCors, textWithCors } from "@/lib/cors";
import { isAuthorised } from "@/lib/auth";

// * GET /api/projects
export async function GET(req) {
  try {
    await connectDb();

    const projects = await getAllProjects();

    return jsonWithCors(projects, req);

    // ? before CORS
    //  return Response.json(projects);
  } catch (err) {
    return textWithCors(err.message, req, { status: 404 });
    // return new Response(err.message, { status: 404 });
  }
}

// * POST /api/projects
export async function POST(req) {
  if (!isAuthorised(req)) {
    return textWithCors("Access denied - Unauthorised", req, { status: 401 });
    // return new Response("Access denied - Unauthorised", { status: 401 });
  }

  try {
    await connectDb();

    const body = await req.json();
    const project = await postProject(body);

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
