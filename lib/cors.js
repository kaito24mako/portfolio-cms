// * CORS was preventing me from changing the database within two different ports
// * used AI...not quite sure how it works

const DEFAULT_ALLOWED_METHODS = "GET, POST, PUT, DELETE, OPTIONS";
const DEFAULT_ALLOWED_HEADERS = "Content-Type, x-api-key";

function getAllowedOrigin(req) {
  const configuredOrigin = process.env.CORS_ORIGIN?.trim();

  if (configuredOrigin) return configuredOrigin;

  return req.headers.get("origin") ?? "*";
}

export function getCorsHeaders(req) {
  return {
    "Access-Control-Allow-Origin": getAllowedOrigin(req),
    "Access-Control-Allow-Methods": DEFAULT_ALLOWED_METHODS,
    "Access-Control-Allow-Headers": DEFAULT_ALLOWED_HEADERS,
  };
}

export function jsonWithCors(data, req, init = {}) {
  return Response.json(data, {
    ...init,
    headers: {
      ...getCorsHeaders(req),
      ...(init.headers ?? {}),
    },
  });
}

export function textWithCors(message, req, init = {}) {
  return new Response(message, {
    ...init,
    headers: {
      ...getCorsHeaders(req),
      ...(init.headers ?? {}),
    },
  });
}

export function optionsWithCors(req) {
  return new Response(null, {
    status: 204,
    headers: getCorsHeaders(req),
  });
}
