import jwt from "jsonwebtoken";
import { denyAccess, badRequest } from "./errorHandler";
import { cookies } from "next/headers";

export function isAuthorised(req) {
  // headers.get reads the custom HTTP header named x-auth-token
  const apiKey = req.headers.get("x-auth-token");

  if (!apiKey || !process.env.API_KEY) return false;

  if (apiKey !== process.env.API_KEY) return false;

  // compare HTTP's x-api-key to the actual key
  return apiKey === process.env.API_KEY;
}

export function requireAuth(req) {
  const token = req.headers.get("x-auth-token");

  if (!token) {
    throw denyAccess("No token provided");
  }

  try {
    const decoded = jwt.verify(token, process.env.API_KEY);
    return decoded;
  } catch {
    throw badRequest("Invalid token");
  }
}

// store jwt in cookies to authenticate and get user data
export async function requireCookieAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth-token")?.value;

  if (!token) {
    throw denyAccess("No token provided");
  }

  try {
    return jwt.verify(token, process.env.API_KEY);
  } catch {
    throw badRequest("Invalid token");
  }
}
