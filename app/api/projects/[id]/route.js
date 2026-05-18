import { getProject, putProject, deleteProject } from "@/controllers/projects";

import { connectDb } from "@/lib/connectDb";
import { jsonWithCors, optionsWithCors, textWithCors } from "@/lib/cors";
import { isAuthorised } from "@/lib/auth";
import { getErrorResponse, unauthorised } from "@/lib/errors";

// * GET
export async function GET(req, { params }) {
  try {
    await connectDb();

    const { id } = await params;
    const project = await getProject(id);

    return jsonWithCors(project, req);
  } catch (err) {
    const { message, status } = getErrorResponse(err);
    return textWithCors(message, req, { status });
  }
}

// * PUT
export async function PUT(req, { params }) {
  if (!isAuthorised(req)) {
    const { message, status } = getErrorResponse(unauthorised());
    return textWithCors(message, req, { status });
  }

  try {
    await connectDb();

    const { id } = await params;
    const data = await req.json();

    const project = await putProject(id, data);

    // same as res.send
    return jsonWithCors(project, req);
  } catch (err) {
    const { message, status } = getErrorResponse(err);
    return textWithCors(message, req, { status });
  }
}

// * DELETE
export async function DELETE(req, { params }) {
  if (!isAuthorised(req)) {
    const { message, status } = getErrorResponse(unauthorised());
    return textWithCors(message, req, { status });
  }

  try {
    await connectDb();

    const { id } = await params;
    const project = await deleteProject(id);

    return jsonWithCors(project, req);
  } catch (err) {
    const { message, status } = getErrorResponse(err);
    return textWithCors(message, req, { status });
  }
}

export function OPTIONS(req) {
  return optionsWithCors(req);
}
