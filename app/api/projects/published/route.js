import { getPublishedProjects } from "@/controllers/projects";
import { connectDb } from "@/lib/connectDb";
import { jsonWithCors, optionsWithCors, textWithCors } from "@/lib/cors";
import { getErrorResponse } from "@/lib/errorHandler";

//* /api/projects/published

// * GET
export async function GET(req) {
  try {
    await connectDb();
    const projects = await getPublishedProjects();
    return jsonWithCors(projects, req);
  } catch (err) {
    const { message, status } = getErrorResponse(err);
    return textWithCors(message, req, { status });
  }
}

export function OPTIONS(req) {
  return optionsWithCors(req);
}
