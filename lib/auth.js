export function isAuthorised(req) {
  // headers.get reads the custom HTTP header named x-api-key
  const apiKey = req.headers.get("x-api-key");

  if (!apiKey || !process.env.API_KEY)
    return res.status(401).send("Access denied - No token provided");

  if (apiKey !== process.env.API_KEY)
    return res.status(400).send("Invalid token");

  // compare HTTP's x-api-key to the actual key
  return apiKey === process.env.API_KEY;
}
