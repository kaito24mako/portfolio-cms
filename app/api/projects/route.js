import { getAllProjects, postProject } from "@/controllers/projects";

import { connectDb } from "@/lib/connectDb";
import { jsonWithCors, optionsWithCors, textWithCors } from "@/lib/cors";
import { isAuthorised } from "@/lib/auth";
import { getErrorResponse, unauthorised } from "@/lib/errors";

// * GET /api/projects
export async function GET(req) {
  try {
    await connectDb();

    const projects = await getAllProjects();

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
  if (!isAuthorised(req)) {
    const { message, status } = getErrorResponse(unauthorised());
    return textWithCors(message, req, { status });
  }

  try {
    await connectDb();

    const body = await req.body();

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
