import {
  getProjectById,
  putProject,
  deleteProject,
} from "@/controllers/projects";
import { connectDb } from "@/lib/connectDb";
import { jsonWithCors, optionsWithCors, textWithCors } from "@/lib/cors";
import { getErrorResponse, denyAccess } from "@/lib/errorHandler";
import { requireAuth } from "@/lib/auth";

//* /api/projects/[id]

//* GET
export async function GET(req, { params }) {
  try {
    await connectDb();

    const { username, id } = await params;

    // require authorization
    const authUser = requireAuth(req);
    const user = await getUserByUsername(username);

    if (authUser.id !== user.id) {
      throw denyAccess("No authorization to access this project");
    }

    const project = await getProjectById(id);

    return jsonWithCors(project, req);
  } catch (err) {
    const { message, status } = getErrorResponse(err);
    return textWithCors(message, req, { status });
  }
}

//* PUT
export async function PUT(req, { params }) {
  try {
    await connectDb();

    const { username, id } = await params;

    const authUser = requireAuth(req);
    const user = await getUserByUsername(username);

    if (authUser.id !== user.id) {
      throw denyAccess("No authorization to access this project");
    }

    const data = await req.json();
    const project = await putProject(id, data);

    return jsonWithCors(project, req);
  } catch (err) {
    const { message, status } = getErrorResponse(err);
    return textWithCors(message, req, { status });
  }
}

//* DELETE
export async function DELETE(req, { params }) {
  try {
    await connectDb();

    const { username, id } = await params;

    const authUser = requireAuth(req);
    const user = await getUserByUsername(username);

    if (authUser.id !== user.id) {
      throw denyAccess("No authorization to access this project");
    }

    const project = await deleteProject(id);

    return jsonWithCors(project, req);
  } catch (err) {
    const { message, status } = getErrorResponse(err);
    return textWithCors(message, req, { status });
  }
}

// added by AI...not sure what it does yet
export function OPTIONS(req) {
  return optionsWithCors(req);
}
