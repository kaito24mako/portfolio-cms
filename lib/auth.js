export function isAuthorised(req) {
  // headers.get reads the custom HTTP header named x-api-key
  const apiKey = req.headers.get("x-api-key");

  if (!apiKey) return false;
  if (!process.env.API_KEY) return false;

  // compare HTTP's x-api-key to the actual key
  return apiKey === process.env.API_KEY;
}
