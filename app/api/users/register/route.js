import { postUser } from "@/controllers/users";
import { connectDb } from "@/lib/connectDb";
import { jsonWithCors, optionsWithCors, textWithCors } from "@/lib/cors";
import { getErrorResponse } from "@/lib/errorHandler";

//* /api/users/register

//* GET
export async function POST(req) {
  try {
    await connectDb();

    const body = await req.json();
    const user = await postUser(body);

    return jsonWithCors(user, req);
  } catch (err) {
    const { message, status } = getErrorResponse(err);
    return textWithCors(message, req, { status });
  }
}

export function OPTIONS(req) {
  return optionsWithCors(req);
}
