export class ApiError extends Error {
  constructor(msg, status = 500) {
    super(msg);
    this.name = "ApiError";
    this.status = status;
  }
}

// 400 - bad request (such as a misformed input)
export function badRequest(msg) {
  return new ApiError(msg, 400);
}

// 401 - unauthorised request
export function denyAccess(msg = "Unauthorised") {
  return new ApiError(`Access denied: ${msg}`, 401);
}

// 403 - forbidden (no privilege)
export function forbidden(msg) {
  return new ApiError(`Access denied: ${msg}`, 403);
}

// 404 - not found
export function notFound(msg) {
  return new ApiError(`Resource not found: ${msg}`, 404);
}

// 409 - duplicates
export function conflict(msg) {
  return new ApiError(msg, 409);
}

// 412 - precondition failed
export function configError(msg) {
  return new ApiError(`Precondition failed: ${msg}`, 412);
}

// 413 - entity too large
export function tooLarge(msg) {
  return new ApiError(`Upload failed: ${msg}`, 413);
}

// 422 - unprocessable entity
export function cannotProcess(msg) {
  return new ApiError(`Upload failed: ${msg}`, 422);
}

// 507 - no storage
export function storageFull(msg) {
  return new ApiError(`Upload failed: ${msg}`, 507);
}

// other - to ensure any internal crash details arent leaked
export function getErrorResponse(err) {
  if (err instanceof ApiError) {
    return {
      message: err.message,
      status: err.status,
    };
  }

  // 500 - unknown crash
  return {
    message: "An unexpected error has occurred...try again later",
    status: 500,
  };
}
