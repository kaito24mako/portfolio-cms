import { getAllUsers } from "@/controllers/users";
import { connectDb } from "@/lib/connectDb";
import { jsonWithCors, optionsWithCors, textWithCors } from "@/lib/cors";
import { getErrorResponse } from "@/lib/errorHandler";
import { requireAuth } from "@/lib/auth";

// * /api/users

// * GET
export async function GET(req) {
  try {
    await connectDb();

    const authUser = requireAuth(req);

    const users = await getAllUsers();

    return jsonWithCors({ authUser, users }, req);
  } catch (err) {
    const { message, status } = getErrorResponse(err);
    return textWithCors(message, req, { status });
  }
}

export function OPTIONS(req) {
  return optionsWithCors(req);
}
