import { login } from "@/controllers/auth";
import { connectDb } from "@/lib/connectDb";
import { jsonWithCors, optionsWithCors, textWithCors } from "@/lib/cors";
import { getErrorResponse } from "@/lib/errorHandler";

export async function POST(req) {
  try {
    await connectDb();

    const body = await req.json();
    const { token, ...payload } = await login(body);

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
