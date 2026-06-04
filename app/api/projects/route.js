import { getAllProjects, postProject } from "@/controllers/projects";
import { connectDb } from "@/lib/connectDb";
import { jsonWithCors, optionsWithCors, textWithCors } from "@/lib/cors";
import { isAuthorised } from "@/lib/auth";
import { getErrorResponse, denyAccess } from "@/lib/errorHandler";

//* /api/projects

// * GET
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

// * POST
export async function POST(req) {
  if (!isAuthorised(req)) {
    const { message, status } = getErrorResponse(
      denyAccess("No API key provided"),
    );
    return textWithCors(message, req, { status });
  }

  try {
    await connectDb();

    const body = await req.json();

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
