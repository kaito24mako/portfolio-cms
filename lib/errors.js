export class AppError extends Error {
  constructor(message, status = 500) {
    super(message);
    this.name = "AppError";
    this.status = status;
  }
}

// 400 - malformed input
export function badRequest(message) {
  return new AppError(message, 400);
}

// 401 - unauthorised request
export function unauthorised(message = "Access denied - Unauthorised") {
  return new AppError(message, 401);
}

// 404 - missing
export function notFound(message) {
  return new AppError(message, 404);
}

// 409 - duplicates
export function conflict(message) {
  return new AppError(message, 409);
}

// other
export function getErrorResponse(err) {
  if (err instanceof AppError) {
    return {
      message: err.message,
      status: err.status,
    };
  }

  // 500 - unknown crash
  return {
    message: "Internal server error",
    status: 500,
  };
}
