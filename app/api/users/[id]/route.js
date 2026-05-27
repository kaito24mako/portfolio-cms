import { getUserById } from "@/controllers/users";
import { requireAuth } from "@/lib/auth";
import { connectDb } from "@/lib/connectDb";
import { jsonWithCors, optionsWithCors, textWithCors } from "@/lib/cors";
import { getErrorResponse } from "@/lib/errorHandler";

//* /api/users/[id]

//* GET
export async function GET(req, { params }) {
  try {
    await connectDb();

    const { id } = await params;

    const authUser = requireAuth(req);

    const user = await getUserById(id);

    // the response json thats sent with the operation
    return jsonWithCors({ authUser, user }, req);
  } catch (err) {
    const { message, status } = getErrorResponse(err);
    return textWithCors(message, req, { status });
  }
}

export function OPTIONS(req) {
  return optionsWithCors(req);
}
