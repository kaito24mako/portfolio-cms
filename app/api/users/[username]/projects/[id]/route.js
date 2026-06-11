import {
  getProjectById,
  putProject,
  deleteProject,
} from "@/controllers/projects";
import { connectDb } from "@/lib/connectDb";
import { jsonWithCors, optionsWithCors, textWithCors } from "@/lib/cors";
import { getErrorResponse, denyAccess, notFound } from "@/lib/errorHandler";
import { requireAuth } from "@/lib/auth";
import { getUserByUsername } from "@/controllers/users";

//* /api/projects/[id]

//* GET - public
export async function GET(req, { params }) {
  try {
    await connectDb();

    const { username, id } = await params;

    // vertify ownership of project to current user
    const user = await getUserByUsername(username);
    const project = await getProjectById(id);
    if (project.userId !== user.id) {
      throw denyAccess("No authorization to access this project");
    }

    return jsonWithCors(project, req);
  } catch (err) {
    const { message, status } = getErrorResponse(err);
    return textWithCors(message, req, { status });
  }
}

//* PUT - private
export async function PUT(req, { params }) {
  try {
    await connectDb();

    const { username, id } = await params;

    // verify username to current user
    const authUser = requireAuth(req);
    const user = await getUserByUsername(username);
    if (authUser.id !== user.id) {
      throw denyAccess("No authorization to access this project");
    }

    // vertify ownership of project to current user
    const existingProject = await getProjectById(id);
    if (existingProject.userId !== user.id) {
      throw notFound("Project not found");
    }

    const data = await req.json();
    const project = await putProject(id, data);

    return jsonWithCors(project, req);
  } catch (err) {
    const { message, status } = getErrorResponse(err);
    return textWithCors(message, req, { status });
  }
}

//* DELETE - private
export async function DELETE(req, { params }) {
  try {
    await connectDb();

    const { username, id } = await params;

    // verify username to current user
    const authUser = requireAuth(req);
    const user = await getUserByUsername(username);
    if (authUser.id !== user.id) {
      throw denyAccess("No authorization to access this project");
    }

    // vertify ownership of project to current user
    const existingProject = await getProjectById(id);
    if (existingProject.userId !== user.id) {
      throw notFound("Project not found");
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
