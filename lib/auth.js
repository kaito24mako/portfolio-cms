export function isAuthorised(req) {
  const apiKey = req.headers.get("x-api-key");

  if (!apiKey || !process.env.API_KEY) return false;

  if (apiKey !== process.env.API_KEY) return false;

  // compare HTTP's x-api-key to the actual key
  return apiKey === process.env.API_KEY;
}
