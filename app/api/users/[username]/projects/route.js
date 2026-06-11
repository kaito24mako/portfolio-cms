import { getAllProjects, postProject } from "@/controllers/projects";
import { connectDb } from "@/lib/connectDb";
import { jsonWithCors, optionsWithCors, textWithCors } from "@/lib/cors";
import { requireAuth } from "@/lib/auth";
import { getErrorResponse } from "@/lib/errorHandler";
import { getUserByUsername } from "@/controllers/users";
import { denyAccess } from "@/lib/errorHandler";

//* /api/projects

// * GET
export async function GET(req, { params }) {
  try {
    await connectDb();

    const { username } = await params;

    // require authorization to access all projects - only published projects are public
    const authUser = requireAuth(req); // verifies token from x-auth-token
    const user = await getUserByUsername(username);

    if (authUser.id !== user.id) {
      throw denyAccess("No authorization to access these projects");
    }

    const projects = await getAllProjects(user.id);

    // sends project as JSON with CORS headers added
    return jsonWithCors(projects, req);
  } catch (err) {
    const { message, status } = getErrorResponse(err);
    // sends error message as a text response with status and CORS headers
    return textWithCors(message, req, { status });
  }
}

// * POST
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
