import { postUser } from "@/controllers/users";
import { connectDb } from "@/lib/connectDb";
import { jsonWithCors, optionsWithCors, textWithCors } from "@/lib/cors";
import { getErrorResponse } from "@/lib/errorHandler";

//* /api/users/register

//* POST
export async function POST(req) {
  try {
    await connectDb();

    const body = await req.json();
    const { token, ...payload } = await postUser(body);

    return jsonWithCors(payload, req, {
      headers: {
        "x-auth-token": token,
      },
    });
  } catch (err) {
    const { message, status } = getErrorResponse(err);
    return textWithCors(message, req, { status });
  }
}

export function OPTIONS(req) {
  return optionsWithCors(req);
}
