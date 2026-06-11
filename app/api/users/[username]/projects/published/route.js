import { getPublishedProjects } from "@/controllers/projects";
import { connectDb } from "@/lib/connectDb";
import { jsonWithCors, optionsWithCors, textWithCors } from "@/lib/cors";
import { getErrorResponse } from "@/lib/errorHandler";
import { getUserByUsername } from "@/controllers/users";

//* /api/projects/published

// * GET
export async function GET(req, { params }) {
  try {
    await connectDb();

    const { username } = await params;

    const user = await getUserByUsername(username);
    const projects = await getPublishedProjects(user.id);

    return jsonWithCors(projects, req);
  } catch (err) {
    const { message, status } = getErrorResponse(err);
    return textWithCors(message, req, { status });
  }
}

export function OPTIONS(req) {
  return optionsWithCors(req);
}
