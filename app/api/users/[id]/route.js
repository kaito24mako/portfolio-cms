import { getUserById } from "@/controllers/projects";
import { connectDb } from "@/lib/connectDb";
import { jsonWithCors, optionsWithCors, textWithCors } from "@/lib/cors";
import { getErrorResponse } from "@/lib/errorHandler";

//* /api/users/[id]

//* GET
export async function GET(req, { params }) {
  try {
    await connectDb();

    const { id } = await params;
    const user = await getUserById(id);

    return jsonWithCors(user, req);
  } catch (err) {
    const { message, status } = getErrorResponse(err);
    return textWithCors(message, req, { status });
  }
}

export function OPTIONS(req) {
  return optionsWithCors(req);
}
